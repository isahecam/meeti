import { User } from "better-auth"
import { eq } from "drizzle-orm"

import { db } from "~/db"
import { communitiesTable } from "~/db/schema"
import { CommunityType } from "~/features/communities/schemas/community-schema"
import { InsertCommunity, SelectCommunity } from "~/features/communities/types/community-types"

export interface ICommunityRepository {
  create(data: InsertCommunity): Promise<SelectCommunity>
  findByUserId(userId: User["id"], limit?: number): Promise<SelectCommunity[]>
  findById(id: SelectCommunity["id"]): Promise<SelectCommunity | undefined>
  update(communityId: SelectCommunity["id"], data: CommunityType): Promise<SelectCommunity | undefined>
  delete(communityId: SelectCommunity["id"]): Promise<void>
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

  async findById(communityId: SelectCommunity["id"]) {
    const [result] = await db.select().from(communitiesTable).where(eq(communitiesTable.id, communityId)).limit(1)
    return result
  }

  async update(communityId: SelectCommunity["id"], data: CommunityType) {
    const [result] = await db.update(communitiesTable).set(data).where(eq(communitiesTable.id, communityId)).returning()
    return result
  }

  async delete(communityId: SelectCommunity["id"]) {
    await db.delete(communitiesTable).where(eq(communitiesTable.id, communityId))
  }
}

export const communityRepository = new CommunityRepository()
