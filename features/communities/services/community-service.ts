import { User } from "better-auth"

import { CommunityPolicy } from "~/features/communities/policies/community-policy"
import { MembershipPolicy } from "~/features/communities/policies/membership-policy"
import { CommunityType } from "~/features/communities/schemas/community-schema"
import { communityRepository, ICommunityRepository } from "~/features/communities/services/community-repository"
import { ok, err } from "~/lib/result"

class CommunityService {
  constructor(private communityRepository: ICommunityRepository) {}

  async createCommunity(data: CommunityType, userId: string) {
    const community = await this.communityRepository.create({
      ...data,
      createdBy: userId,
    })

    if (!community) return err({ reason: "FAILED_TO_CREATE_COMMUNITY" })

    return ok(community)
  }

  async getUserCommunities(user: User) {
    const communities = await this.communityRepository.findByUserId(user.id)

    const enriched = await Promise.all(
      communities.map(async (community) => {
        const isMember = true
        const isAdmin = CommunityPolicy.isAdmin(community, user)

        return {
          data: community,
          context: {
            isMember,
            isAdmin,
          },
          permissions: {
            canEdit: CommunityPolicy.canEdit(community, user),
            canDelete: CommunityPolicy.canDelete(community, user),
            canJoin: MembershipPolicy.canJoin(user, community, isMember),
            canLeave: MembershipPolicy.canLeave(user, community, isMember),
            canViewMembers: CommunityPolicy.canViewMembers(community, user),
          },
        }
      }),
    )

    return enriched
  }
}

export const communityService = new CommunityService(communityRepository)
