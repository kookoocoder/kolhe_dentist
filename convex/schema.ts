import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

export default defineSchema({
  appointments: defineTable({
    name: v.string(),
    phone: v.string(),
    email: v.string(),
    reason: v.string(),
    preferredDate: v.string(),
    preferredTime: v.string(),
    notes: v.string(),
    status: v.union(
      v.literal("pending"),
      v.literal("confirmed"),
      v.literal("completed"),
      v.literal("cancelled"),
    ),
    adminNotes: v.optional(v.string()),
  })
    .index("by_status", ["status"])
    .index("by_preferredDate", ["preferredDate"]),

  inquiries: defineTable({
    name: v.string(),
    phone: v.string(),
    email: v.string(),
    message: v.string(),
    service: v.optional(v.string()),
    status: v.union(v.literal("new"), v.literal("read"), v.literal("replied")),
  }).index("by_status", ["status"]),
})
