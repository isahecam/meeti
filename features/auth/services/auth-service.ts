import { SignUpType } from "~/features/auth/schemas/auth-schema"

class AuthService {
  async register({ name, email, password }: SignUpType) {
    // ! Revisar si el email ya está registrado
    // ! Crear el usuario en la base de datos
  }
}

export const authService = new AuthService()
