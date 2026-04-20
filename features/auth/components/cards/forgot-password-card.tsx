import Link from "next/link"

import { ForgotPasswordForm } from "~/features/auth/components/forgot-password-form"
import { buttonVariants } from "~/shared/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/shared/components/ui/card"

export function ForgotPasswordCard() {
  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle>Recuperar Contraseña</CardTitle>
        <CardDescription className="text-xs">Recupera tu acceso a Meeti</CardDescription>
      </CardHeader>
      <CardContent>
        <ForgotPasswordForm />
      </CardContent>
      <CardFooter className="justify-between">
        <Link className={buttonVariants({ variant: "link" })} href="/auth/login">
          Iniciar Sesión
        </Link>

        <Link className={buttonVariants({ variant: "link" })} href="/auth/create-account">
          Crear Cuenta
        </Link>
      </CardFooter>
    </Card>
  )
}
