import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  console.log('💫 seed executing ...');
  await prisma.task.deleteMany();
  await prisma.task.create({
    data: {
      taskname: 'testtask1',
      complete: true,
      Isdeleted: false,
    },
  });
  console.log('💫 seed finished.');
};

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
