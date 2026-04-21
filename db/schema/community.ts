import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core"

// Comunnity Table
export const community = pgTable("community", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
})
