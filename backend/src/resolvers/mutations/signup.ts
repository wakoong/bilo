module.exports = {
  Mutation: {
    signup: async (_, { input }, { models }) => {
      console.log(input, models);
      const newUser = await models.User.create(input);
      return newUser;
    },
  },
};
