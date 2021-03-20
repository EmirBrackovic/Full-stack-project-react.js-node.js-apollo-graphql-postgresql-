module.exports = {
  Query: {
    me: (_, __, { dataSources, user }) =>
      dataSources.middleware.authorize(() => dataSources.userAPI.getUserById(user), {
        user,
      }),
    users: (_, __, { dataSources, user }) =>
      dataSources.middleware.authorize(dataSources.userAPI.getAllUsers, {
        user,
      }),
    impressions: (_, __, { dataSources }) =>
      dataSources.impressionsAPI.getAllImpressions(),
    impressionById: (_, id, { dataSources }) =>
      dataSources.impressionsAPI.getImpressionById(id),
    posts: (_, __, { dataSources, user }) =>
      dataSources.middleware.authorize(
        () => dataSources.postAPI.getAllPosts(),
        {
          user,
        }
      ),
    postById: (_, id, { dataSources, user }) =>
      dataSources.middleware.authorize(
        () => dataSources.postAPI.getPostById(id),
        {
          user,
        }
      ),
  },
  Mutation: {
    login: (_, input, { dataSources }) => dataSources.userAPI.loginUser(input),
    register: (_, input, { dataSources }) =>
      dataSources.userAPI.registerUser(input),
    addPost: (_, input, { dataSources, user }) =>
      dataSources.middleware.authorize(
        () => dataSources.postAPI.createPost(input),
        {
          user,
        }
      ),
  },
};
