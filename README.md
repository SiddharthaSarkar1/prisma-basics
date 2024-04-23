# Prisma Crash Course

# Prisma: A Database Toolkit for Modern Applications

Prisma is an open-source database toolkit designed to streamline database interactions for modern applications. It provides a type-safe query engine and an Object-Relational Mapping (ORM) layer to work with various databases like PostgreSQL, MySQL, SQLite, and more. Below is a quick overview of Prisma's key features:

## Key Features

- **Type Safety**:  
  Prisma generates a type-safe client based on your database schema. This helps catch errors at compile-time, improving developer productivity and reducing runtime errors.

- **Database Schema Management**:  
  Prisma uses a declarative approach to define your database schema in a Prisma schema file. You can define models, fields, and relationships, and Prisma takes care of generating the necessary migrations to update the database structure.

- **Migration Management**:  
  Prisma has a built-in migration system to handle changes to your database schema. It allows you to create, apply, and roll back migrations, providing a straightforward way to manage database schema changes across different environments.

- **Query Engine**:  
  Prisma provides a robust query engine that allows you to interact with your database using a type-safe API. This API supports complex queries, filtering, sorting, and transactions.

- **Database Agnosticism**:  
  Prisma supports multiple databases, allowing you to switch between them with minimal changes to your codebase.

## Applications of Prisma

Prisma is used in many modern applications to simplify database interactions, reduce boilerplate code, and improve developer experience through type safety. It's often integrated with Node.js/TypeScript backends but can be used in other languages and frameworks, depending on the application's architecture.


# Prisma Basics Commands For Setup

> npm init -y

> npm install typescript ts-node @types/node -D

> npx tsc --init

> npm i prisma 

> npx prisma init --datasource-provider

# After creatring schema run migration command

> npx prisma migrate dev --name init

# To open prisma studio

> npx prisma studio