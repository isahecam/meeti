"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { redirect } from "next/navigation"
import { useTransition } from "react"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"

import { signInAction } from "~/features/auth/actions/sign-in-action"
import { getAuthErrorMessage } from "~/features/auth/lib/get-auth-error-message"
import { SignInSchema, SignInType } from "~/features/auth/schemas/auth-schema"
import { Form } from "~/shared/components/forms/form"
import { FormSubmitButton } from "~/shared/components/forms/form-submit-button"
import { buttonVariants } from "~/shared/components/ui/button"
import { Field, FieldContent, FieldError, FieldGroup, FieldLabel } from "~/shared/components/ui/field"
import { Input } from "~/shared/components/ui/input"
import { Spinner } from "~/shared/components/ui/spinner"

export function LoginForm() {
  const [isPending, startTransition] = useTransition()

  const { control, handleSubmit, reset } = useForm<SignInType>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
  })

  const onSubmit = (data: SignInType) => {
    startTransition(async () => {
      const [error] = await signInAction(data)

      if (error) {
        toast.error(getAuthErrorMessage(error.reason))
        return
      }

      toast.success("Tu sesión ha sido iniciada correctamente")
      reset()
      redirect("/dashboard")
    })
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup>
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

        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldContent className="flex-row">
                <FieldLabel htmlFor="password">Contraseña</FieldLabel>
                <Link
                  href="/auth/forgot-password"
                  className={buttonVariants({ variant: "link", className: "ml-auto h-auto p-0!" })}>
                  ¿Olvidaste tu contraseña?
                </Link>
              </FieldContent>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="********"
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
            Iniciando sesión...
          </>
        ) : (
          "Iniciar Sesión"
        )}
      </FormSubmitButton>
    </Form>
  )
}
