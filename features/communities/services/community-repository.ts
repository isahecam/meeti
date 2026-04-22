import { User } from "better-auth"
import { eq } from "drizzle-orm"

import { db } from "~/db"
import { communitiesTable } from "~/db/schema"
import { InsertCommunity, SelectCommunity } from "~/features/communities/types/community-types"

export interface ICommunityRepository {
  create(data: InsertCommunity): Promise<SelectCommunity>
  findByUserId(userId: User["id"], limit?: number): Promise<SelectCommunity[]>
}

class CommunityRepository implements ICommunityRepository {
  async create(data: InsertCommunity) {
    const [result] = await db.insert(communitiesTable).values(data).returning()
    return result
  }

  async findByUserId(userId: User["id"], limit = 10) {
    const communities = await db
      .select()
      .from(communitiesTable)
      .where(eq(communitiesTable.createdBy, userId))
      .limit(limit)
    return communities
  }
}

export const communityRepository = new CommunityRepository()
