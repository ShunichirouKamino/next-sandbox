import { GetServerSideProps, NextPage } from "next";
import { initUrqlClient, withUrqlClient } from "next-urql";
import React from "react";
import { useQuery, ssrExchange, ClientOptions } from "urql";
import { findEachResultByName } from "../graphql/ResultQuery";
import { clientOptions } from "../lib/urqlClient";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const ssrCache = ssrExchange({ isClient: false });
  const client = initUrqlClient(clientOptions, false);

  await client.query(findEachResultByName).toPromise;

  return {
    props: {
      urlState: ssrCache.extractData(),
    },
    //revalidate: 600,
  };
};

const Home: NextPage = (): JSX.Element => {
  const [res] = useQuery({
    query: findEachResultByName,
    variables: {
      name: "A",
    },
  });

  if (res.fetching) {
    return <div>...loading</div>;
  }

  if (res.error) {
    return <div>error: {res.error.message}</div>;
  }

  const results = res.data.findEachResultByName.data;

  return (
    <div>
      {results ? (
        results.map((c) => <div key={c.code}>{c.name}</div>)
      ) : (
        <div>not found</div>
      )}
    </div>
  );
};

export default withUrqlClient(
  (ssr) => clientOptions,
  { ssr: false } // Important so we don't wrap our component in getInitialProps
)(Home);
