exports.resolvers = {
  Query: {
    clients: (_, { term }, { dataSources }) => {
      return dataSources.entitiesAPI.get('entities', { term })
    },
  },
};
