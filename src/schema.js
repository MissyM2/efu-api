const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Student {
    id: ID!
    email: String!
    firstName: String!
    lastName: String!
    password: String!
    courses: [Course]
    updatedAt: String
    createdAt: String
  }

  type Course {
    id: ID!
    student: Student!
    code: String!
    title: String!
    longDesc: String
    updatedAt: String
    createdAt: String
  }

  input StudentCreateInput {
    email: String!
    firstName: String!
    lastName: String!
    password: String!
  }

  input CourseCreateInput {
    code: String!
    title: String!
    longDesc: String!
  }

  type Query {
    students: [Student]
    student(id: ID!): Student
    courses: [Course]!
    course(id: ID!): Course
  }

  type Mutation {
    registerStudent(data: StudentCreateInput!): Student!
    createCourse(data: CourseCreateInput!, studentId: Int!): Course!
  }
`;

module.exports = {
  typeDefs,
};
