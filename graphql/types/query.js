const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Client {
    name: String!
    clientNumber: String!
  }

  type Query {
    clients(term: String): [Client!]!
  }
`;
