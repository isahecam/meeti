import { Metadata } from "next"
import Link from "next/link"
import { redirect } from "next/navigation"

import { MyCommunitiesList } from "~/features/communities/components/layout/my-communities-list"
import { requireAuth } from "~/lib/auth-server"
import { Heading } from "~/shared/components/typography/heading"
import { buttonVariants } from "~/shared/components/ui/button"

export const metadata: Metadata = {
  title: "Comunidades",
  description: "Crea y gestiona tus comunidades para compartir lo que más te gusta con Meeti",
}

export default async function CommunitiesPage() {
  const { isAuth } = await requireAuth()

  if (!isAuth) {
    redirect("/auth/login")
  }

  return (
    <div className="px-12 py-8">
      <div className="space-y-4">
        <Heading level={1}>Gestiona tus comunidades</Heading>

        <nav className="mt-4 flex gap-2">
          <Link href="/dashboard/communities/create" className={buttonVariants({ variant: "default" })}>
            Crear comunidad
          </Link>

          <Link href="/dashboard/communities/joined" className={buttonVariants({ variant: "secondary" })}>
            Comunidades a las que te uniste
          </Link>
        </nav>

        <MyCommunitiesList />
      </div>
    </div>
  )
}
