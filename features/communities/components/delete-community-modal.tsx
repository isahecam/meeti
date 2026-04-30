"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Trash2Icon } from "lucide-react"
import { redirect } from "next/navigation"
import { useTransition } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { toast } from "sonner"

import { getAuthErrorMessage } from "~/features/auth/lib/get-auth-error-message"
import { CheckPasswordSchema, CheckPasswordType } from "~/features/auth/schemas/auth-schema"
import { deleteCommunityAction } from "~/features/communities/actions/delete-community-action"
import { DeleteCommunity } from "~/features/communities/components/delete-community"
import { useCommunityStore } from "~/features/communities/stores/community-store"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
} from "~/shared/components/ui/alert-dialog"
import { Spinner } from "~/shared/components/ui/spinner"

export function DeleteCommunityModal() {
  const { open, setOpen, community, setCommunity } = useCommunityStore()
  const [isPending, startTransition] = useTransition()

  const methods = useForm<CheckPasswordType>({
    resolver: zodResolver(CheckPasswordSchema),
    defaultValues: { password: "" },
    mode: "all",
  })

  const onSubmit = (data: CheckPasswordType) => {
    if (!community?.id) return

    startTransition(async () => {
      const result = await deleteCommunityAction(community.id, data)

      if (result?.[0]) {
        toast.error(getAuthErrorMessage(result[0].reason))
        return
      }

      toast.success("Comunidad eliminada correctamente")
      setOpen(false)
      setCommunity(null)
      setTimeout(() => {
        redirect("/dashboard/communities")
      }, 1000)
    })
  }

  const handleOpenChange = (next: boolean) => {
    setOpen(next)
    if (!next) {
      setCommunity(null)
      methods.reset()
    }
  }

  const handleClose = () => {
    setOpen(false)
    setCommunity(null)
    methods.reset()
  }

  return (
    <FormProvider {...methods}>
      <AlertDialog open={open} onOpenChange={handleOpenChange}>
        <AlertDialogContent size="sm">
          <AlertDialogHeader>
            <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
              <Trash2Icon />
            </AlertDialogMedia>
            <AlertDialogTitle>Eliminar comunidad</AlertDialogTitle>
            <AlertDialogDescription>
              ¿Confirmas que deseas eliminar
              {community ? ` "${community.name}"` : " esta comunidad"}? Esta acción no se puede deshacer.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <DeleteCommunity />

          <AlertDialogFooter>
            <AlertDialogCancel variant="outline" onClick={handleClose} disabled={isPending}>
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction variant="destructive" onClick={methods.handleSubmit(onSubmit)} disabled={isPending}>
              {isPending ? <Spinner data-icon="inline-start" /> : "Eliminar"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </FormProvider>
  )
}
