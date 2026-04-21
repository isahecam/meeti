import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { nextCookies } from "better-auth/next-js"

import { db } from "~/db"
import { AuthEmailService } from "~/shared/emails/services/auth-email-service"

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    usePlural: true,
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  emailVerification: {
    enabled: true,
    sendVerificationEmail: async ({ url, user: { name, email } }) => {
      await AuthEmailService.sendVerificationEmail(name, email, url)
    },
  },
  plugins: [nextCookies()],
})
