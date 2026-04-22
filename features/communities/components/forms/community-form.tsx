"use client"

import { useId } from "react"
import { Controller, useFormContext } from "react-hook-form"

import { CommunityType } from "~/features/communities/schemas/community-schema"
import { Field, FieldError, FieldGroup, FieldLabel } from "~/shared/components/ui/field"
import { Input } from "~/shared/components/ui/input"
import { Textarea } from "~/shared/components/ui/textarea"

export function CommunityForm() {
  const formId = useId()
  const { control } = useFormContext<CommunityType>()

  return (
    <FieldGroup>
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={`${formId}-name`}>Nombre de la comunidad</FieldLabel>
            <Input
              {...field}
              id={`${formId}-name`}
              aria-invalid={fieldState.invalid}
              placeholder="Un nombre para tu comunidad"
              autoComplete="off"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Controller
        name="description"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={`${formId}-description`}>Descripción de la comunidad</FieldLabel>
            <Textarea
              {...field}
              id={`${formId}-description`}
              placeholder="Esta comunidad es sobre..."
              rows={6}
              className="min-h-24 resize-none"
              aria-invalid={fieldState.invalid}
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
    </FieldGroup>
  )
}
