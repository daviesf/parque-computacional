const { gql } = require('apollo-server');

const schema = gql`
type Car {
  id: ID!
  make: String!
  model: String!
  year: Int!
}

type Query {
  cars: [Car!]!
}
`;

module.exports = schema;