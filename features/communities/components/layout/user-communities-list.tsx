import { redirect } from "next/navigation"

import { UserCommunityCard } from "~/features/communities/components/cards/user-community-card"
import { DeleteCommunityModal } from "~/features/communities/components/delete-community-modal"
import { UserCommunitiesEmpty } from "~/features/communities/components/primitives/user-communities-empty"
import { communityService } from "~/features/communities/services/community-service"
import { requireAuth } from "~/lib/auth-server"

export async function UserCommunitiesList() {
  const { session } = await requireAuth()

  if (!session) {
    redirect("/auth/login")
  }

  const communities = await communityService.getUserCommunities(session.user)

  if (communities.length === 0) {
    return <UserCommunitiesEmpty />
  }

  return (
    <>
      <ul className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        {communities.map((community) => (
          <li key={community.data.id}>
            <UserCommunityCard community={community} />
          </li>
        ))}
      </ul>

      <DeleteCommunityModal />
    </>
  )
}
