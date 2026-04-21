"use server"

import { SignUpSchema, SignUpType } from "~/features/auth/schemas/auth-schema"
import { authService } from "~/features/auth/services/auth-service"
import { err } from "~/lib/result"

export async function signUpAction(values: SignUpType) {
  const { success, data } = SignUpSchema.safeParse(values)

  if (!success) return err({ reason: "invalid_data" })

  return await authService.register(data)
}
