import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

export default defineSchema({
  placeholder: defineTable({
    text: v.string(),
  }),
})
