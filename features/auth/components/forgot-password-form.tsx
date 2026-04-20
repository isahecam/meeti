"use client"

import { Form } from "~/shared/components/forms/form"
import { FormSubmitButton } from "~/shared/components/forms/form-submit-button"
import { Field, FieldLabel } from "~/shared/components/ui/field"
import { Input } from "~/shared/components/ui/input"

export function ForgotPasswordForm() {
  return (
    <Form>
      <Field>
        <FieldLabel htmlFor="email">Correo Electrónico</FieldLabel>
        <Input id="email" type="email" autoComplete="email" placeholder="m@example.com" />
      </Field>

      <FormSubmitButton className="w-full">Enviar Instrucciones</FormSubmitButton>
    </Form>
  )
}
