import { User } from "better-auth"

import { db } from "~/db"

export interface IAuthRepository {
  userExists(email: string): Promise<User | undefined>
}

class AuthRepository implements IAuthRepository {
  async userExists(email: string) {
    return await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.email, email),
    })
  }
}

export const authRepository = new AuthRepository()
