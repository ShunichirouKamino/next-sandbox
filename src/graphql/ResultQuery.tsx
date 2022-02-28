import { gql } from "graphql-request";

export const findEachResultByName = gql`
  query FindEachResultByName($name: String!) {
    findEachResultByName(name: $name) {
      data {
        name
        score
      }
    }
  }
`;

export const createResultMutation = gql`
  mutation CreateResult($date: Date, $label: String) {
    createResult(
      data: {
        id: 1
        date: $date
        label: $label
        each: {
          create: [
            { name: "shunichiro", score: 12.1 }
            { name: "A", score: 51.2 }
            { name: "B", score: -9.9 }
            { name: "C", score: -53.4 }
          ]
        }
      }
    ) {
      date
      label
    }
  }
`;

export type EachResultType = {
  name: string;
  result: number;
};
