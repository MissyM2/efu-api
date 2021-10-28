import { gql } from 'apollo-server-express';

export default gql`
  type Course {
    id: ID!
    student: Student!
    code: String!
    title: String!
    longDesc: String
    deliverables: [Deliverable]
    updatedAt: String
    createdAt: String
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

  type Mutation {
    createCourse(data: CourseCreateInput!, studentId: Int!): Course!
  }
`;
