import { Metadata } from "next"
import Link from "next/link"

import { Heading } from "~/shared/components/typography/heading"
import { buttonVariants } from "~/shared/components/ui/button"

export const metadata: Metadata = {
  title: "Crear comunidad",
  description: "Crea una comunidad para compartir lo que más te gusta con Meeti",
}

export default function CreateCommunitiesPage() {
  return (
    <div className="px-12 py-8">
      <div className="space-y-4">
        <Heading level={1}>Crear comunidad</Heading>
        <Link href="/dashboard/communities" className={buttonVariants({ variant: "secondary" })}>
          Volver a mis comunidades
        </Link>
      </div>
    </div>
  )
}
