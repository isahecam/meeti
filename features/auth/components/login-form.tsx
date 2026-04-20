"use client"

import { Form } from "~/shared/components/forms/form"
import { FormSubmitButton } from "~/shared/components/forms/form-submit-button"
import { Field, FieldGroup, FieldLabel } from "~/shared/components/ui/field"
import { Input } from "~/shared/components/ui/input"

export function LoginForm() {
  return (
    <Form>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name">Correo Electrónico</FieldLabel>
          <Input id="name" type="email" autoComplete="email" placeholder="m@example.com" />
        </Field>

        <Field>
          <FieldLabel htmlFor="password">Contraseña</FieldLabel>
          <Input id="password" type="password" placeholder="********" />
        </Field>
      </FieldGroup>

      <FormSubmitButton className="w-full">Iniciar Sesión</FormSubmitButton>
    </Form>
  )
}
