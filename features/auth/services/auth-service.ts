import { APIError } from "better-auth"
import { headers } from "next/headers"

import { ForgotPasswordType, SignInType, SignUpType } from "~/features/auth/schemas/auth-schema"
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
            callbackURL: "/dashboard",
          },
          headers: await headers(),
        }),
      )
    } catch (error: unknown) {
      if (error instanceof APIError) {
        return err({ reason: error.body?.code ?? "UNEXPECTED_ERROR" })
      }

      return err({ reason: "UNEXPECTED_ERROR" })
    }
  }

  async login({ email, password }: SignInType) {
    // * Revisar si el email ya está registrado
    const user = await this.authRepository.userExists(email)
    if (!user) return err({ reason: "USER_NOT_FOUND" })

    // ! Revisar su password y si confirmo su cuenta

    // * Iniciar la sesión del usuario
    try {
      return ok(
        await auth.api.signInEmail({
          body: {
            email,
            password,
            callbackURL: "/dashboard",
          },
          headers: await headers(),
        }),
      )
    } catch (error) {
      if (error instanceof APIError) {
        return err({ reason: error.body?.code ?? "UNEXPECTED_ERROR" })
      }

      return err({ reason: "UNEXPECTED_ERROR" })
    }
  }

  async requestPasswordReset({ email }: ForgotPasswordType) {
    // * Revisar si el email ya está registrado
    const user = await this.authRepository.userExists(email)
    if (!user) return err({ reason: "USER_NOT_FOUND" })

    // * Enviar el correo de recuperación de contraseña
    try {
      return ok(
        await auth.api.requestPasswordReset({
          body: {
            email,
          },
        }),
      )
    } catch (error) {
      if (error instanceof APIError) {
        return err({ reason: error.body?.code ?? "UNEXPECTED_ERROR" })
      }

      return err({ reason: "UNEXPECTED_ERROR" })
    }
  }
}

export const authService = new AuthService(authRepository)
