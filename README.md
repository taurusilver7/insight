# INSIGHT - Books & Authors

A Secured, CRUD, RESTful API to manage books, authors (bio) for the registered users. It could be used as an api for a library rental feature.

It was built with Typescript, Express, TyepORM, Class Validators & JWT.

## Features

-  CRUD operations for books and authors
-  Authentication and authorization with JWT
-  Validation with Class Validator
-  Pagination support
-  Error handling

## Available Scripts

```bash
yarn init -y
# and
yarn add (dependencies)
# and
yarn add -D (dev-dependencies)
# and
npx tsc --init (ts-config)
# and
yarn dev (local dev server)
```

## Setup

1. Clone the repository: `https://github.com/taurusilver7/insight`
2. Copy the `.env.example` to `.env` and update the necessary variables `cp .env.example .env`
3. Install dependencies & run migrations `yarn install && yarn migrate`
4. Ready to boot the server with `yarn dev`
5. Acess the REST api endpoint at url `http://localhost:3000` or the port you specified at `.env`

## Stack

-  Typescript
-  TypeORM
-  MySQL
-  JWT
-  Class Validator

## Build

Add the dependencies & dev-dependencies to the api. Create a typescript configuration to enable compiler options & strict compilation features.

Create app & index server files in src directory. Initiate a starter server in app with base middlewares. Create a server listener in index.

Create a development server script to watch src directory & run the server with nodemon. Since ts-node was not a globally installed dependency, modify the script to suit the requirement.

Optional - Add jest & supertest test dependencies to the build. Create test cases for app & api modules.

Create a mysql 8.0.36 local database & setup the mysql server. Create a data-source config to connect the local database to the application.

Create corresponding scripts to create/run/show/revert database migrations. Configure the migration-create path and corresponding cmd line arguments.

Create a new migration:create for authors table. Customize the table columns, types, and other characterstics with base mysql table syntax.

## Running via Docker

To run Insight via Docker, set the `DB_HOST` environment variable to `"mysql"` in the `.env` file. Then run the following command: `docker compose up --build`

his will build and run the Docker container for the app and the MySQL database. You can then access the app at `http://localhost:3000`.

Make sure that you have Docker installed on your machine before running this command. You can download Docker
