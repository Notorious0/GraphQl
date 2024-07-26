import { gql } from "@apollo/client";

export const GET_USER_LIST = gql`
  query getUsers($opts: PageQueryOptions) {
    users(options: $opts) {
      data {
        id
        username
      }
      meta {
        totalCount
      }
    }
  }
`;
