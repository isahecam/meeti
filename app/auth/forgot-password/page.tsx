import { Metadata } from "next"

import { ForgotPasswordCard } from "~/features/auth/components/cards/forgot-password-card"

export const metadata: Metadata = {
  title: "Recuperar Contraseña",
  description: "Recupera tu contraseña y accede a tu cuenta",
}

export default function ForgotPasswordPage() {
  return <ForgotPasswordCard />
}
