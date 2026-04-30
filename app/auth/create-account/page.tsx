import { Metadata } from "next"
import { redirect } from "next/navigation"

import { RegisterCard } from "~/features/auth/components/cards/register-card"
import { requireAuth } from "~/lib/auth-server"

export const metadata: Metadata = {
  title: "Crear Cuenta",
  description: "Crea una cuenta para empezar a usar Meeti",
}

export default async function RegisterPage() {
  const { session } = await requireAuth()

  if (session) {
    redirect("/dashboard")
  }

  return <RegisterCard />
}
