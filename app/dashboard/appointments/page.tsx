"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useMutation, useQuery } from "convex/react"
import { useMemo, useState } from "react"
import { api } from "../../../convex/_generated/api"
import { type Id } from "../../../convex/_generated/dataModel"

const STATUS_STYLES: Record<string, string> = {
  pending: "bg-amber-100 text-amber-700",
  confirmed: "bg-green-100 text-green-700",
  completed: "bg-blue-100 text-blue-700",
  cancelled: "bg-gray-100 text-gray-600",
}

const TABS = ["All", "pending", "confirmed", "completed", "cancelled"]

export default function AppointmentsPage() {
  const appointments = useQuery(api.appointments.list)
  const updateStatus = useMutation(api.appointments.updateStatus)

  const [tab, setTab] = useState("All")
  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState<
    (typeof appointments extends (infer T)[] | undefined ? T : never) | null
  >(null)

  const filtered = useMemo(() => {
    if (!appointments) return []
    return appointments.filter((a) => {
      const matchesTab = tab === "All" || a.status === tab
      const matchesSearch =
        !search ||
        a.name.toLowerCase().includes(search.toLowerCase()) ||
        a.email.toLowerCase().includes(search.toLowerCase()) ||
        a.phone.includes(search)
      return matchesTab && matchesSearch
    })
  }, [appointments, tab, search])

  const handleStatusChange = async (
    id: Id<"appointments">,
    status: "pending" | "confirmed" | "completed" | "cancelled",
  ) => {
    await updateStatus({ id, status })
    if (selected?._id === id) {
      setSelected((prev) => (prev ? { ...prev, status } : null))
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Appointments</h1>
        <p className="text-sm text-muted-foreground">
          {filtered.length} appointment{filtered.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Input
          placeholder="Search by name, email, or phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm rounded-xl"
        />
        <div className="flex items-center gap-1 rounded-full bg-muted p-1">
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                tab === t
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t === "All" ? "All" : t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-[20px] bg-card p-5 shadow-sm">
        <div className="grid grid-cols-12 gap-4 border-b border-border pb-3">
          <p className="col-span-2 text-xs font-medium text-muted-foreground">Patient</p>
          <p className="col-span-2 text-xs font-medium text-muted-foreground">Phone</p>
          <p className="col-span-2 text-xs font-medium text-muted-foreground">Email</p>
          <p className="col-span-2 text-xs font-medium text-muted-foreground">Reason</p>
          <p className="col-span-2 text-xs font-medium text-muted-foreground">Date</p>
          <p className="col-span-2 text-xs font-medium text-muted-foreground">Status</p>
        </div>

        {filtered.length === 0 ? (
          <p className="py-12 text-center text-sm text-muted-foreground">
            {appointments ? "No appointments match your filters." : "Loading..."}
          </p>
        ) : (
          <ul className="divide-y divide-border">
            {filtered.map((appt) => (
              <li
                key={appt._id}
                onClick={() => setSelected(appt)}
                className="grid grid-cols-12 items-center gap-4 -mx-2 cursor-pointer rounded-xl px-2 py-3 transition-colors hover:bg-muted/60"
              >
                <p className="col-span-2 truncate text-sm font-medium">{appt.name}</p>
                <p className="col-span-2 truncate text-sm text-muted-foreground">{appt.phone}</p>
                <p className="col-span-2 truncate text-sm text-muted-foreground">{appt.email}</p>
                <p className="col-span-2 truncate text-sm text-muted-foreground">{appt.reason}</p>
                <p className="col-span-2 text-sm text-muted-foreground">{appt.preferredDate}</p>
                <div className="col-span-2">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${STATUS_STYLES[appt.status] || ""}`}
                  >
                    {appt.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Appointment Details</DialogTitle>
          </DialogHeader>
          {selected && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Patient Name</p>
                  <p className="mt-1 text-sm font-medium">{selected.name}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Phone</p>
                  <p className="mt-1 text-sm">{selected.phone}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Email</p>
                  <p className="mt-1 text-sm">{selected.email}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Reason</p>
                  <p className="mt-1 text-sm">{selected.reason}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Preferred Date</p>
                  <p className="mt-1 text-sm">{selected.preferredDate}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Preferred Time</p>
                  <p className="mt-1 text-sm">{selected.preferredTime}</p>
                </div>
              </div>

              {selected.notes && (
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Patient Notes</p>
                  <p className="mt-1 rounded-xl bg-muted/50 p-3 text-sm">{selected.notes}</p>
                </div>
              )}

              <div>
                <p className="text-xs font-medium text-muted-foreground mb-2">Update Status</p>
                <div className="flex gap-2">
                  {(["pending", "confirmed", "completed", "cancelled"] as const).map((s) => (
                    <Button
                      key={s}
                      variant={selected.status === s ? "default" : "outline"}
                      size="sm"
                      className="rounded-full text-xs"
                      onClick={() => handleStatusChange(selected._id, s)}
                    >
                      {s.charAt(0).toUpperCase() + s.slice(1)}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-medium text-muted-foreground">
                  Booked on:{" "}
                  {new Date(selected._creationTime).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
