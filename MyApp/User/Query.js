import { gql } from '@apollo/client';

export const GET_POST = gql`
query($id:ID!){
  user(id:$id){
    id
    username
    email
    phone
    company{name}
  }
}
`;
