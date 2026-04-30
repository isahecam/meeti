"use server"

import { CheckPasswordSchema, CheckPasswordType } from "~/features/auth/schemas/auth-schema"
import { communityService } from "~/features/communities/services/community-service"
import { SelectCommunity } from "~/features/communities/types/community-types"
import { requireAuth } from "~/lib/auth-server"
import { err } from "~/lib/result"

export async function deleteCommunityAction(communityId: SelectCommunity["id"], values: CheckPasswordType) {
  const { success, data } = CheckPasswordSchema.safeParse(values)

  if (!success) return err({ reason: "INVALID_DATA" })

  const { session } = await requireAuth()

  if (!session) return err({ reason: "UNAUTHORIZED" })

  return await communityService.deleteCommunity(communityId, data.password, session.user)
}
