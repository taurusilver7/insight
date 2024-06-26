# INSIGHT - Books & Authors

A Secured, CRUD, RESTful API to manage books, authors (bio) for the registered users. It could be used as an api for a library rental feature.

Built with Typescript, Express, TyepORM, Class Validators & JWT.

## Features

- CRUD operations for books and authors
- Authentication and authorization with JWT
- Validation with Class Validator
- Pagination support
- Error handling

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

- Typescript
- TypeORM
- MySQL
- JWT
- Class Validator

## Build

Add the dependencies & dev-dependencies to the api. Create a typescript configuration to enable compiler options & strict compilation features.

Create app & index server files in src directory. Initiate a starter server in app with base middlewares. Create a server listener in index.

Create a development server script to watch src directory & run the server with nodemon. Since ts-node was not a globally installed dependency, modify the script to suit the requirement.

Optional - Add jest & supertest test dependencies to the build. Create test cases for app & api modules.

Create a mysql 8.0.36 local database & setup the mysql server. Create a data-source config to connect the local database to the application.

Create corresponding scripts to create/run/show/revert database migrations. Configure the migration-create path and corresponding cmd line arguments.

Create a new migration:create for authors table. Customize the table columns, types, and other characterstics with base mysql table syntax.

Create a new CreateTable queryRunner in the migration to create a table with necessary columns with data fields. Create a dropTable queryRunner in the migration to delete the created table. Add a clause to create a new table only if there's no existing table with the same name in the database.

Since the data fields keeps repeating in routes, controllers & entities for the tables, create constant variables t keep the changes to a singularity. Modify the routes, controller & entities with constant variables.

Create a authorController class to create author-based methods to execute the author-related function in the routes. Create a method to get all the authors, and filter the authors based on the input params.

The getAuthor method throws an exception to their request when unmatched. Create a global exception handler to resolve unnecessary exceptions to handle.

Implement an offset pagination sequence, an database function, for the authors list in the author controller to get the fetched results in a page sequence. Implement the queryBuilder in author controller.

Add [multer](https://www.npmjs.com/package/multer), a node middleware for handling multipart/form-data, primarily used for uploading. The latest version has multiple discrepancies, unsuitable for mysql database. Add the depricated version@1.4.3

Create an upload middleware, which checks/create a storage location, encrpyts the filename, apply filters to the filetype and upload the image to the storage.

Create a author update controller function, with a validation dto for the update fields. Add the controller to the author `put` route to update the author instance, instead of `patch`

Create a controller function to delete a author row in the table. Create a corresponding route for delete method.

## Running via Docker

To run Insight via Docker, set the `DB_HOST` environment variable to `"mysql"` in the `.env` file. Then run the following command: `docker compose up --build`

his will build and run the Docker container for the app and the MySQL database. You can then access the app at `http://localhost:3000`.

Make sure that you have Docker installed on your machine before running this command. You can download Docker
