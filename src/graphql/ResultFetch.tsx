import { GraphQLClient, gql } from "graphql-request";
import useSWR from "swr";

const API = "https://graphql.fauna.com/graphql"; // endpoint
const name = "shunichiro"; // name

const getRepositoryQuery = gql`
  query FindAllResults($name: String!) {
    findResultsByName(name: $name) {
      data {
        _id
        date
        label
        name
        result
      }
    }
  }
`;

type FetchData = {
  data: {
    _id: string;
    date: Date;
    label: string;
    name: string;
    result: number;
  }[];
};

const getResults = () => {
  // use GraphQLClient to set Header
  const client = new GraphQLClient(API, {
    headers: {
      Authorization:
        "bearer " + process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESSTOKEN,
    },
  });
  console.log("client: " + client);

  const { data, error } = useSWR<FetchData>(
    [getRepositoryQuery, name],
    // fetcher
    (query, name, label) =>
      client.request(query, {
        // variables
        name: name,
        lalbe: label,
      })
  );

  console.log(data);
  console.log(error);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return data.data.map((result) => (
    <li key={result._id}>
      {result.name} + {result.result}
    </li>
  ));
};

const ResultFetch = (): JSX.Element => (
  <>
    <h1>{name} List</h1>
    {getResults()}
  </>
);

export default ResultFetch;
