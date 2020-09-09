const { gql } = require("apollo-server");

module.exports = gql`
  enum Role {
    ADMIN
    MEMBER
    GUEST
  }

  type User {
    id: ID!
    name: String!
    email: String!
    verified: Boolean!
    createAt: String!
    updatedAt: String!
    role: Role!
  }

  type AuthUser {
    token: String!
    user: User!
  }

  input SignupInput {
    email: String!
    password: String!
    role: Role!
  }

  input SigninInput {
    email: String!
    password: String!
  }

  type Query {
    me: User!
  }

  type Mutation {
    signup(input: SignupInput!): User!
  }
`;
