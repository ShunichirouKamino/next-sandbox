export const findEachResultByName = `
  query FindEachResultByName($name: String!) {
    findEachResultByName(
      name: $name
    ) {
      data {
        name
        score
      }
    }
  }
`;

export const createResultMutation = `
  mutation CreateResult {
    createResult(
      data: {
        id: 1
        date: "2022-02-25"
        label: "first"
        each: {
          create: [
            { name: "shunichiro", score: 12.0 }
            { name: "A", score: 51.1 }
            { name: "B", score: -9.8 }
            { name: "C", score: -53.3 }
          ]
        }
      }
    ) {
      date
      label
    }
  }
`;

export type ResultType = {
  date: Date;
  label: string;
  name: string;
  result: number;
};
