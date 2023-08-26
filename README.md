# Modern Web App Template

## Tech stack

- NextJS 13
- Prisma
- TypeScript
- Shadcn/ui
- NextAuth
- TailwindCSS

## Steps for getting started

1. Run `npm install` to install project dependencies
2. Run `cp .env.example .env` to create your own environment file
3. Modify `.env` to include your own GitHub application credentials
4. Run `npm run db` to spin up the PostgreSQL database Docker container
5. Run `npx prisma migrate reset` to clean the database and run the initial migration
6. Run `npm run dev` to start the web application
