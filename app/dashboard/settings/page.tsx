"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Check, User } from "lucide-react"
import { useState } from "react"

const TABS = ["Profile", "Notifications", "Preferences"]

const NOTIFICATION_OPTIONS = [
  {
    key: "digests",
    label: "Email digests",
    description: "A daily summary of club activity in your inbox.",
  },
  {
    key: "leaseExpiry",
    label: "Membership expiry alerts",
    description: "Get notified 60 days before a plan ends.",
  },
  {
    key: "payments",
    label: "Payment reminders",
    description: "Alerts for upcoming and overdue dues or vendor bills.",
  },
  {
    key: "reports",
    label: "Weekly reports",
    description: "Receive a weekly club performance report every Monday.",
  },
  {
    key: "updates",
    label: "Product updates",
    description: "Occasional news about new features and improvements.",
  },
]

export default function SettingsPage() {
  const [tab, setTab] = useState("Profile")
  const [profile, setProfile] = useState({
    name: "Jane Cooper",
    email: "jane@voltfit.com",
    company: "VoltFit Group",
  })
  const [saved, setSaved] = useState(false)
  const [notifications, setNotifications] = useState<Record<string, boolean>>({
    digests: true,
    leaseExpiry: true,
    payments: true,
    reports: false,
    updates: false,
  })
  const [currency, setCurrency] = useState("USD")
  const [dateFormat, setDateFormat] = useState("MM/DD/YYYY")
  const [darkMode, setDarkMode] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-xl font-bold">Settings</h1>

      <div className="flex w-fit gap-1 rounded-full bg-muted p-1">
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${tab === t ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === "Profile" && (
        <div className="max-w-lg rounded-[20px] bg-card p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-muted">
              <User size={28} className="text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-semibold">{profile.name}</p>
              <p className="text-xs text-muted-foreground">{profile.email}</p>
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">Full name</label>
              <Input
                value={profile.name}
                onChange={(e) => setProfile((p) => ({ ...p, name: e.target.value }))}
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">Email</label>
              <Input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile((p) => ({ ...p, email: e.target.value }))}
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">Company</label>
              <Input
                value={profile.company}
                onChange={(e) => setProfile((p) => ({ ...p, company: e.target.value }))}
              />
            </div>
            <Button
              onClick={handleSave}
              className={`w-fit rounded-full ${saved ? "bg-success/10 text-success hover:bg-success/20" : ""}`}
            >
              {saved && <Check size={14} />}
              {saved ? "Saved" : "Save Changes"}
            </Button>
          </div>
        </div>
      )}

      {tab === "Notifications" && (
        <div className="max-w-lg rounded-[20px] bg-card p-5 shadow-sm">
          <h2 className="text-base font-semibold">Notifications</h2>
          <div className="mt-3 divide-y divide-border">
            {NOTIFICATION_OPTIONS.map((opt) => (
              <div key={opt.key} className="flex items-center justify-between gap-4 py-3">
                <div className="min-w-0">
                  <p className="text-sm font-medium">{opt.label}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{opt.description}</p>
                </div>
                <Switch
                  checked={notifications[opt.key]}
                  onCheckedChange={(v) => setNotifications((n) => ({ ...n, [opt.key]: v }))}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "Preferences" && (
        <div className="max-w-lg rounded-[20px] bg-card p-5 shadow-sm">
          <h2 className="text-base font-semibold">Preferences</h2>
          <div className="mt-4 flex flex-col gap-5">
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">Currency</label>
              <Select value={currency} onValueChange={(v) => v && setCurrency(v)}>
                <SelectTrigger className="w-full rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {["USD", "EUR", "GBP"].map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">Date format</label>
              <Select value={dateFormat} onValueChange={(v) => v && setDateFormat(v)}>
                <SelectTrigger className="w-full rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {["MM/DD/YYYY", "DD/MM/YYYY", "YYYY-MM-DD"].map((f) => (
                    <SelectItem key={f} value={f}>
                      {f}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between gap-4 border-t border-border pt-4">
              <div>
                <p className="text-sm font-medium">Dark mode</p>
                <p className="text-xs text-muted-foreground">Coming soon</p>
              </div>
              <Switch checked={darkMode} onCheckedChange={setDarkMode} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
