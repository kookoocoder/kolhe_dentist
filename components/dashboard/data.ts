export interface NavItem {
  label: string
  icon: string
  href: string
}

export const navItems: NavItem[] = [
  { label: "Overview", icon: "home", href: "/dashboard" },
  { label: "Appointments", icon: "calendar", href: "/dashboard/appointments" },
  { label: "Inquiries", icon: "message-square", href: "/dashboard/inquiries" },
]

export const footerNavItems: NavItem[] = [
  { label: "Settings", icon: "settings", href: "/dashboard/settings" },
]
