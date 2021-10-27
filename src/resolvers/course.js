const { prisma } = require('../prisma/client');

export default {
  Query: {
    courses: (parent, args) => {
      return prisma.course.findMany({});
    },

    course: (parent, args) => {
      return prisma.course.findFirst({
        where: { id: Number(args.id) },
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
