import { gql } from 'apollo-server-express';

export default gql`
  type Deliverable {
    id: ID!
    course: Course!
    dueDate: Date!
    title: String!
    longDesc: String
    prepTime: Int!
    impact: String!
    updatedAt: Date!
    createdAt: Date
  }

  input DeliverableCreateInput {
    dueDate: Date!
    title: String!
    longDesc: String
    prepTime: String!
    impact: String!
  }

  extend type Query {
    deliverables: [Deliverable]!
    deliverable(id: ID!): Deliverable
  }

  extend type Mutation {
    createDeliverable(
      data: DeliverableCreateInput!
      courseId: Int!
    ): Deliverable!
  }
`;
