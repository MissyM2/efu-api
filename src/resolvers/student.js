const { prisma } = require('../prisma/client');

export default {
  Query: {
    student: (parent, args) => {
      const id = +args.id;
      return prisma.student.findUnique({
        where: {
          id,
        },
        include: {
          courses: {
            include: {
              deliverables: true,
            },
          },
        },
      });
    },

    students: (parent, args) => {
      return prisma.student.findMany({
        include: { courses: true },
      });
    },
  },

  Mutation: {
    registerStudent: (parent, args) => {
      return prisma.student.create({
        data: {
          email: args.data.email,
          firstName: args.data.firstName,
          lastName: args.data.lastName,
          password: args.data.password,
        },
      });
    },
  },

  Student: {
    id: (parent, args, context, info) => parent.id,
    email: (parent) => parent.email,
    firstName: (parent) => parent.firstName,
    lastName: (parent) => parent.lastName,
    password: (parent) => parent.password,
  },
};
