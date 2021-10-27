const { prisma } = require('../prisma/client');
import { GraphQLDateTime } from 'graphql-iso-date';
import studentResolvers from './student';
import courseResolvers from './course';
import deliverableResolvers from './deliverable';

const customScalarResolver = {
  Date: GraphQLDateTime,
};

const Student = {
  id: (parent, args, context, info) => parent.id,
  email: (parent) => parent.email,
  firstName: (parent) => parent.firstName,
  lastName: (parent) => parent.lastName,
  password: (parent) => parent.password,
};

const Course = {
  id: (parent) => parent.id,
  code: (parent) => parent.code,
  title: (parent) => parent.title,
  longDesc: (parent) => parent.longDesc,
  student: (parent, args) => {
    return prisma.course
      .findUnique({
        where: { id: parent.id },
      })
      .student();
  },
};

const Deliverable = {
  id: (parent) => parent.id,
  dueDate: (parent) => parent.dueDate,
  title: (parent) => parent.title,
  longDesc: (parent) => parent.longDesc,
  prepTime: (parent) => parent.prepTime,
  impact: (parent) => parent.impact,
  course: (parent, args) => {
    return prisma.deliverable
      .findUnique({
        where: { id: parent.id },
      })
      .course();
  },
};

export default [
  customScalarResolver,
  Student,
  Course,
  Deliverable,
  studentResolvers,
  courseResolvers,
  deliverableResolvers,
];
