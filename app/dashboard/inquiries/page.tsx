"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useMutation, useQuery } from "convex/react"
import { useMemo, useState } from "react"
import { api } from "../../../convex/_generated/api"
import { type Id } from "../../../convex/_generated/dataModel"

const STATUS_STYLES: Record<string, string> = {
  new: "bg-blue-100 text-blue-700",
  read: "bg-gray-100 text-gray-600",
  replied: "bg-green-100 text-green-700",
}

const TABS = ["All", "new", "read", "replied"]

export default function InquiriesPage() {
  const inquiries = useQuery(api.inquiries.list)
  const updateStatus = useMutation(api.inquiries.updateStatus)

  const [tab, setTab] = useState("All")
  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState<
    (typeof inquiries extends (infer T)[] | undefined ? T : never) | null
  >(null)

  const filtered = useMemo(() => {
    if (!inquiries) return []
    return inquiries.filter((i) => {
      const matchesTab = tab === "All" || i.status === tab
      const matchesSearch =
        !search ||
        i.name.toLowerCase().includes(search.toLowerCase()) ||
        i.email.toLowerCase().includes(search.toLowerCase()) ||
        i.phone.includes(search)
      return matchesTab && matchesSearch
    })
  }, [inquiries, tab, search])

  const handleView = async (inquiry: (typeof filtered)[0]) => {
    setSelected(inquiry)
    if (inquiry.status === "new") {
      await updateStatus({ id: inquiry._id, status: "read" })
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Inquiries</h1>
        <p className="text-sm text-muted-foreground">
          {filtered.length} inquiry{filtered.length !== 1 ? "ies" : ""}
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
          <p className="col-span-2 text-xs font-medium text-muted-foreground">Name</p>
          <p className="col-span-2 text-xs font-medium text-muted-foreground">Phone</p>
          <p className="col-span-2 text-xs font-medium text-muted-foreground">Email</p>
          <p className="col-span-2 text-xs font-medium text-muted-foreground">Service</p>
          <p className="col-span-2 text-xs font-medium text-muted-foreground">Date</p>
          <p className="col-span-2 text-xs font-medium text-muted-foreground">Status</p>
        </div>

        {filtered.length === 0 ? (
          <p className="py-12 text-center text-sm text-muted-foreground">
            {inquiries ? "No inquiries match your filters." : "Loading..."}
          </p>
        ) : (
          <ul className="divide-y divide-border">
            {filtered.map((inq) => (
              <li
                key={inq._id}
                onClick={() => handleView(inq)}
                className="grid grid-cols-12 items-center gap-4 -mx-2 cursor-pointer rounded-xl px-2 py-3 transition-colors hover:bg-muted/60"
              >
                <p className="col-span-2 truncate text-sm font-medium">{inq.name}</p>
                <p className="col-span-2 truncate text-sm text-muted-foreground">{inq.phone}</p>
                <p className="col-span-2 truncate text-sm text-muted-foreground">{inq.email}</p>
                <p className="col-span-2 truncate text-sm text-muted-foreground">
                  {inq.service || "—"}
                </p>
                <p className="col-span-2 text-sm text-muted-foreground">
                  {new Date(inq._creationTime).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                <div className="col-span-2">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${STATUS_STYLES[inq.status] || ""}`}
                  >
                    {inq.status}
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
            <DialogTitle>Inquiry Details</DialogTitle>
          </DialogHeader>
          {selected && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Name</p>
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
                  <p className="text-xs font-medium text-muted-foreground">Service</p>
                  <p className="mt-1 text-sm">{selected.service || "Not specified"}</p>
                </div>
              </div>

              <div>
                <p className="text-xs font-medium text-muted-foreground">Message</p>
                <p className="mt-1 rounded-xl bg-muted/50 p-3 text-sm leading-relaxed">
                  {selected.message || "No message provided."}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium text-muted-foreground mb-2">Update Status</p>
                <div className="flex gap-2">
                  {(["new", "read", "replied"] as const).map((s) => (
                    <Button
                      key={s}
                      variant={selected.status === s ? "default" : "outline"}
                      size="sm"
                      className="rounded-full text-xs"
                      onClick={async () => {
                        await updateStatus({ id: selected._id, status: s })
                        setSelected((prev) => (prev ? { ...prev, status: s } : null))
                      }}
                    >
                      {s.charAt(0).toUpperCase() + s.slice(1)}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-medium text-muted-foreground">
                  Received on:{" "}
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
