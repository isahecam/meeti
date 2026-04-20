"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"

import { SignUpSchema, SignUpType } from "~/features/auth/schemas/auth-schema"
import { Form } from "~/shared/components/forms/form"
import { FormSubmitButton } from "~/shared/components/forms/form-submit-button"
import { Field, FieldError, FieldGroup, FieldLabel } from "~/shared/components/ui/field"
import { Input } from "~/shared/components/ui/input"

export function RegisterForm() {
  const { control, handleSubmit } = useForm<SignUpType>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    mode: "all",
  })

  const onSubmit = (data: SignUpType) => {
    console.log(data)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="name">Nombre</FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                id="name"
                type="text"
                autoComplete="given-name"
                placeholder="Tu Nombre"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

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
              <FieldLabel htmlFor="password">Contraseña</FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                id="password"
                type="password"
                autoComplete="new-password"
                placeholder="********"
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
                placeholder="********"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>

      <FormSubmitButton className="w-full">Crear Cuenta</FormSubmitButton>
    </Form>
  )
}
