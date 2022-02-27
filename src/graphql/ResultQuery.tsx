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
