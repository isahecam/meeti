import { Suspense } from "react"

import { ResetPasswordForm } from "~/features/auth/components/reset-password-form"
import { Card, CardContent, CardHeader, CardTitle } from "~/shared/components/ui/card"
import { Spinner } from "~/shared/components/ui/spinner"

export function ResetPasswordCard() {
  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle>Restablecer Contraseña</CardTitle>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<Spinner />}>
          <ResetPasswordForm />
        </Suspense>
      </CardContent>
    </Card>
  )
}
