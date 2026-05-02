import Image from "next/image"

import { CommunityActionsPanel } from "~/features/communities/components/community-actions-panel"
import { communityService } from "~/features/communities/services/community-service"
import { getServerSession } from "~/lib/auth-server"
import { Heading } from "~/shared/components/typography/heading"
import { Paragraph } from "~/shared/components/typography/paragraph"

export default async function CommunityPage({ params }: PageProps<"/communities/[id]">) {
  const { id } = await params

  const session = await getServerSession()
  const community = await communityService.getCommunityDetails(id, session?.user)

  return (
    <>
      <main className="mx-auto mt-10 max-w-7xl space-y-5 p-10 lg:p-0">
        {community.permissions && <CommunityActionsPanel communityId={id} permissions={community.permissions} />}
        <div className="mt-10 grid grid-cols-1 items-start lg:grid-cols-3">
          <div className="space-y-5 text-center lg:col-span-2 lg:text-left">
            <div className="relative mx-auto aspect-square size-64 overflow-hidden rounded-full">
              <Image
                src={community.data.image}
                alt={`Portada de la comunidad - ${community.data.name}`}
                width={600}
                height={600}
                className="size-64 object-cover"
                priority
              />
            </div>
            <Heading level={1} className="text-center">
              {community.data.name}
            </Heading>
            <Paragraph className="text-center">{community.data.description}</Paragraph>
          </div>
          <div className="rounded-2xl bg-slate-100 p-5">{/* Admin Aquí */}</div>
        </div>
      </main>
      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 items-start gap-10 space-y-5 lg:grid-cols-3">
        {/* Próximos Meetis Aquí */}
      </div>
    </>
  )
}
