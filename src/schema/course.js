import { gql } from 'apollo-server-express';

export default gql`
  type Course {
    id: ID!
    student: Student!
    code: String!
    title: String!
    longDesc: String
    updatedAt: Date
    createdAt: Date!
  }

  input CourseCreateInput {
    code: String!
    title: String!
    longDesc: String!
  }

  extend type Query {
    courses: [Course]!
    course(id: ID!): Course
  }

  extend type Mutation {
    createCourse(data: CourseCreateInput!, studentId: Int!): Course!
  }
`;
