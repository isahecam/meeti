import { headers } from "next/headers"
import { redirect } from "next/navigation"

import { auth } from "~/lib/auth"

export async function getServerSession() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) {
    redirect("/auth/login")
  }

  return session
}

export async function requireAuth() {
  const session = await getServerSession()

  if (!session) {
    redirect("/auth/login")
  }

  return { session, isAuth: session ? true : false }
}
