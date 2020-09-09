const { ApolloServer, gql } = require("apollo-server");

const users = [
  { name: "example1", email: "email@email.com" },
  { name: "example2", email: "email2@email.com" },
];

const typeDefs = gql`
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
    users: [User]!
  }

  type Mutation {
    signup(input: SignupInput!): AuthUser!
    signin(input: SigninInput!): AuthUser!
  }
`;

const resolvers = {
  Query: {
    users: () => users,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
