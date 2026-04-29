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
      <div className="shrink-0">
        <Image
          src={community.data.image}
          alt={`Portada de la comunidad - ${community.data.name}`}
          width={200}
          height={100}
          className="object-cover"
        />
      </div>

      <CardHeader className="min-w-0 flex-1 p-0">
        <Link href="/dashboard/communities" className="group/card-title">
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
