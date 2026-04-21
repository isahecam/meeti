"use server"

import { SignInSchema, SignInType } from "~/features/auth/schemas/auth-schema"
import { authService } from "~/features/auth/services/auth-service"
import { err } from "~/lib/result"

export async function signInAction(values: SignInType) {
  const { success, data } = SignInSchema.safeParse(values)

  if (!success) return err({ reason: "INVALID_DATA" })

  return await authService.login(data)
}
