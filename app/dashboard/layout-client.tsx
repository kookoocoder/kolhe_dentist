"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  Home,
  FileText,
  Briefcase,
  Building2,
  Handshake,
  Headphones,
  Settings,
  Users,
  Bell,
  User,
  ChevronDown,
  Check,
} from "lucide-react"
import { navItems, footerNavItems } from "@/components/dashboard/data"

const iconMap: Record<string, typeof Home> = {
  home: Home,
  "file-text": FileText,
  briefcase: Briefcase,
  building: Building2,
  handshake: Handshake,
  headphones: Headphones,
  settings: Settings,
  users: Users,
}

const WORKSPACES = ["VoltFit HQ", "East Region", "West Region", "Franchise Ops"]

const WORKSPACE_COLORS: Record<string, string> = {
  "VoltFit HQ": "bg-primary text-primary-foreground",
  "East Region": "bg-foreground text-background",
  "West Region": "bg-chart-blue text-white",
  "Franchise Ops": "bg-chart-pink text-white",
}

const INITIAL_NOTIFICATIONS = [
  { id: 1, title: "New member joined VoltFit Harbor", time: "5 min ago" },
  { id: 2, title: "Equipment lease of $6,828.59 due May 30", time: "1 hour ago" },
  { id: 3, title: "Trainer review with Oguz B", time: "Yesterday" },
]

function WorkspaceMark({ name }: { name: string }) {
  const color = WORKSPACE_COLORS[name] || "bg-muted text-white"
  return (
    <span
      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold ${color}`}
    >
      {name[0]}
    </span>
  )
}

export function DashboardLayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [workspace, setWorkspace] = useState("VoltFit HQ")
  const [workspaceOpen, setWorkspaceOpen] = useState(false)
  const [notifOpen, setNotifOpen] = useState(false)
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!workspaceOpen && !notifOpen) return
    const handleMouseDown = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setWorkspaceOpen(false)
        setNotifOpen(false)
      }
    }
    document.addEventListener("mousedown", handleMouseDown)
    return () => document.removeEventListener("mousedown", handleMouseDown)
  }, [workspaceOpen, notifOpen])

  return (
    <div className="flex min-h-screen">
      <aside className="fixed left-0 top-0 z-20 flex h-screen w-[232px] flex-col overflow-y-auto bg-sidebar p-5">
        {/* Avatar */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted">
          <User size={18} className="text-muted-foreground" strokeWidth={1.8} />
        </div>

        {/* Workspace selector + notifications */}
        <div className="relative mt-6 shrink-0" ref={menuRef}>
          <div className="flex items-center rounded-full bg-card px-2 py-1.5 shadow-sm">
            <button
              type="button"
              onClick={() => {
                setWorkspaceOpen((o) => !o)
                setNotifOpen(false)
              }}
              className="flex flex-1 items-center gap-2.5 rounded-full px-2 py-1 text-left transition-colors hover:bg-muted/60"
            >
              <WorkspaceMark name={workspace} />
              <span className="text-sm font-medium">{workspace}</span>
              <ChevronDown
                size={14}
                strokeWidth={1.8}
                className={`ml-auto text-muted-foreground transition-transform ${workspaceOpen ? "rotate-180" : ""}`}
              />
            </button>
            <button
              type="button"
              aria-label="Notifications"
              onClick={() => {
                setNotifOpen((o) => !o)
                setWorkspaceOpen(false)
              }}
              className="relative grid h-8 w-8 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
            >
              <Bell size={16} strokeWidth={1.8} />
              {notifications.length > 0 && (
                <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
              )}
            </button>
          </div>

          {/* Workspace popup */}
          {workspaceOpen && (
            <div className="absolute left-0 right-0 top-full z-30 mt-2 rounded-2xl bg-card p-1.5 shadow-lg ring-1 ring-foreground/5">
              {WORKSPACES.map((name) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => {
                    setWorkspace(name)
                    setWorkspaceOpen(false)
                  }}
                  className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-sm transition-colors hover:bg-muted/60 ${
                    name === workspace ? "font-semibold text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <WorkspaceMark name={name} />
                  <span>{name}</span>
                  {name === workspace && (
                    <Check size={14} strokeWidth={2} className="ml-auto text-accent-foreground" />
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Notifications popup */}
          {notifOpen && (
            <div className="absolute left-0 right-0 top-full z-30 mt-2 rounded-2xl bg-card p-1.5 shadow-lg ring-1 ring-foreground/5">
              {notifications.length === 0 ? (
                <p className="px-3 py-2 text-sm text-muted-foreground">No new notifications</p>
              ) : (
                <>
                  {notifications.map((n) => (
                    <div key={n.id} className="px-3 py-2">
                      <p className="text-sm font-medium">{n.title}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{n.time}</p>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      setNotifications([])
                      setNotifOpen(false)
                    }}
                    className="mt-1 w-full rounded-xl px-3 py-2 text-left text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/10"
                  >
                    Mark all read
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {/* Main nav */}
        <nav className="mt-6 flex shrink-0 flex-col gap-1">
          {navItems.map((item) => {
            const Icon = iconMap[item.icon] || Home
            const isActive = pathname === item.href
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 rounded-full px-4 py-2.5 text-sm transition-colors ${
                  isActive
                    ? "bg-card font-semibold text-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-card/70 hover:text-foreground"
                }`}
              >
                <Icon size={18} strokeWidth={1.8} />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Footer nav */}
        <nav className="mt-auto flex shrink-0 flex-col gap-1 pt-6">
          {footerNavItems.map((item) => {
            const Icon = iconMap[item.icon] || Home
            const isActive = pathname === item.href
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 rounded-full px-4 py-2.5 text-sm transition-colors ${
                  isActive
                    ? "bg-card font-semibold text-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-card/70 hover:text-foreground"
                }`}
              >
                <Icon size={18} strokeWidth={1.8} />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </aside>

      <main className="ml-[232px] flex flex-1 flex-col gap-5 p-6">
        {children}
      </main>
    </div>
  )
}
