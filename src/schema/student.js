import { gql } from 'apollo-server-express';

export default gql`
  type Student {
    id: ID!
    email: String!
    firstName: String!
    lastName: String!
    password: String!
    courses: [Course]
    updatedAt: Date
    createdAt: Date!
  }

  input StudentCreateInput {
    email: String!
    firstName: String!
    lastName: String!
    password: String!
  }

  extend type Query {
    students: [Student]
    student(id: ID!): Student
  }

  extend type Mutation {
    registerStudent(data: StudentCreateInput!): Student!
`;
