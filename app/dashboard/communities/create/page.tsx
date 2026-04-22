import { Metadata } from "next"
import Link from "next/link"
import { redirect } from "next/navigation"

import { CreateCommunity } from "~/features/communities/components/create-community"
import { requireAuth } from "~/lib/auth-server"
import { Heading } from "~/shared/components/typography/heading"
import { buttonVariants } from "~/shared/components/ui/button"

export const metadata: Metadata = {
  title: "Crear comunidad",
  description: "Crea una comunidad para compartir lo que más te gusta con Meeti",
}

export default async function CreateCommunitiesPage() {
  const { isAuth } = await requireAuth()

  if (!isAuth) {
    redirect("/auth/login")
  }

  return (
    <div className="space-y-16 px-12 py-8">
      <div className="space-y-4">
        <Heading level={1}>Crear comunidad</Heading>
        <Link href="/dashboard/communities" className={buttonVariants({ variant: "secondary" })}>
          Volver a mis comunidades
        </Link>
      </div>

      <CreateCommunity />
    </div>
  )
}
