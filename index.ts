import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //Prisma Queries ====>
  //1. Create User
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Jonardan Das",
  //       email: "jonardan.d@gmail.com",
  //     },
  //   });
  // console.log(user);

  //2. Get all users
  //   const users = await prisma.user.findMany();
  //   console.log(users);

  //3. Create an article and associate it with user
  //   const article = await prisma.article.create({
  //     data: {
  //       title: "Jonardan's first article",
  //       body: "This is jonardan's first article.",
  //       author: {
  //         connect: {
  //           id: 1,
  //         },
  //       },
  //     },
  //   });
  //   console.log(article);

  //4. Get all articles
  //   const articles = await prisma.article.findMany();
  //   console.log(articles);
  //5. Create user and article and associate them
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Sarada Saha",
  //       email: "arada.s@gmail.com",
  //       articles: {
  //         create: {
  //           title: "Saradas first article",
  //           body: "This is saradas first article",
  //         },
  //       },
  //     },
  //   });
  //   console.log(user);


  //6. Get users with articles
  //   const users = await prisma.user.findMany({
  //     include: {
  //       articles: true,
  //     },
  //   });
  //   console.log(users);

  //7. Create another article and associate it with user
    // const article = await prisma.article.create({
    //   data: {
    //     title: "Sarada's article",
    //     body: "This is Saradas sample article.",
    //     author: {
    //       connect: {
    //         id: 2,
    //       },
    //     },
    //   },
    // });
    // console.log(article);


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
