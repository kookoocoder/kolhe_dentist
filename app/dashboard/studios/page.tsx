"use client"

import { useMemo, useState } from "react"
import { Building2, ChevronRight, LayoutGrid, List, Ruler, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
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
import { Button } from "@/components/ui/button"

const BUILDINGS = ["All Clubs", "VoltFit Midtown", "VoltFit Harbor", "VoltFit Chelsea"]

const INITIAL_SPACES = [
  { id: 1, building: "VoltFit Midtown", suite: "Studio A · Strength Floor", rsf: 2400, desks: 18, status: "Booked" as const, rent: 880 },
  { id: 2, building: "VoltFit Midtown", suite: "Studio B · Cycle Room", rsf: 1150, desks: 28, status: "Open" as const, rent: 460 },
  { id: 3, building: "VoltFit Harbor", suite: "Studio C · HIIT Bay", rsf: 3100, desks: 24, status: "Booked" as const, rent: 1240 },
  { id: 4, building: "VoltFit Harbor", suite: "Studio D · Recovery Suite", rsf: 900, desks: 10, status: "Held" as const, rent: 360 },
  { id: 5, building: "VoltFit Chelsea", suite: "Studio E · Yoga Loft", rsf: 4800, desks: 36, status: "Booked" as const, rent: 2160 },
  { id: 6, building: "VoltFit Chelsea", suite: "Studio F · Boxing Cage", rsf: 1750, desks: 16, status: "Open" as const, rent: 700 },
]

const STATUS_STYLES: Record<string, string> = {
  Booked: "bg-blue-100 text-blue-600 border-0",
  Open: "bg-green-100 text-green-600 border-0",
  Held: "bg-amber-100 text-amber-600 border-0",
}

const fmt = (n: number) => n.toLocaleString("en-US")

function StatusBadge({ status }: { status: string }) {
  return <Badge className={STATUS_STYLES[status]}>{status}</Badge>
}

export default function StudiosPage() {
  const [building, setBuilding] = useState("All Clubs")
  const [view, setView] = useState<"grid" | "list">("grid")
  const [spaces, setSpaces] = useState(INITIAL_SPACES)
  const [selected, setSelected] = useState<typeof INITIAL_SPACES[0] | null>(null)

  const filtered = useMemo(
    () => spaces.filter((s) => building === "All Clubs" || s.building === building),
    [spaces, building],
  )

  const kpis = useMemo(() => {
    const buildings = new Set(filtered.map((s) => s.building)).size
    const occupied = filtered.filter((s) => s.status === "Booked").length
    const totalRsf = filtered.reduce((sum, s) => sum + s.rsf, 0)
    const availableRsf = filtered.filter((s) => s.status === "Open").reduce((sum, s) => sum + s.rsf, 0)
    const occupancy = filtered.length ? Math.round((occupied / filtered.length) * 100) : 0
    return [
      { label: "Total Clubs", value: String(buildings), unit: "", hint: building === "All Clubs" ? "Across network" : `In ${building}` },
      { label: "Studio Utilization", value: String(occupancy), unit: "%", hint: `${occupied} of ${filtered.length} studios` },
      { label: "Total Floor Area", value: fmt(totalRsf), unit: "SF", hint: "Training square feet" },
      { label: "Open Floor Area", value: fmt(availableRsf), unit: "SF", hint: "Ready to book" },
    ]
  }, [filtered, building])

  const reserveSpace = (id: number) => {
    setSpaces((prev) => prev.map((s) => (s.id === id ? { ...s, status: "Held" as const } : s)))
    setSelected(null)
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Studios</h1>
        <Select value={building} onValueChange={(v) => v && setBuilding(v)}>
          <SelectTrigger className="w-fit min-w-[150px] rounded-full bg-card shadow-sm">
            <Building2 size={16} />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {BUILDINGS.map((b) => (
              <SelectItem key={b} value={b}>{b}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-4 gap-5">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="rounded-[20px] bg-card p-5 shadow-sm">
            <p className="text-xs text-muted-foreground">{kpi.label}</p>
            <p className="mt-2 text-[28px] font-bold leading-none tracking-tight">
              {kpi.value}
              {kpi.unit && <span className="ml-1 align-super text-sm font-medium text-muted-foreground">{kpi.unit}</span>}
            </p>
            <p className="mt-3 text-xs text-muted-foreground">{kpi.hint}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold">
          Studios <span className="ml-1 text-xs font-medium text-muted-foreground">{filtered.length}</span>
        </h2>
        <div className="flex items-center gap-1 rounded-full bg-muted p-1">
          {[
            { key: "grid" as const, icon: LayoutGrid },
            { key: "list" as const, icon: List },
          ].map(({ key, icon: Icon }) => (
            <button
              key={key}
              type="button"
              onClick={() => setView(key)}
              aria-label={`${key} view`}
              className={`grid h-8 w-8 place-items-center rounded-full transition-all ${view === key ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
            >
              <Icon size={16} />
            </button>
          ))}
        </div>
      </div>

      {view === "grid" && (
        <div className="grid grid-cols-3 gap-5">
          {filtered.map((space) => (
            <button
              key={space.id}
              type="button"
              onClick={() => setSelected(space)}
              className="rounded-[20px] bg-card p-5 text-left shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-muted text-muted-foreground">
                  <Building2 size={18} />
                </div>
                <StatusBadge status={space.status} />
              </div>
              <p className="mt-3 font-semibold">{space.building}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{space.suite}</p>
              <div className="mt-4 flex items-center gap-4 border-t border-border pt-3">
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Ruler size={13} /> {fmt(space.rsf)} SF
                </span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Users size={13} /> {space.desks} spots
                </span>
              </div>
            </button>
          ))}
        </div>
      )}

      {view === "list" && (
        <div className="divide-y divide-border rounded-[20px] bg-card shadow-sm">
          {filtered.map((space) => (
            <button
              key={space.id}
              type="button"
              onClick={() => setSelected(space)}
              className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-muted/60"
            >
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-muted text-muted-foreground">
                <Building2 size={16} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">{space.building}</p>
                <p className="truncate text-xs text-muted-foreground">{space.suite}</p>
              </div>
              <span className="hidden w-24 text-right text-sm font-semibold sm:block">
                {fmt(space.rsf)}<span className="ml-1 text-xs font-normal text-muted-foreground">SF</span>
              </span>
              <span className="hidden w-20 text-right text-sm text-muted-foreground sm:block">
                {space.desks} spots
              </span>
              <StatusBadge status={space.status} />
              <ChevronRight size={16} className="text-muted-foreground" />
            </button>
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <div className="rounded-[20px] border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
          No studios found for this club.
        </div>
      )}

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selected?.building ?? ""}</DialogTitle>
          </DialogHeader>
          {selected && (
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">{selected.suite}</p>
                <StatusBadge status={selected.status} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Club", value: selected.building },
                  { label: "Studio", value: selected.suite },
                  { label: "Floor Area", value: `${fmt(selected.rsf)} SF` },
                  { label: "Class Spots", value: selected.desks },
                ].map((row) => (
                  <div key={row.label} className="rounded-xl bg-muted px-3 py-2.5">
                    <p className="text-xs text-muted-foreground">{row.label}</p>
                    <p className="mt-0.5 text-sm font-semibold">{row.value}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-border pt-3">
                <p className="text-sm text-muted-foreground">Hourly Rate</p>
                <p className="text-sm font-bold">${fmt(selected.rent)} / hr</p>
              </div>
            </div>
          )}
          {selected?.status === "Open" && (
            <DialogFooter>
              <Button onClick={() => reserveSpace(selected.id)}>Hold Studio</Button>
            </DialogFooter>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
