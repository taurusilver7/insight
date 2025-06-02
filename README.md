# INSIGHT | AI-ticket-Assistant

A Full-stack AI based ticketing system, built with Inngest cron-jobs & Gemini AI.

This project is a web application that uses AI to automatically categorize, prioritize, and assign support tickets to the most appropriate moderators.

A smart ticket management system that uses AI to automatically categorize, prioritize, and assign support tickets to the most appropriate moderators.

## Features

### AI-powered Ticket Processing

-  Automatic ticket categorization
-  Smart priority assignment
-  Skill-based moderator matching
-  AI-generated helpful notes for moderators

### Smart Moderator Assignment

-  Automatic matching of tickets to moderators based on skills
-  Fallback to admin assignment if no matching moderator found
-  Skill-based routing system.

### User Management

-  Role-based access control (User, Moderator, Admin)
-  Skill management for moderators
-  User authentication with JWT

### Background Processing

-  Event-driven architecture using Inngest
-  Automated email notifications
-  Asynchronous ticket processing

## Available Scripts

## Setup

1. Clone the repository: `https://github.com/taurusilver7/insight`
2. Copy the `.env.example` to `.env` and update the necessary variables
   `cp .env.example .env`
3. Install dependencies & run migrations `bun install && bun migrate`
4. Ready to boot the server with `bun dev`

## Stack

-  Node.js with Express
-  Inngest
-  MongoDB
-  JWT
-  Google Gemini API
-  Nodemailer with Mailtrap
