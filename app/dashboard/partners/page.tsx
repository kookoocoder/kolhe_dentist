"use client"

import { useMemo, useState } from "react"
import { ChevronLeft, ChevronRight, Clock, Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"

const COLUMNS = [
  { key: "lead", title: "Prospect", dot: "bg-blue-500" },
  { key: "negotiation", title: "In Talks", dot: "bg-amber-400" },
  { key: "closed", title: "Signed", dot: "bg-green-500" },
]

const AVATAR_COLORS = [
  "bg-blue-100 text-blue-600",
  "bg-purple-100 text-purple-600",
  "bg-green-100 text-green-600",
  "bg-amber-100 text-amber-600",
  "bg-pink-100 text-pink-600",
]

const INITIAL_DEALS = [
  { id: 1, company: "Atlas Ventures", property: "VoltFit Midtown · Corporate 50", value: 42000, days: 3, stage: "lead", color: 0 },
  { id: 2, company: "Brightline Media", property: "VoltFit Chelsea · Day Pass Pack", value: 28500, days: 6, stage: "lead", color: 1 },
  { id: 3, company: "Northwind Labs", property: "VoltFit Harbor · Team 25", value: 15800, days: 12, stage: "negotiation", color: 2 },
  { id: 4, company: "Copper & Co.", property: "VoltFit Midtown · Executive", value: 52400, days: 9, stage: "negotiation", color: 3 },
  { id: 5, company: "Helio Robotics", property: "VoltFit Chelsea · Campus Pass", value: 96000, days: 21, stage: "closed", color: 4 },
  { id: 6, company: "Fernwell Group", property: "VoltFit Harbor · Wellness Pack", value: 61200, days: 15, stage: "closed", color: 1 },
]

const fmt = (n: number) => n.toLocaleString("en-US")

const initials = (name: string) =>
  name.split(/\s+/).map((w) => w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase()

export default function PartnersPage() {
  const [deals, setDeals] = useState(INITIAL_DEALS)
  const [query, setQuery] = useState("")
  const [modalOpen, setModalOpen] = useState(false)
  const [form, setForm] = useState({ company: "", property: "", value: "" })

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return deals
    return deals.filter((d) => d.company.toLowerCase().includes(q) || d.property.toLowerCase().includes(q))
  }, [deals, query])

  const moveDeal = (id: number, dir: number) => {
    setDeals((prev) =>
      prev.map((d) => {
        if (d.id !== id) return d
        const idx = COLUMNS.findIndex((c) => c.key === d.stage)
        const next = Math.min(Math.max(idx + dir, 0), COLUMNS.length - 1)
        return { ...d, stage: COLUMNS[next].key, days: 0 }
      }),
    )
  }

  const addDeal = () => {
    const value = Number(form.value.replace(/[^0-9]/g, "")) || 0
    setDeals((prev) => [
      ...prev,
      { id: Date.now(), company: form.company.trim(), property: form.property.trim(), value, days: 0, stage: "lead", color: prev.length % AVATAR_COLORS.length },
    ])
    setForm({ company: "", property: "", value: "" })
    setModalOpen(false)
  }

  const canAdd = form.company.trim() && form.property.trim()

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Partners</h1>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search partners..."
              className="w-64 rounded-full bg-card py-2 pl-9 pr-4 text-sm shadow-sm outline-none transition placeholder:text-muted-foreground focus:ring-2 focus:ring-accent/30"
            />
          </div>
          <Button onClick={() => setModalOpen(true)}>
            <Plus size={16} />
            New Partnership
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {COLUMNS.map((col, colIdx) => {
          const cards = visible.filter((d) => d.stage === col.key)
          return (
            <div key={col.key} className="flex flex-col gap-3 rounded-[20px] bg-muted/40 p-3">
              <div className="flex items-center gap-2 px-1">
                <span className={`h-2 w-2 rounded-full ${col.dot}`} />
                <h2 className="text-sm font-semibold">{col.title}</h2>
                <span className="rounded-full bg-card px-2 py-0.5 text-xs font-semibold text-muted-foreground">
                  {cards.length}
                </span>
              </div>

              {cards.map((deal) => (
                <div key={deal.id} className="rounded-[20px] bg-card p-4 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex items-start gap-3">
                    <div className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-xs font-bold ${AVATAR_COLORS[deal.color]}`}>
                      {initials(deal.company)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-semibold">{deal.company}</p>
                      <p className="truncate text-xs text-muted-foreground">{deal.property}</p>
                    </div>
                    <div className="flex shrink-0 gap-1">
                      {colIdx > 0 && (
                        <button
                          type="button"
                          onClick={() => moveDeal(deal.id, -1)}
                          aria-label={`Move ${deal.company} to ${COLUMNS[colIdx - 1].title}`}
                          className="grid h-7 w-7 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        >
                          <ChevronLeft size={14} />
                        </button>
                      )}
                      {colIdx < COLUMNS.length - 1 && (
                        <button
                          type="button"
                          onClick={() => moveDeal(deal.id, 1)}
                          aria-label={`Move ${deal.company} to ${COLUMNS[colIdx + 1].title}`}
                          className="grid h-7 w-7 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        >
                          <ChevronRight size={14} />
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <p className="font-bold">${fmt(deal.value)}</p>
                    <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                      <Clock size={12} />
                      {deal.days} days in stage
                    </span>
                  </div>
                </div>
              ))}

              {cards.length === 0 && (
                <div className="rounded-[20px] border border-dashed border-border p-4 text-center text-xs text-muted-foreground">
                  No partnerships
                </div>
              )}
            </div>
          )
        })}
      </div>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New Partnership</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-3">
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">Company</label>
              <Input
                value={form.company}
                onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                placeholder="e.g. Atlas Ventures"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">Package</label>
              <Input
                value={form.property}
                onChange={(e) => setForm((f) => ({ ...f, property: e.target.value }))}
                placeholder="e.g. VoltFit Midtown · Corporate 50"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">Annual Value</label>
              <Input
                value={form.value}
                onChange={(e) => setForm((f) => ({ ...f, value: e.target.value }))}
                placeholder="e.g. 42000"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button onClick={addDeal} disabled={!canAdd}>Add Partnership</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
