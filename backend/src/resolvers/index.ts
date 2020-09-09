const mutations = require("./mutations/index.ts");
const queries = require("./queries/index.ts");

module.exports = {
  Mutation: {
    ...mutations,
  },
  Query: {
    ...queries,
  },
};
