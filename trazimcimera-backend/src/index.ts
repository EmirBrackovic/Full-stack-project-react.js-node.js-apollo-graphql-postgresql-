const { ApolloServer } = require("apollo-server");
const dotenv = require("dotenv");
const typeDefs = require("./typedef");
const userAPI = require("./services/user");
const impressionsAPI = require("./services/impression/model");
const postAPI = require("./services/post/model");
const middleware = require("./services/authorization");
const resolvers = require("./resolvers");

dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    userAPI: userAPI,
    impressionsAPI: impressionsAPI,
    postAPI: postAPI,
    middleware
  }),
  context: ({ req }) => {
    // Get the user token from the headers.
    const token = req.headers.authorization || "";

    // try to retrieve a user from the token
    const user = userAPI.authenticate(token);
    // add the user to the context
    return { user };
  },
});

server.listen(process.env.PORT).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
