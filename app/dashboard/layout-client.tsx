"use client"

import { footerNavItems, navItems } from "@/components/dashboard/data"
import { clearAuth, isAuthenticated } from "@/lib/auth"
import { Bell, Calendar, Home, LogOut, MessageSquare, Settings, User } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"

const iconMap: Record<string, typeof Home> = {
  home: Home,
  calendar: Calendar,
  "message-square": MessageSquare,
  settings: Settings,
}

export function DashboardLayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [ready, setReady] = useState(false)
  const [notifOpen, setNotifOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (pathname === "/dashboard/login") {
      setReady(true)
      return
    }
    if (!isAuthenticated()) {
      router.replace("/dashboard/login")
    } else {
      setReady(true)
    }
  }, [pathname, router])

  useEffect(() => {
    if (!notifOpen) return
    const handleMouseDown = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setNotifOpen(false)
      }
    }
    document.addEventListener("mousedown", handleMouseDown)
    return () => document.removeEventListener("mousedown", handleMouseDown)
  }, [notifOpen])

  if (!ready) return null

  if (pathname === "/dashboard/login") {
    return <>{children}</>
  }

  const handleLogout = () => {
    clearAuth()
    router.replace("/dashboard/login")
  }

  return (
    <div className="flex min-h-screen">
      <aside className="fixed left-0 top-0 z-20 flex h-screen w-[232px] flex-col overflow-y-auto bg-sidebar p-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted">
          <User size={18} className="text-muted-foreground" strokeWidth={1.8} />
        </div>

        <div className="relative mt-6 shrink-0" ref={menuRef}>
          <div className="flex items-center rounded-full bg-card px-2 py-1.5 shadow-sm">
            <div className="flex flex-1 items-center gap-2.5 rounded-full px-2 py-1">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
                D
              </span>
              <span className="text-sm font-medium">Kolhe Dentist</span>
            </div>
            <button
              type="button"
              aria-label="Notifications"
              onClick={() => setNotifOpen((o) => !o)}
              className="relative grid h-8 w-8 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
            >
              <Bell size={16} strokeWidth={1.8} />
            </button>
          </div>

          {notifOpen && (
            <div className="absolute left-0 right-0 top-full z-30 mt-2 rounded-2xl bg-card p-1.5 shadow-lg ring-1 ring-foreground/5">
              <p className="px-3 py-2 text-sm text-muted-foreground">No new notifications</p>
            </div>
          )}
        </div>

        <nav className="mt-6 flex shrink-0 flex-col gap-1">
          {navItems.map((item) => {
            const Icon = iconMap[item.icon] || Home
            const isActive =
              item.href === "/dashboard"
                ? pathname === "/dashboard"
                : pathname.startsWith(item.href)
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
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-3 rounded-full px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-card/70 hover:text-foreground"
          >
            <LogOut size={18} strokeWidth={1.8} />
            <span>Log Out</span>
          </button>
        </nav>
      </aside>

      <main className="ml-[232px] flex flex-1 flex-col gap-5 p-6">{children}</main>
    </div>
  )
}
