const { prisma } = require('../prisma/client');

export default {
  Query: {
    deliverables: (parent, args) => {
      return prisma.deliverable.findMany({});
    },
    deliverable: (parent, args) => {
      return prisma.deliverable.findFirst({
        where: { id: Number(args.id) },
      });
    },
  },

  Mutation: {
    createDeliverable: (parent, args) => {
      console.log('what are args', args);
      return prisma.deliverable.create({
        data: {
          dueDate: args.data.code,
          title: args.data.title,
          longDesc: args.data.longDesc,
          prepTime: args.data.prepTime,
          impact: args.data.impact,
          course: args.courseId && {
            connect: { id: args.courseId },
          },
        },
      });
    },
  },

  Deliverable: {
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
  },
};
