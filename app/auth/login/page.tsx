import { Metadata } from "next"

import { LoginCard } from "~/features/auth/components/cards/login-card"

export const metadata: Metadata = {
  title: "Iniciar Sesión",
  description: "Inicia sesión y empieza a compartir lo que más te gusta con Meeti",
}

export default function LoginPage() {
  return <LoginCard />
}
