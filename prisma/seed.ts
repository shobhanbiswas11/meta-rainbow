import { faker } from "@faker-js/faker";
import { Role } from "@prisma/client";
import { generate } from "password-hash";
import prisma from "../src/db";

async function main() {
  function createRandomUser() {
    return {
      email: faker.internet.email(),
      name: faker.person.fullName(),
      role: faker.helpers.arrayElement(["admin, user"]),
    };
  }

  const adminName = process.env.ADMIN_NAME;
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (adminEmail && adminPassword && adminName) {
    await prisma.user.create({
      data: {
        email: adminEmail,
        name: adminName,
        password: generate(adminPassword),
        role: Role.admin,
      },
    });
  }

  await Promise.all(
    faker.helpers.multiple(createRandomUser, { count: 20 }).map((user) => {
      return prisma.user.create({
        data: {
          email: user.email,
          name: user.name,
          password: generate("password"),
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
