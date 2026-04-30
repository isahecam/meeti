"use client"

import { useId } from "react"
import { Controller, useFormContext } from "react-hook-form"

import { CheckPasswordType } from "~/features/auth/schemas/auth-schema"
import { Form } from "~/shared/components/forms/form"
import { Field, FieldError, FieldLabel } from "~/shared/components/ui/field"
import { Input } from "~/shared/components/ui/input"

export function DeleteCommunity() {
  const formId = useId()
  const { control } = useFormContext<CheckPasswordType>()

  return (
    <Form>
      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={`${formId}-password`}>Ingresa tu contraseña</FieldLabel>
            <Input
              {...field}
              aria-invalid={fieldState.invalid}
              id={`${formId}-password`}
              type="password"
              autoComplete="current-password"
              placeholder="********"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
    </Form>
  )
}
