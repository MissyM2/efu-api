const { prisma } = require('../prisma/client');

export default {
  Query: {
    course: (parent, args) => {
      const id = +args.id;
      return prisma.course.findUnique({
        where: {
          id,
        },
        include: { deliverables: true },
      });
    },
    courses: (parent, args) => {
      return prisma.course.findMany({
        include: { deliverables: true },
      });
    },
  },

  Mutation: {
    createCourse: (parent, args) => {
      return prisma.course.create({
        data: {
          code: args.data.code,
          title: args.data.title,
          longDesc: args.data.longDesc,
          student: args.studentId && {
            connect: { id: args.studentId },
          },
        },
      });
    },
  },

  Course: {
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
  },
};
