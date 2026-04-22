"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { redirect } from "next/navigation"
import { useTransition } from "react"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"

import { forgotPasswordAction } from "~/features/auth/actions/forgot-password-action"
import { getAuthErrorMessage } from "~/features/auth/lib/get-auth-error-message"
import { ForgotPasswordSchema, ForgotPasswordType } from "~/features/auth/schemas/auth-schema"
import { Form } from "~/shared/components/forms/form"
import { FormSubmitButton } from "~/shared/components/forms/form-submit-button"
import { Field, FieldError, FieldLabel } from "~/shared/components/ui/field"
import { Input } from "~/shared/components/ui/input"
import { Spinner } from "~/shared/components/ui/spinner"

export function ForgotPasswordForm() {
  const [isPending, startTransition] = useTransition()

  const { control, handleSubmit, reset } = useForm<ForgotPasswordType>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
    mode: "all",
  })

  const onSubmit = (data: ForgotPasswordType) => {
    startTransition(async () => {
      const [error] = await forgotPasswordAction(data)

      if (error) {
        toast.error(getAuthErrorMessage(error.reason))
        return
      }

      toast.success("Te hemos enviado un correo para recuperar tu contraseña")
      reset()
      redirect("/auth/login")
    })
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="email">Correo Electrónico</FieldLabel>
            <Input
              {...field}
              aria-invalid={fieldState.invalid}
              id="email"
              type="email"
              autoComplete="email"
              placeholder="tu@email.com"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <FormSubmitButton className="w-full" disabled={isPending}>
        {isPending ? (
          <>
            <Spinner data-icon="inline-start" />
            Enviando instrucciones...
          </>
        ) : (
          "Enviar Instrucciones"
        )}
      </FormSubmitButton>
    </Form>
  )
}
