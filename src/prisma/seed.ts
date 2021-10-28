import { PrismaClient } from '@prisma/client';
import faker from 'faker';

const prisma = new PrismaClient();

async function main() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }
  await prisma.student.deleteMany();
  await prisma.course.deleteMany();
  await prisma.deliverable.deleteMany();
  console.log('items should have been deleted');
  for (let i = 0; i < 2; i++) {
    console.log('adding a new row');

    await prisma.student.create({
      data: {
        email: `${faker.internet.email()}`,
        firstName: `${faker.name.firstName(5)}`,
        lastName: `${faker.name.lastName(8)}`,
        password: `${faker.random.alphaNumeric(8)}`,
        courses: {
          create: [
            {
              code: 'ENG101',
              title: 'English 101',
              longDesc: `${faker.lorem.words(4)}`,
              deliverables: {
                create: [
                  {
                    dueDate: faker.date.soon(),
                    title: 'QUIZ',
                    longDesc: `${faker.lorem.words(4)}`,
                    prepTime: 1,
                    impact: 'MEDIUM',
                  },
                  {
                    dueDate: faker.date.soon(),
                    title: 'QUIZ',
                    longDesc: `${faker.lorem.words(4)}`,
                    prepTime: 1,
                    impact: 'MEDIUM',
                  },
                  {
                    dueDate: faker.date.soon(),
                    title: 'TEST',
                    longDesc: `${faker.lorem.words(4)}`,
                    prepTime: 1,
                    impact: 'HIGH',
                  },
                ],
              },
            },
            {
              code: 'MATH101',
              title: 'Math 101',
              longDesc: `${faker.lorem.words(7)}`,
              deliverables: {
                create: [
                  {
                    dueDate: faker.date.soon(),
                    title: 'HOMEWORK',
                    longDesc: `${faker.lorem.words(4)}`,
                    prepTime: 1,
                    impact: 'LOW',
                  },
                  {
                    dueDate: faker.date.soon(),
                    title: 'QUIZ',
                    longDesc: `${faker.lorem.words(4)}`,
                    prepTime: 1,
                    impact: 'MEDIUM',
                  },
                  {
                    dueDate: faker.date.soon(),
                    title: 'TEST',
                    longDesc: `${faker.lorem.words(4)}`,
                    prepTime: 1,
                    impact: 'HIGH',
                  },
                ],
              },
            },
          ],
        },
      },
    });
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect;
  });
