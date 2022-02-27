import {
  createClient,
  dedupExchange,
  cacheExchange,
  fetchExchange,
  ssrExchange,
} from "@urql/core";
import { ClientOptions } from "urql";

const isServerSide = typeof window === "undefined";

// The `ssrExchange` must be initialized with `isClient` and `initialState`
const ssrCache = ssrExchange({
  isClient: !isServerSide,
  //initialState: !isServerSide ? window.__URQL_DATA__ : undefined,
});

const clientOptions: ClientOptions = {
  url: "https://graphql.fauna.com/graphql",
  fetchOptions: () => {
    const token = process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESSTOKEN;
    return token
      ? {
          headers: {
            Authorization: `Bearer ${token}`,
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
};

const client = createClient(clientOptions);

export { client, ssrCache, clientOptions };
