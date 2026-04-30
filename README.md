# Meeti

> Web platform to create, discover, and join communities of people who share common interests.

Meeti lets users sign up, create their own communities, manage them from a dashboard, and join existing ones to share what they love with like-minded people.

## Features

- Email & password authentication (sign up, sign in, forgot/reset password) powered by Better Auth.
- Create, edit, and delete your own communities.
- Browse and join communities created by other users.
- Personal dashboard to manage your communities and the ones you've joined.
- Image uploads for community covers via UploadThing.
- Transactional emails (password reset, etc.) via Resend + React Email.
- Light/dark theme support.
- Type-safe forms with React Hook Form + Zod.
- Type-safe database access with Drizzle ORM on Neon Postgres.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack) + [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Auth:** [Better Auth](https://www.better-auth.com/)
- **Database:** [Neon Postgres](https://neon.tech/) + [Drizzle ORM](https://orm.drizzle.team/)
- **Forms & Validation:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
- **File Uploads:** [UploadThing](https://uploadthing.com/)
- **Emails:** [Resend](https://resend.com/) + [React Email](https://react.email/)
- **Notifications:** [Sonner](https://sonner.emilkowal.ski/)
- **Lint/Format:** [oxlint](https://oxc.rs/docs/guide/usage/linter) + [oxfmt](https://oxc.rs/)
- **Runtime / Package Manager:** [Bun](https://bun.sh/)

## Project Structure

```
meeti/
├── app/                    # Next.js App Router (routes, layouts, API)
│   ├── (public)/           # Public marketing pages
│   ├── auth/               # Login, sign-up, forgot/reset password
│   ├── dashboard/          # Authenticated user area (communities, etc.)
│   └── api/                # Route handlers (auth, uploadthing)
├── features/               # Feature-based modules (auth, communities, dashboard)
│   └── <feature>/
│       ├── actions/        # Server Actions
│       ├── components/     # Feature-specific UI
│       ├── schemas/        # Zod schemas
│       ├── services/       # Repositories & business logic
│       ├── policies/       # Authorization rules
│       └── types/
├── db/                     # Drizzle schema and DB client
│   └── schema/
├── drizzle/                # SQL migrations & metadata
├── shared/                 # Shared UI, providers, utilities
├── lib/                    # Cross-cutting helpers (auth, utils)
└── public/                 # Static assets
```

## Available Scripts

| Script              | Description                                 |
| ------------------- | ------------------------------------------- |
| `bun run dev`       | Start the Next.js dev server with Turbopack |
| `bun run build`     | Create a production build                   |
| `bun run start`     | Start the production server                 |
| `bun run lint`      | Run oxlint                                  |
| `bun run lint:fix`  | Run oxlint and auto-fix issues              |
| `bun run fmt`       | Format the code with oxfmt                  |
| `bun run fmt:check` | Check formatting                            |
| `bun run typecheck` | Run TypeScript without emitting files       |

## License

This project is licensed under the [AGPL v3](./LICENSE) license.  
© 2026 Brandon Hernández
