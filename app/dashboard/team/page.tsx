"use client"

import { useState } from "react"
import { Search, Trash2, UserPlus } from "lucide-react"
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

const INITIAL_MEMBERS = [
  { id: 1, name: "Jane Cooper", email: "jane@voltfit.com", role: "Owner", status: "Active", color: "bg-pink-100 text-pink-600" },
  { id: 2, name: "Marcus Chen", email: "marcus@voltfit.com", role: "Admin", status: "Active", color: "bg-green-100 text-green-600" },
  { id: 3, name: "Priya Nair", email: "priya@voltfit.com", role: "Member", status: "Active", color: "bg-muted text-muted-foreground" },
  { id: 4, name: "Tom Alvarez", email: "tom@voltfit.com", role: "Member", status: "Pending", color: "bg-amber-100 text-amber-600" },
  { id: 5, name: "Sofia Ricci", email: "sofia@voltfit.com", role: "Admin", status: "Active", color: "bg-green-100 text-green-600" },
  { id: 6, name: "David Kim", email: "david@voltfit.com", role: "Member", status: "Pending", color: "bg-muted text-muted-foreground" },
  { id: 7, name: "Amara Osei", email: "amara@voltfit.com", role: "Member", status: "Active", color: "bg-pink-100 text-pink-600" },
  { id: 8, name: "Liam Novak", email: "liam@voltfit.com", role: "Member", status: "Active", color: "bg-green-100 text-green-600" },
]

const ROLE_BADGE: Record<string, string> = {
  Owner: "bg-foreground text-background",
  Admin: "bg-amber-100 text-amber-600",
  Member: "bg-muted text-muted-foreground",
}

const initials = (name: string) =>
  name.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase()

export default function TeamPage() {
  const [members, setMembers] = useState(INITIAL_MEMBERS)
  const [search, setSearch] = useState("")
  const [inviteOpen, setInviteOpen] = useState(false)
  const [invite, setInvite] = useState({ name: "", email: "", role: "Member" })
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  const filtered = members.filter(
    (m) => m.name.toLowerCase().includes(search.toLowerCase()) || m.email.toLowerCase().includes(search.toLowerCase()),
  )

  const setRole = (id: number, role: string) =>
    setMembers((ms) => ms.map((m) => (m.id === id ? { ...m, role } : m)))

  const removeMember = (id: number) => setMembers((ms) => ms.filter((m) => m.id !== id))

  const sendInvite = () => {
    const next = { name: !invite.name.trim(), email: !invite.email.trim() }
    setErrors(next)
    if (Object.values(next).some(Boolean)) return
    setMembers((ms) => [
      ...ms,
      { id: Math.max(...ms.map((m) => m.id), 0) + 1, name: invite.name.trim(), email: invite.email.trim(), role: invite.role, status: "Pending", color: "bg-amber-100 text-amber-600" },
    ])
    setInvite({ name: "", email: "", role: "Member" })
    setErrors({})
    setInviteOpen(false)
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="text-xl font-bold">Team</h1>
        <div className="flex-1" />
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or email"
            className="w-64 rounded-full bg-card py-2 pl-9 pr-4 text-sm shadow-sm outline-none transition-shadow placeholder:text-muted-foreground focus:shadow"
          />
        </div>
        <Button onClick={() => setInviteOpen(true)}>
          <UserPlus size={14} />
          Invite Member
        </Button>
      </div>

      {filtered.length === 0 ? (
        <p className="py-12 text-center text-sm text-muted-foreground">
          No team members match &ldquo;{search}&rdquo;.
        </p>
      ) : (
        <div className="grid grid-cols-4 gap-5">
          {filtered.map((m) => (
            <div key={m.id} className="relative rounded-[20px] bg-card p-5 text-center shadow-sm">
              {m.role !== "Owner" && (
                <button
                  type="button"
                  onClick={() => removeMember(m.id)}
                  className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-destructive"
                >
                  <Trash2 size={14} />
                </button>
              )}
              <div className={`mx-auto grid h-12 w-12 place-items-center rounded-full text-sm font-semibold ${m.color}`}>
                {initials(m.name)}
              </div>
              <p className="mt-3 text-sm font-semibold">{m.name}</p>
              <p className="mt-0.5 truncate text-xs text-muted-foreground">{m.email}</p>
              <div className="mt-3 flex items-center justify-center gap-2">
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${ROLE_BADGE[m.role]}`}>
                  {m.role}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <span className={`h-1.5 w-1.5 rounded-full ${m.status === "Active" ? "bg-green-500" : "bg-amber-400"}`} />
                  {m.status}
                </span>
              </div>
              {m.role !== "Owner" && (
                <div className="mt-3 flex justify-center">
                  <Select value={m.role} onValueChange={(v) => v && setRole(m.id, v)}>
                    <SelectTrigger className="h-7 rounded-full border px-3 py-1 text-xs shadow-none">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {["Admin", "Member"].map((r) => (
                        <SelectItem key={r} value={r}>{r}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <Dialog open={inviteOpen} onOpenChange={setInviteOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Invite Member</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">Name</label>
              <Input
                value={invite.name}
                onChange={(e) => { setInvite((i) => ({ ...i, name: e.target.value })); setErrors((er) => ({ ...er, name: false })) }}
                placeholder="Full name"
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && <p className="text-xs text-destructive">Please enter a name.</p>}
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">Email</label>
              <Input
                type="email"
                value={invite.email}
                onChange={(e) => { setInvite((i) => ({ ...i, email: e.target.value })); setErrors((er) => ({ ...er, email: false })) }}
                placeholder="name@company.com"
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && <p className="text-xs text-destructive">Please enter an email.</p>}
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">Role</label>
              <Select value={invite.role} onValueChange={(v) => v && setInvite((i) => ({ ...i, role: v }))}>
                <SelectTrigger className="w-full rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {["Admin", "Member"].map((r) => (
                    <SelectItem key={r} value={r}>{r}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setInviteOpen(false)}>Cancel</Button>
            <Button onClick={sendInvite}>Send Invite</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
