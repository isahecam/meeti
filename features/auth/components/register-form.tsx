"use client"

import { Form } from "~/shared/components/forms/form"
import { FormSubmitButton } from "~/shared/components/forms/form-submit-button"
import { Field, FieldGroup, FieldLabel } from "~/shared/components/ui/field"
import { Input } from "~/shared/components/ui/input"

export function RegisterForm() {
  return (
    <Form>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name">Nombre</FieldLabel>
          <Input id="name" type="text" autoComplete="given-name" placeholder="Tu Nombre" />
        </Field>

        <Field>
          <FieldLabel htmlFor="email">Correo Electrónico</FieldLabel>
          <Input id="email" type="email" autoComplete="email" placeholder="tu@email.com" />
        </Field>

        <Field>
          <FieldLabel htmlFor="password">Contraseña</FieldLabel>
          <Input id="password" type="password" placeholder="********" />
        </Field>

        <Field>
          <FieldLabel htmlFor="passwordConfirmation">Confirmar Contraseña</FieldLabel>
          <Input id="passwordConfirmation" type="password" placeholder="********" />
        </Field>
      </FieldGroup>

      <FormSubmitButton className="w-full">Crear Cuenta</FormSubmitButton>
    </Form>
  )
}
