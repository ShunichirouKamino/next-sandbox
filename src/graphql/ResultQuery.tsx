import { gql } from "graphql-request";
import { EachResultType } from "../types/result";

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
  mutation CreateResult($date: Date!, $label: String!, $each: [EachInput!]!) {
    createResult(
      data: { id: 1, date: $date, label: $label, each: { create: $each } }
    ) {
      date
      label
    }
  }
`;
