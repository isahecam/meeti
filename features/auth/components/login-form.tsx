"use client"

import Link from "next/link"

import { Form } from "~/shared/components/forms/form"
import { FormSubmitButton } from "~/shared/components/forms/form-submit-button"
import { buttonVariants } from "~/shared/components/ui/button"
import { Field, FieldContent, FieldGroup, FieldLabel } from "~/shared/components/ui/field"
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
          <FieldContent className="flex-row">
            <FieldLabel htmlFor="password">Contraseña</FieldLabel>
            <Link
              href="/auth/forgot-password"
              className={buttonVariants({ variant: "link", className: "ml-auto px-0!" })}>
              ¿Olvidaste tu contraseña?
            </Link>
          </FieldContent>
          <Input id="password" type="password" placeholder="********" />
        </Field>
      </FieldGroup>

      <FormSubmitButton className="w-full">Iniciar Sesión</FormSubmitButton>
    </Form>
  )
}
