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
};
