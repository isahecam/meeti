import { Metadata } from "next"
import Link from "next/link"

import { Heading } from "~/shared/components/typography/heading"
import { buttonVariants } from "~/shared/components/ui/button"

export const metadata: Metadata = {
  title: "Comunidades a las que te uniste",
  description: "Revisa las comunidades a las que te uniste y adminístralas",
}

export default function JoinedCommunitiesPage() {
  return (
    <div className="px-12 py-8">
      <div className="space-y-4">
        <Heading level={1}>Comunidades a las que te uniste</Heading>
        <Link href="/dashboard/communities" className={buttonVariants({ variant: "secondary" })}>
          Volver a las comunidades
        </Link>
      </div>
    </div>
  )
}
