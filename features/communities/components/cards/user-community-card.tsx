import Image from "next/image"
import Link from "next/link"

import { CommunityDropdownMenu } from "~/features/communities/components/community-dropdown-menu"
import { CommunityWithPermissions } from "~/features/communities/types/community-types"
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "~/shared/components/ui/card"

interface Props {
  community: CommunityWithPermissions
}

export function UserCommunityCard({ community }: Props) {
  return (
    <Card className="flex h-full w-full flex-row items-center gap-4 p-4">
      <div className="relative size-25 shrink-0">
        <Image
          src={community.data.image}
          alt={`Portada de la comunidad - ${community.data.name}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <CardHeader className="min-w-0 flex-1 p-0">
        <Link href={`/communities/${community.data.id}`} className="group/card-title" target="_blank">
          <CardTitle className="truncate text-sm font-medium text-balance underline-offset-4 group-hover/card-title:underline">
            {community.data.name}
          </CardTitle>
        </Link>
        <CardDescription className="line-clamp-3">{community.data.description}</CardDescription>
        {community.context.isAdmin && (
          <CardAction>
            <CommunityDropdownMenu community={community.data} />
          </CardAction>
        )}
      </CardHeader>
    </Card>
  )
}
