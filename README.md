# rest-api-bun-elysia-prisma

## Overview

This project is a RESTful API built using [Bun](https://bun.sh) and Prisma for efficient JavaScript runtime. Follow the steps below to set up and run the project successfully.

## Prerequisites

Make sure you have the following prerequisites installed:

- [Bun](https://bun.sh) (v1.0.18 or later)

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/justluck-rs/rest-api-bun-elysia-prisma.git
cd rest-api-bun-elysia-prisma
bun install
```

## Database Configuration

Create a database and set the connection URL in the `.env`:


Edit the `.env` file with your database connection URL and other configuration details:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/your_database_name?schema=public"
```

Replace `username`, `password`, and `your_database_name` with your PostgreSQL credentials and desired database name.

## Run Migrations

Apply Prisma migrations to create and update the database schema:

```bash
bunx prisma migrate dev
```

## Run the Application

Start the application:

```bash
bun run dev
```

The API will be accessible at `http://localhost:3000`. Make sure your database is running and accessible.
```bash
http://localhost:3000
```

