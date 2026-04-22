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
}

export const communityService = new CommunityService(communityRepository)
