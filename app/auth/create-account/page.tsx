import { Metadata } from "next"

import { RegisterCard } from "~/features/auth/components/cards/register-card"
import { requireGuest } from "~/lib/auth-server"

export const metadata: Metadata = {
  title: "Crear Cuenta",
  description: "Crea una cuenta para empezar a usar Meeti",
}

export default async function RegisterPage() {
  await requireGuest()

  return <RegisterCard />
}
