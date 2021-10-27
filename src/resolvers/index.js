import { GraphQLDateTime } from 'graphql-iso-date';

import studentResolvers from './student';
import courseResolvers from './course';

const customScalarResolver = {
  Date: GraphQLDateTime,
};

export default [customScalarResolver, studentResolvers, courseResolvers];
