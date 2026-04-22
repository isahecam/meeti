import { Users } from "lucide-react"
import Link from "next/link"

import { buttonVariants } from "~/shared/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "~/shared/components/ui/empty"

export function UserCommunitiesEmpty() {
  return (
    <Empty className="h-full bg-muted/30">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Users />
        </EmptyMedia>
        <EmptyTitle>Sin comunidades</EmptyTitle>
        <EmptyDescription className="text-pretty">
          Crea una comunidad para empezar a compartir lo que más te gusta.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Link href="/dashboard/communities/create" className={buttonVariants({ variant: "default" })}>
          Crear comunidad
        </Link>
      </EmptyContent>
    </Empty>
  )
}
