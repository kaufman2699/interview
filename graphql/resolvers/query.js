const CLIENTS = [
  {
    name: "e-Magination Systems Design",
    identifier: "0110100100",
    category: "client",
  },
  {
    name: "e-Magination Systems Design",
    identifier: "PR-0110100100",
    category: "prospect",
  },
  {
    name: "Q4 Audit",
    identifier: "72a0d9b46a1560f21bf5649e8e3f0e17b43f0abb",
    category: "job",
  },
];

exports.resolvers = {
  Query: {
    clients: (_, { term }, { dataSources }) => {
      return dataSources.entitiesAPI.get('entities', { term })
    },
  },
};
