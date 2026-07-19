import { v } from "convex/values"
import { mutation, query } from "./_generated/server"

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("inquiries").order("desc").take(200)
  },
})

export const get = query({
  args: { id: v.id("inquiries") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id)
  },
})

export const create = mutation({
  args: {
    name: v.string(),
    phone: v.string(),
    email: v.string(),
    message: v.string(),
    service: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("inquiries", {
      ...args,
      status: "new",
    })
  },
})

export const updateStatus = mutation({
  args: {
    id: v.id("inquiries"),
    status: v.union(v.literal("new"), v.literal("read"), v.literal("replied")),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { status: args.status })
  },
})

export const counts = query({
  args: {},
  handler: async (ctx) => {
    const all = await ctx.db.query("inquiries").take(500)
    return {
      total: all.length,
      newInquiries: all.filter((i) => i.status === "new").length,
      read: all.filter((i) => i.status === "read").length,
      replied: all.filter((i) => i.status === "replied").length,
    }
  },
})
