"use server"

import { CommunitySchema, CommunityType } from "~/features/communities/schemas/community-schema"
import { communityService } from "~/features/communities/services/community-service"
import { requireAuth } from "~/lib/auth-server"
import { err } from "~/lib/result"

export async function createCommunityAction(values: CommunityType) {
  const { success, data } = CommunitySchema.safeParse(values)

  if (!success) return err({ reason: "INVALID_DATA" })

  const { session } = await requireAuth()

  if (!session) return err({ reason: "UNAUTHORIZED" })

  return await communityService.createCommunity(data, session.user.id)
}
