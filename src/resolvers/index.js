const { prisma } = require('../prisma/client');
const { Query } = require('./query.js');
const { Mutation } = require('./mutation.js');

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

const resolvers = {
  Student,
  Course,
  Query,
  Mutation,
};

module.exports = {
  resolvers,
};
