import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core"

export const communitiesTable = pgTable("communities", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
})
