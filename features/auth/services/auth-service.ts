import { APIError } from "better-auth"

import { SignUpType } from "~/features/auth/schemas/auth-schema"
import { authRepository, IAuthRepository } from "~/features/auth/services/auth-respository"
import { auth } from "~/lib/auth"
import { err, ok } from "~/lib/result"

class AuthService {
  constructor(private authRepository: IAuthRepository) {}

  async register({ name, email, password }: SignUpType) {
    // * Revisar si el email ya está registrado
    const user = await this.authRepository.userExists(email)
    if (user) return err({ reason: "USER_ALREADY_EXISTS" })

    // ! Validación de negocio

    // * Crear el usuario en la base de datos
    try {
      return ok(
        await auth.api.signUpEmail({
          body: {
            name,
            email,
            password,
          },
        }),
      )
    } catch (error: unknown) {
      if (error instanceof APIError) {
        return err({ reason: error.body?.code ?? "UNEXPECTED_ERROR" })
      }

      return err({ reason: "UNEXPECTED_ERROR" })
    }
  }
}

export const authService = new AuthService(authRepository)
