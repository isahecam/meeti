import { headers } from "next/headers"
import { redirect } from "next/navigation"

import { auth } from "~/lib/auth"

export async function getServerSession() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  return session
}

export async function requireAuth() {
  const session = await getServerSession()

  if (!session) {
    redirect("/auth/login")
  }

  return { session, isAuth: true as const }
}

export async function requireGuest() {
  const session = await getServerSession()

  if (session) {
    redirect("/dashboard")
  }
}
