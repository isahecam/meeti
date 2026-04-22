"use server"

import { ForgotPasswordSchema, ForgotPasswordType } from "~/features/auth/schemas/auth-schema"
import { authService } from "~/features/auth/services/auth-service"
import { err } from "~/lib/result"

export async function forgotPasswordAction(values: ForgotPasswordType) {
  const { success, data } = ForgotPasswordSchema.safeParse(values)

  if (!success) return err({ reason: "INVALID_DATA" })

  return await authService.requestPasswordReset(data)
}
