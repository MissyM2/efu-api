import { gql } from 'apollo-server-express';

import studentSchema from './student';
import courseSchema from './course';

const linkSchema = gql`
  scalar Date

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [linkSchema, studentSchema, courseSchema];
