import Link from "next/link"

import { CommunityPermissions } from "~/features/communities/types/community-types"
import { buttonVariants } from "~/shared/components/ui/button"

interface Props {
  communityId: string
  permissions: CommunityPermissions
}

export function CommunityActionsPanel({ communityId, permissions }: Props) {
  return (
    <div className="flex items-center justify-end">
      {permissions.canEdit && (
        <Link
          href={`/dashboard/communities/${communityId}/edit`}
          className={buttonVariants({ variant: "secondary" })}
          target="_blank">
          Editar Comunidad
        </Link>
      )}
    </div>
  )
}
