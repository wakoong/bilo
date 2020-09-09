const { ApolloServer } = require("apollo-server");
const connectDb = require("./config/db.ts");
const models = require("./models/index.ts");
const resolvers = require("./resolvers/index.ts");
const typeDefs = require("./types/userType.ts");

connectDb();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
