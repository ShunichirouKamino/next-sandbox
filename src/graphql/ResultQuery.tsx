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

export const findResults = gql`
  query FindResults($date: Date!, $label: String!) {
    findResults(date: $date, label: $label) {
      data {
        label
        date
        each {
          data {
            name
            rank
            score
          }
        }
        userGroup {
          member
          groupName
        }
      }
    }
  }
`;

export const createResultMutation = gql`
  mutation CreateResult(
    $date: Date!
    $label: String!
    $each: [EachInput!]!
    $userGroup: UserGroupInput!
  ) {
    createResult(
      data: {
        id: 1
        date: $date
        label: $label
        userGroup: { create: $userGroup }
        each: { create: $each }
      }
    ) {
      date
      label
    }
  }
`;
