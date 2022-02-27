import { useQuery } from "urql";

export const findResultByNameQuery = `
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

const findResultsByName = (): JSX.Element => {
  const [{ data, fetching, error }] = useQuery({
    query: findResultByNameQuery,
  });

  if (fetching) return <>...loading</>;
  if (error) return <>{error.message}</>;

  const resultsList: ResultType[] = data.data;
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
