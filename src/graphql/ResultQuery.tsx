import { useQuery } from "urql";

const getQuery = `
query FindAllResults {
  findResultsByName(name: "shunichiro") {
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

export type ResultType = {
  date: Date;
  label: string;
  name: string;
  result: number;
};

const findResultsByName = ({ limit = 10 }): JSX.Element => {
  const [results] = useQuery({
    query: getQuery,
    variables: { limit },
  });

  if (results.fetching) return <>...loading</>;
  if (results.error) return <>{results.error.message}</>;

  const resultsList: ResultType[] = results.data.data;
  console.log(resultsList);

  return (
    <ul>
      {resultsList ? (
        resultsList.map(({ name, result }, index) => (
          <li key={index}>{name}</li>
        ))
      ) : (
        <p>aa</p>
      )}
    </ul>
  );
};

export default findResultsByName;
