import { communitiesTable } from "~/db/schema/communities"

export type InsertCommunity = typeof communitiesTable.$inferInsert
export type SelectCommunity = typeof communitiesTable.$inferSelect
