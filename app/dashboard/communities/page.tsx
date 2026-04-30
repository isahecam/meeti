import { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"

import { UserCommunitiesList } from "~/features/communities/components/layout/user-communities-list"
import { UserCommunitiesListSkeleton } from "~/features/communities/components/skeletons/user-communities-list-skeleton"
import { requireAuth } from "~/lib/auth-server"
import { Heading } from "~/shared/components/typography/heading"
import { buttonVariants } from "~/shared/components/ui/button"

export const metadata: Metadata = {
  title: "Comunidades",
  description: "Crea y gestiona tus comunidades para compartir lo que más te gusta con Meeti",
}

export default async function CommunitiesPage() {
  await requireAuth()

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

        <Suspense fallback={<UserCommunitiesListSkeleton />}>
          <UserCommunitiesList />
        </Suspense>
      </div>
    </div>
  )
}
