import {
  createClient,
  dedupExchange,
  cacheExchange,
  fetchExchange,
  ssrExchange,
} from "@urql/core";

const isServerSide = typeof window === "undefined";

// The `ssrExchange` must be initialized with `isClient` and `initialState`
const ssrCache = ssrExchange({
  isClient: !isServerSide,
  //initialState: !isServerSide ? window.__URQL_DATA__ : undefined,
});

const client = createClient({
  url: "https://graphql.fauna.com/graphql",
  fetchOptions: () => {
    const token = process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESSTOKEN;
    return token
      ? {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github.packages-preview+json",
          },
        }
      : {};
  },
  exchanges: [
    dedupExchange,
    cacheExchange,
    ssrCache, // Add `ssr` in front of the `fetchExchange`
    fetchExchange,
  ],
});

export { client, ssrCache };
