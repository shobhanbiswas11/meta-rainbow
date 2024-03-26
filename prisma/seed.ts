import { faker } from "@faker-js/faker";
import prisma from "../src/db";

async function main() {
  function createRandomUser() {
    return {
      email: faker.internet.email(),
      name: faker.person.fullName(),
      role: faker.helpers.arrayElement(["admin, user"]),
    };
  }

  return Promise.all(
    faker.helpers.multiple(createRandomUser, { count: 20 }).map((user) => {
      return prisma.user.create({
        data: {
          email: user.email,
          name: user.name,
        },
      });
    })
  );
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
