"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"

import { CommunityForm } from "~/features/communities/components/forms/community-form"
import { CommunitySchema, CommunityType } from "~/features/communities/schemas/community-schema"
import { Form } from "~/shared/components/forms/form"
import { FormSubmitButton } from "~/shared/components/forms/form-submit-button"

export function CreateCommunity() {
  const methods = useForm<CommunityType>({
    resolver: zodResolver(CommunitySchema),
    defaultValues: {
      name: "",
      description: "",
    },
    mode: "all",
  })

  const onSubmit = (data: CommunityType) => {
    console.log(data)
  }

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <CommunityForm />
        <FormSubmitButton className="w-full">Crear Comunidad</FormSubmitButton>
      </Form>
    </FormProvider>
  )
}
