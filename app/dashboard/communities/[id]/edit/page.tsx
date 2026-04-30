import { Metadata } from "next"
import Link from "next/link"
import { redirect } from "next/navigation"

import { EditCommunity } from "~/features/communities/components/edit-community"
import { communityService } from "~/features/communities/services/community-service"
import { requireAuth } from "~/lib/auth-server"
import { Heading } from "~/shared/components/typography/heading"
import { buttonVariants } from "~/shared/components/ui/button"

export async function generateMetadata({ params }: PageProps<"/dashboard/communities/[id]/edit">): Promise<Metadata> {
  const { id } = await params
  const community = await communityService.getCommunity(id)

  return {
    title: `Editar comunidad: ${community.name}`,
    description: community.description,
    openGraph: {
      title: `Editar comunidad: ${community.name}`,
      description: community.description,
      images: [
        {
          url: community.image,
        },
      ],
    },
  }
}

export default async function EditCommunityPage({ params }: PageProps<"/dashboard/communities/[id]/edit">) {
  const { session } = await requireAuth()

  const { id } = await params

  const community = await communityService.getCommunityDetails(id, session.user)

  if (!community.permissions.canEdit) redirect("/dashboard/communities")

  return (
    <div className="space-y-16 px-12 py-8">
      <div className="space-y-4">
        <Heading level={1}>Editar comunidad: {community.data.name}</Heading>
        <Link href="/dashboard/communities" className={buttonVariants({ variant: "secondary" })}>
          Volver a mis comunidades
        </Link>
      </div>

      <EditCommunity community={community.data} />
    </div>
  )
}
