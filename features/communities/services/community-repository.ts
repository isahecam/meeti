import { db } from "~/db"
import { communitiesTable } from "~/db/schema"
import { InsertCommunity, SelectCommunity } from "~/features/communities/types/community-types"

export interface ICommunityRepository {
  create(data: InsertCommunity): Promise<SelectCommunity>
}

class CommunityRepository implements ICommunityRepository {
  async create(data: InsertCommunity) {
    const [result] = await db.insert(communitiesTable).values(data).returning()
    return result
  }
}

export const communityRepository = new CommunityRepository()
