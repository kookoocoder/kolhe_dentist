export interface Stat {
  label: string
  value: string
  unit?: string
  change: string
  trend: "up" | "down"
}

export interface ExpenseSummary {
  period: string
  amount: string
  change: string
  trend: string
}

export interface ExpenseChartItem {
  month: string
  value: number
}

export interface MapPin {
  x: number
  y: number
  type: "leased" | "owned"
}

export interface Property {
  name: string
  address: string
  beds: number
  baths: number
  image: string
}

export interface CriticalDate {
  title: string
  date: string
  description: string
}

export interface ExpensiveSite {
  name: string
  address: string
  price: string
  image: string
}

export interface Payment {
  title: string
  date: string
  amount: string
  icon: string
}

export interface NavItem {
  label: string
  icon: string
  href: string
}

export const stats: Stat[] = [
  { label: "Active Clubs", value: "48", change: "2.4%", trend: "up" },
  { label: "Monthly OpEx", value: "$840 K", change: "1.8%", trend: "down" },
  { label: "Active Members", value: "28,640", change: "3.1%", trend: "up" },
  { label: "Open Capacity", value: "4,120", unit: "spots", change: "0.9%", trend: "down" },
  { label: "Expiring Plans", value: "312", change: "4.2%", trend: "down" },
]

export const expenseSummary: ExpenseSummary[] = [
  { period: "Last 5 Year", amount: "18.4 M", change: "4.1%", trend: "up" },
  { period: "Last 10 Year", amount: "41.2 M", change: "2.6%", trend: "up" },
  { period: "All Time", amount: "96.7 M", change: "5.4%", trend: "up" },
]

export const expenseChart: ExpenseChartItem[] = [
  { month: "Jan", value: 840 },
  { month: "Feb", value: 1180 },
  { month: "Mar", value: 500 },
  { month: "Apr", value: 1120 },
  { month: "May", value: 900 },
  { month: "Jun", value: 820 },
]

export const mapPins: MapPin[] = [
  { x: 18, y: 48, type: "leased" },
  { x: 30, y: 60, type: "leased" },
  { x: 52, y: 52, type: "leased" },
  { x: 64, y: 62, type: "leased" },
  { x: 74, y: 40, type: "owned" },
  { x: 82, y: 54, type: "owned" },
  { x: 70, y: 64, type: "owned" },
]

export const selectedProperty: Property = {
  name: "VoltFit Midtown",
  address: "412 Lexington Ave, 10017",
  beds: 64,
  baths: 18,
  image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80",
}

export const criticalDates: CriticalDate[] = [
  {
    title: "Trainer Review",
    date: "Feb 19",
    description: "Quarterly trainer review with Oguz B for VoltFit Harbor in Brooklyn",
  },
  {
    title: "Plan Renewal",
    date: "Feb 19",
    description: "Corporate plan renewal with Archie Edward for VoltFit Chelsea in New York",
  },
]

export const expensiveSites: ExpensiveSite[] = [
  {
    name: "VoltFit Midtown",
    address: "Lexington Ave, 10017",
    price: "$2.4M",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=100&q=80",
  },
  {
    name: "VoltFit Harbor",
    address: "Pier 17, 10038",
    price: "$1.9M",
    image: "https://images.unsplash.com/photo-1571902942914-6c0fad3aba85?w=100&q=80",
  },
  {
    name: "VoltFit Chelsea",
    address: "W 23rd Street, 10011",
    price: "$1.6M",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=100&q=80",
  },
  {
    name: "VoltFit Brooklyn",
    address: "Flatbush Ave, 11217",
    price: "$1.3M",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=100&q=80",
  },
]

export const payments: Payment[] = [
  { title: "Equipment Lease", date: "May 30", amount: "$6,828.59", icon: "building" },
  { title: "Facility Repair", date: "Feb 19", amount: "$6,828.59", icon: "wrench" },
  { title: "Trainer Payroll", date: "Apr 30", amount: "$6,828.59", icon: "users" },
  { title: "Equipment Lease", date: "May 30", amount: "$6,828.59", icon: "building" },
]

export const navItems: NavItem[] = [
  { label: "Dashboard", icon: "home", href: "/dashboard" },
  { label: "Documents", icon: "file-text", href: "/dashboard/documents" },
  { label: "Memberships", icon: "briefcase", href: "/dashboard/memberships" },
  { label: "Studios", icon: "building", href: "/dashboard/studios" },
  { label: "Partners", icon: "handshake", href: "/dashboard/partners" },
]

export const footerNavItems: NavItem[] = [
  { label: "Support", icon: "headphones", href: "/dashboard/support" },
  { label: "Settings", icon: "settings", href: "/dashboard/settings" },
  { label: "Team", icon: "users", href: "/dashboard/team" },
]
