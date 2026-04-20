import { Metadata } from "next"

import { RegisterCard } from "~/features/auth/components/cards/register-card"

export const metadata: Metadata = {
  title: "Crear Cuenta",
  description: "Crea una cuenta para empezar a usar Meeti",
}

export default function RegisterPage() {
  return <RegisterCard />
}
