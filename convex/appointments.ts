import { v } from "convex/values"
import { mutation, query } from "./_generated/server"

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("appointments").order("desc").take(200)
  },
})

export const get = query({
  args: { id: v.id("appointments") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id)
  },
})

export const create = mutation({
  args: {
    name: v.string(),
    phone: v.string(),
    email: v.string(),
    reason: v.string(),
    preferredDate: v.string(),
    preferredTime: v.string(),
    notes: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("appointments", {
      ...args,
      status: "pending",
    })
  },
})

export const updateStatus = mutation({
  args: {
    id: v.id("appointments"),
    status: v.union(
      v.literal("pending"),
      v.literal("confirmed"),
      v.literal("completed"),
      v.literal("cancelled"),
    ),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { status: args.status })
  },
})

export const updateAdminNotes = mutation({
  args: {
    id: v.id("appointments"),
    adminNotes: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { adminNotes: args.adminNotes })
  },
})

export const counts = query({
  args: {},
  handler: async (ctx) => {
    const all = await ctx.db.query("appointments").take(500)
    return {
      total: all.length,
      pending: all.filter((a) => a.status === "pending").length,
      confirmed: all.filter((a) => a.status === "confirmed").length,
      completed: all.filter((a) => a.status === "completed").length,
      cancelled: all.filter((a) => a.status === "cancelled").length,
    }
  },
})

export const monthly = query({
  args: {},
  handler: async (ctx) => {
    const all = await ctx.db.query("appointments").take(500)
    const now = new Date()
    const months: Record<string, number> = {}

    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1)
      const key = d.toLocaleString("en-US", { month: "short" })
      months[key] = 0
    }

    for (const appt of all) {
      const d = new Date(appt._creationTime)
      const key = d.toLocaleString("en-US", { month: "short" })
      if (key in months) {
        months[key]++
      }
    }

    return Object.entries(months).map(([month, count]) => ({
      month,
      count,
    }))
  },
})
