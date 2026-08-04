export interface NavItem {
  label: string
  icon: string
  href: string
}

export const navItems: NavItem[] = [
  { label: "Overview", icon: "home", href: "/dashboard" },
  { label: "Appointments", icon: "calendar", href: "/dashboard/appointments" },
]
