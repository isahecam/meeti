import { Metadata } from "next"

import { ResetPasswordCard } from "~/features/auth/components/cards/reset-password-card"

export const metadata: Metadata = {
  title: "Restablecer Contraseña",
  description: "Establece tu nueva contraseña y accede de nuevo a tu cuenta",
}

export default function ResetPasswordPage() {
  return <ResetPasswordCard />
}
