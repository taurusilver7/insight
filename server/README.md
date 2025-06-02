# INSIGHT : SERVER

A Full-stack AI based ticketing system, built with Gemini AI Agent & Inngest.

To install dependencies:

```bash
# start with a standard server template.
bun init -j
# add dependencies
bun install <dependency>
```

To run:

```bash
bun run index.ts
```

## Dependencies

-  bcrypt - password hashing
-  cors - handling cross-origin between server and client (diff urls)
-  express - node routing library
-  mongoose - mongodb ORM
-  nodemailer - javascript email-client
-  inngest/agent-kit - browser background cron job for ticket

## API endpoints

-  Authentication

-  `POST /api/auth/signup` - Register a new user
-  `POST /api/auth/login` - Login and get JWT token.

-  Tickets

-  `POST /api/tickets` - Create a new ticket
-  `GET /get/tickets` - Get all tickets for logged-in user
-  `GET /api/tickets/:id` - Get ticket details

-  Admin
-  `GET /api/auth/users` - Get all users (Admin only)
-  `POST /api/auth/update-user` - Update user role & skills (Admin only)

## Build

Add the necessary dependencies to the build & the necessary running scripts.

Create database models for user, ticket

## Learn More

This project was created using `bun init` in bun v1.2.10. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
