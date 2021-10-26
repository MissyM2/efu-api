const { prisma } = require('../prisma/client');

const Query = {
  student: (parent, args) => {
    // must cast id as number to avoid int/string error
    const id = +args.id;
    return prisma.student.findUnique({
      where: {
        id,
      },
      include: { courses: true },
    });
  },

  students: (parent, args) => {
    return prisma.student.findMany({
      include: { courses: true },
    });
  },

  courses: (parent, args) => {
    return prisma.course.findMany({});
  },

  course: (parent, args) => {
    return prisma.course.findFirst({
      where: { id: Number(args.id) },
    });
  },
};

module.exports = {
  Query,
};
