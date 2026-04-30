import { headers } from "next/headers"
import { redirect } from "next/navigation"

import { auth } from "~/lib/auth"

export async function getServerSession() {
  return await auth.api.getSession({
    headers: await headers(),
  })
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
