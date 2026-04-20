import { ForgotPasswordForm } from "~/features/auth/components/forgot-password-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/shared/components/ui/card"

export function ForgotPasswordCard() {
  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardHeader className="text-center">
        <CardTitle>Recuperar Contraseña</CardTitle>
        <CardDescription className="text-xs">
          Ingresa tu correo electrónico para recuperar tu acceso a Meeti
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ForgotPasswordForm />
      </CardContent>
    </Card>
  )
}
