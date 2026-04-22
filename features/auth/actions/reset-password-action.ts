"use server"

import { ResetPasswordSchema, ResetPasswordType } from "~/features/auth/schemas/auth-schema"
import { authService } from "~/features/auth/services/auth-service"
import { err } from "~/lib/result"

export async function resetPasswordAction(values: ResetPasswordType, token: string) {
  const { success, data } = ResetPasswordSchema.safeParse(values)

  if (!success) return err({ reason: "INVALID_DATA" })

  return await authService.resetPassword(data, token)
}
