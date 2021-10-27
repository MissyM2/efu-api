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

  createCourse: (parent, args) => {
    console.log('what are args', args);
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
};
