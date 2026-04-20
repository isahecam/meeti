import Link from "next/link"

import { RegisterForm } from "~/features/auth/components/register-form"
import { buttonVariants } from "~/shared/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "~/shared/components/ui/card"

export function RegisterCard() {
  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle>Registrarse</CardTitle>
        <CardDescription className="text-xs">Ingresa tu información para ser parte de Meeti</CardDescription>
        <CardAction>
          <Link className={buttonVariants({ variant: "link" })} href="/auth/login">
            Iniciar Sesión
          </Link>
        </CardAction>
      </CardHeader>
      <CardContent>
        <RegisterForm />
      </CardContent>
    </Card>
  )
}
