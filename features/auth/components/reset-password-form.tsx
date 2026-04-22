"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { redirect, useSearchParams } from "next/navigation"
import { useTransition } from "react"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"

import { resetPasswordAction } from "~/features/auth/actions/reset-password-action"
import { getAuthErrorMessage } from "~/features/auth/lib/get-auth-error-message"
import { ResetPasswordType, ResetPasswordSchema } from "~/features/auth/schemas/auth-schema"
import { Form } from "~/shared/components/forms/form"
import { FormSubmitButton } from "~/shared/components/forms/form-submit-button"
import { Field, FieldError, FieldGroup, FieldLabel } from "~/shared/components/ui/field"
import { Input } from "~/shared/components/ui/input"
import { Spinner } from "~/shared/components/ui/spinner"

export function ResetPasswordForm() {
  const searchParams = useSearchParams()
  const token = searchParams.get("token")
  const errorToken = searchParams.get("error")

  if (!token) redirect("/auth/forgot-password")
  if (errorToken) toast.error(getAuthErrorMessage(errorToken))

  const [isPending, startTransition] = useTransition()

  const { control, handleSubmit, reset } = useForm<ResetPasswordType>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      password: "",
      passwordConfirmation: "",
    },
    mode: "all",
  })

  const onSubmit = (data: ResetPasswordType) => {
    startTransition(async () => {
      const [error] = await resetPasswordAction(data, token)

      if (error) {
        toast.error(getAuthErrorMessage(error.reason))
        return
      }

      reset()
      toast.success("Tu contraseña ha sido restablecida correctamente")
      redirect("/auth/login")
    })
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="password">Contraseña</FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                id="password"
                type="password"
                autoComplete="new-password"
                placeholder="Tu nueva contraseña"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="passwordConfirmation"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="passwordConfirmation">Confirmar Contraseña</FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                id="passwordConfirmation"
                type="password"
                placeholder="Repite tu nueva contraseña"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>

      <FormSubmitButton className="w-full" disabled={isPending}>
        {isPending ? (
          <>
            <Spinner data-icon="inline-start" />
            Restableciendo contraseña...
          </>
        ) : (
          "Restablecer Contraseña"
        )}
      </FormSubmitButton>
    </Form>
  )
}
