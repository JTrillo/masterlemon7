import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Car {
    car_id: Int!
    name: String!
    brand: String!
    year_release: String!
  }

  type Query {
    cars: [Car!]!
    car(id: Int!): Car!
  }

  input CarCreate {
    name: String!
    brand: String!
    year_release: String!
  }

  type Mutation {
    addCar(carCreate: CarCreate!): Boolean
  }
`;