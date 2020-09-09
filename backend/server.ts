const { ApolloServer, gql } = require("apollo-server");

const users = [{ username: "example1" }, { username: "example2" }];

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }

  type Query {
    users: [User]
  }
`;
const resolvers = {
  Query: {
    users: () => {
      console.log("resolvers");
      return users;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
