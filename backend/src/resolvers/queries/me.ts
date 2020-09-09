module.exports = {
  Query: {
    me(_, __, { user }) {
      return user;
    },
  },
};
