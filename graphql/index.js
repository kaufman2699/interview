const { ApolloServer } = require("apollo-server");
const { RESTDataSource } = require('apollo-datasource-rest');
const { typeDefs } = require("./types/query");
const { resolvers } = require("./resolvers/query");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: false,
  cache: "bounded",
  dataSources: () => {
    const entitiesAPI = new RESTDataSource();
    entitiesAPI.baseURL = 'http://localhost:3001/';

    return {
      entitiesAPI: entitiesAPI
    }
  }
});

server
  .listen({
    host: "0.0.0.0",
    port: "4000",
  })
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
