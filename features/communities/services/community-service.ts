import { User } from "better-auth"
import { notFound } from "next/navigation"

import { CommunityPolicy } from "~/features/communities/policies/community-policy"
import { MembershipPolicy } from "~/features/communities/policies/membership-policy"
import { CommunityType } from "~/features/communities/schemas/community-schema"
import { communityRepository, ICommunityRepository } from "~/features/communities/services/community-repository"
import { SelectCommunity } from "~/features/communities/types/community-types"
import { ok, err } from "~/lib/result"
import { checkPassword } from "~/shared/utils/auth"

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

  async getCommunity(id: SelectCommunity["id"]) {
    const community = await this.communityRepository.findById(id)
    if (!community) notFound()
    return community
  }

  async getCommunityDetails(communityId: SelectCommunity["id"], user: User) {
    const community = await this.getCommunity(communityId)

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
  }

  async updateCommunity(communityId: SelectCommunity["id"], data: CommunityType, user: User) {
    const community = await this.getCommunity(communityId)

    if (!CommunityPolicy.canEdit(community, user)) return err({ reason: "UNAUTHORIZED" })

    const communityUpdated = await this.communityRepository.update(communityId, data)

    if (!communityUpdated) return err({ reason: "FAILED_TO_UPDATE_COMMUNITY" })

    return ok(communityUpdated)
  }

  async deleteCommunity(communityId: SelectCommunity["id"], password: string, user: User) {
    const community = await this.getCommunity(communityId)

    if (!CommunityPolicy.canDelete(community, user)) return err({ reason: "UNAUTHORIZED" })

    const isValidPassword = await checkPassword(password)

    if (!isValidPassword) return err({ reason: "INVALID_PASSWORD" })

    return ok(await this.communityRepository.delete(communityId))
  }
}

export const communityService = new CommunityService(communityRepository)
