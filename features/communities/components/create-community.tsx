"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { redirect } from "next/navigation"
import { useTransition } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { toast } from "sonner"

import { createCommunityAction } from "~/features/communities/actions/create-community-action"
import { CommunityForm } from "~/features/communities/components/forms/community-form"
import { getCommunityErrorMessage } from "~/features/communities/lib/get-community-error-message"
import { CommunitySchema, CommunityType } from "~/features/communities/schemas/community-schema"
import { Form } from "~/shared/components/forms/form"
import { FormSubmitButton } from "~/shared/components/forms/form-submit-button"
import { Spinner } from "~/shared/components/ui/spinner"

export function CreateCommunity() {
  const [isPending, startTransition] = useTransition()

  const methods = useForm<CommunityType>({
    resolver: zodResolver(CommunitySchema),
    defaultValues: {
      name: "",
      description: "",
    },
    mode: "all",
  })

  const onSubmit = (data: CommunityType) => {
    startTransition(async () => {
      const [error] = await createCommunityAction(data)

      if (error) {
        toast.error(getCommunityErrorMessage(error.reason))
        return
      }

      toast.success("Comunidad creada correctamente")
      redirect("/dashboard/communities")
    })
  }

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <CommunityForm />
        <FormSubmitButton className="w-full" disabled={isPending}>
          {isPending ? (
            <>
              <Spinner data-icon="inline-start" />
              Creando comunidad...
            </>
          ) : (
            "Crear Comunidad"
          )}
        </FormSubmitButton>
      </Form>
    </FormProvider>
  )
}
