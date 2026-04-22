import Image from "next/image"

import { CommunityWithPermissions } from "~/features/communities/types/community-types"
import { Card, CardDescription, CardHeader, CardTitle } from "~/shared/components/ui/card"

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
        <CardTitle className="truncate text-sm font-medium">{community.data.name}</CardTitle>
        <CardDescription className="line-clamp-3">{community.data.description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
