import { communitiesTable } from "~/db/schema/communities"

export type InsertCommunity = typeof communitiesTable.$inferInsert
export type SelectCommunity = typeof communitiesTable.$inferSelect

export interface CommunityContext {
  isMember: boolean
  isAdmin: boolean
}

export interface CommunityPermissions {
  canEdit: boolean
  canDelete: boolean
  canJoin: boolean
  canLeave: boolean
  canViewMembers: boolean
}

export interface CommunityWithPermissions {
  data: SelectCommunity
  context: CommunityContext
  permissions: CommunityPermissions
}
