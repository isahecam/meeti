import Link from "next/link"

import { LoginForm } from "~/features/auth/components/login-form"
import { buttonVariants } from "~/shared/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "~/shared/components/ui/card"

export function LoginCard() {
  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle>Iniciar Sesión</CardTitle>
        <CardDescription className="text-xs">Ingresa tu información para acceder a tu cuenta</CardDescription>
        <CardAction>
          <Link className={buttonVariants({ variant: "link" })} href="/auth/create-account">
            Crear Cuenta
          </Link>
        </CardAction>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  )
}
