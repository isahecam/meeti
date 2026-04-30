import { Metadata } from "next"
import { redirect } from "next/navigation"

import { LoginCard } from "~/features/auth/components/cards/login-card"
import { requireAuth } from "~/lib/auth-server"

export const metadata: Metadata = {
  title: "Iniciar Sesión",
  description: "Inicia sesión y empieza a compartir lo que más te gusta con Meeti",
}

export default async function LoginPage() {
  const { session } = await requireAuth()
  if (session) {
    redirect("/dashboard")
  }

  return <LoginCard />
}
