"use client"

import { useMemo, useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"

const STATUSES = ["Active", "Expiring", "Terminated"]
const TABS = ["All", ...STATUSES]

const statusBadgeStyles: Record<string, string> = {
  Active: "bg-green-100 text-green-600",
  Expiring: "bg-amber-100 text-amber-600",
  Terminated: "bg-muted text-muted-foreground",
}

const formatDate = (date: Date) =>
  date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })

const formatDues = (n: number) => `$${n.toLocaleString("en-US")}`

const initialMemberships = [
  { id: 1, tenant: "Elena Rodriguez", property: "VoltFit Midtown", rent: 89, start: "Jan 15, 2025", end: "Jan 14, 2027", status: "Active" as const },
  { id: 2, tenant: "Marcus Chen", property: "VoltFit Harbor", rent: 69, start: "Apr 1, 2025", end: "Sep 30, 2026", status: "Expiring" as const },
  { id: 3, tenant: "Priya Nair", property: "VoltFit Chelsea", rent: 119, start: "Jun 1, 2024", end: "May 31, 2026", status: "Terminated" as const },
  { id: 4, tenant: "David Okafor", property: "VoltFit Brooklyn", rent: 59, start: "Aug 1, 2025", end: "Jul 31, 2027", status: "Active" as const },
  { id: 5, tenant: "Sofia Marino", property: "VoltFit Austin", rent: 79, start: "Oct 15, 2025", end: "Aug 14, 2026", status: "Expiring" as const },
  { id: 6, tenant: "James Whitfield", property: "VoltFit Midtown", rent: 149, start: "Feb 1, 2026", end: "Jan 31, 2028", status: "Active" as const },
  { id: 7, tenant: "Anaïs Laurent", property: "VoltFit Chelsea", rent: 99, start: "May 1, 2025", end: "Apr 30, 2027", status: "Active" as const },
]

const gridCols = "grid grid-cols-12 items-center gap-4"

export default function MembershipsPage() {
  const [leases, setLeases] = useState(initialMemberships)
  const [tab, setTab] = useState("All")
  const [addOpen, setAddOpen] = useState(false)
  const [tenant, setTenant] = useState("")
  const [property, setProperty] = useState("")
  const [rent, setRent] = useState("")

  const kpis = useMemo(() => {
    const active = leases.filter((l) => l.status === "Active").length
    const expiring = leases.filter((l) => l.status === "Expiring").length
    const rentTotal = leases.filter((l) => l.status !== "Terminated").reduce((sum, l) => sum + l.rent, 0)
    return [
      { label: "Active Memberships", value: String(active), sub: `${leases.length} total on record` },
      { label: "Expiring in 90 Days", value: String(expiring), sub: "Need renewal outreach" },
      { label: "Monthly Dues Total", value: formatDues(rentTotal), sub: "Active and expiring plans" },
    ]
  }, [leases])

  const visibleLeases = useMemo(
    () => (tab === "All" ? leases : leases.filter((l) => l.status === tab)),
    [leases, tab],
  )

  const setStatus = (id: number, status: string) =>
    setLeases((rows) => rows.map((r) => (r.id === id ? { ...r, status: status as typeof r.status } : r)))

  const addLease = () => {
    const name = tenant.trim()
    const place = property.trim()
    const monthly = Number(rent)
    if (!name || !place || !monthly || monthly <= 0) return
    const now = new Date()
    const endDate = new Date(now)
    endDate.setFullYear(endDate.getFullYear() + 1)
    setLeases((rows) => [
      ...rows,
      { id: Date.now(), tenant: name, property: place, rent: monthly, start: formatDate(now), end: formatDate(endDate), status: "Active" as const },
    ])
    setTenant("")
    setProperty("")
    setRent("")
    setAddOpen(false)
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Membership Management</h1>
        <Button onClick={() => setAddOpen(true)}>
          <Plus size={16} />
          Add Membership
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="rounded-[20px] bg-card p-5 shadow-sm">
            <p className="text-xs text-muted-foreground">{kpi.label}</p>
            <p className="mt-2 text-[28px] font-bold leading-none tracking-tight">{kpi.value}</p>
            <p className="mt-2 text-xs text-muted-foreground">{kpi.sub}</p>
          </div>
        ))}
      </div>

      <div className="flex w-fit items-center gap-1 rounded-full bg-muted p-1">
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${tab === t ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="rounded-[20px] bg-card p-5 shadow-sm">
        <div className={`${gridCols} border-b border-border pb-3`}>
          <p className="col-span-2 text-xs font-medium text-muted-foreground">Member</p>
          <p className="col-span-2 text-xs font-medium text-muted-foreground">Home Club</p>
          <p className="col-span-2 text-xs font-medium text-muted-foreground">Monthly Dues</p>
          <p className="col-span-2 text-xs font-medium text-muted-foreground">Start Date</p>
          <p className="col-span-2 text-xs font-medium text-muted-foreground">End Date</p>
          <p className="col-span-2 text-xs font-medium text-muted-foreground">Status</p>
        </div>

        {visibleLeases.length === 0 ? (
          <p className="py-12 text-center text-sm text-muted-foreground">No memberships in this category.</p>
        ) : (
          <ul className="divide-y divide-border">
            {visibleLeases.map((lease) => (
              <li key={lease.id} className={`${gridCols} -mx-2 rounded-xl px-2 py-3 transition-colors hover:bg-muted/60`}>
                <p className="col-span-2 truncate text-sm font-medium">{lease.tenant}</p>
                <p className="col-span-2 truncate text-sm text-muted-foreground">{lease.property}</p>
                <p className="col-span-2 text-sm font-semibold">{formatDues(lease.rent)}</p>
                <p className="col-span-2 text-sm text-muted-foreground">{lease.start}</p>
                <p className="col-span-2 text-sm text-muted-foreground">{lease.end}</p>
                <div className="col-span-2">
                  <Select value={lease.status} onValueChange={(v) => v && setStatus(lease.id, v)}>
                    <SelectTrigger className={`h-7 rounded-full border-0 px-3 py-1 text-xs font-semibold shadow-none ${statusBadgeStyles[lease.status] || "bg-muted text-muted-foreground"}`}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {STATUSES.map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Membership</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-muted-foreground">Member</label>
              <Input value={tenant} onChange={(e) => setTenant(e.target.value)} placeholder="e.g. Elena Rodriguez" autoFocus />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-muted-foreground">Home Club</label>
              <Input value={property} onChange={(e) => setProperty(e.target.value)} placeholder="e.g. VoltFit Midtown" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-muted-foreground">Monthly dues</label>
              <Input type="number" min="0" value={rent} onChange={(e) => setRent(e.target.value)} placeholder="e.g. 89" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setAddOpen(false)}>Cancel</Button>
            <Button onClick={addLease} disabled={!tenant.trim() || !property.trim() || !(Number(rent) > 0)}>Add Membership</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
