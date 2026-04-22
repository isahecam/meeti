import { redirect } from "next/navigation"

import { communityService } from "~/features/communities/services/community-service"
import { requireAuth } from "~/lib/auth-server"

export async function MyCommunitiesList() {
  const { session } = await requireAuth()

  if (!session) {
    redirect("/auth/login")
  }

  const communities = await communityService.getUserCommunities(session.user)

  return <div>MyCommunitiesList</div>
}
