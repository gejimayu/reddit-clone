import { gql } from 'apollo-server-express';

export const baseTypeDefs = gql`
  type Query
  type Mutation

  type Error {
    fieldName: String
    message: String!
  }
`;
