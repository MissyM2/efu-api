const { prisma } = require('../prisma/client');

const Mutation = {
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

module.exports = {
  Mutation,
};
