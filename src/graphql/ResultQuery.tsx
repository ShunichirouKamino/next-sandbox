export const findResultByNameQuery = `
  query FindAllResults {
    findResultsByName(name: "shunichiro") {
      data {
        _id
        date
        label
        name
        score
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
