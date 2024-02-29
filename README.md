# INSIGHT

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
```

## Setup

1. Clone the repository: `https://github.com/taurusilver7/insight-api`
2. Copy the `.env.example` to `.env` and update the necessary variables `cp .env.example .env`
3. Install dependencies & run migrations `yarn install && yarn migrate`
4. Ready to boot the server with `yarn dev`
5. Acess the REST api endpoint at url `http://localhost:3000` or the port you specified at `.env`
