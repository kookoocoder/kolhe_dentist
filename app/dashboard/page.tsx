"use client"

import { useQuery } from "convex/react"
import { Calendar, CheckCircle2, Clock, MessageSquare } from "lucide-react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { api } from "../../convex/_generated/api"

const STATUS_COLORS = {
  pending: "#f59e0b",
  confirmed: "#22c55e",
  completed: "#3b82f6",
  cancelled: "#9ca3af",
}

export default function DashboardPage() {
  const apptCounts = useQuery(api.appointments.counts)
  const inqCounts = useQuery(api.inquiries.counts)
  const monthlyData = useQuery(api.appointments.monthly)
  const recentAppointments = useQuery(api.appointments.list)

  const stats = [
    {
      label: "Total Appointments",
      value: apptCounts?.total ?? "—",
      icon: Calendar,
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      label: "Pending",
      value: apptCounts?.pending ?? "—",
      icon: Clock,
      color: "text-amber-500",
      bg: "bg-amber-50",
    },
    {
      label: "Confirmed",
      value: apptCounts?.confirmed ?? "—",
      icon: CheckCircle2,
      color: "text-green-500",
      bg: "bg-green-50",
    },
    {
      label: "Total Inquiries",
      value: inqCounts?.total ?? "—",
      icon: MessageSquare,
      color: "text-purple-500",
      bg: "bg-purple-50",
    },
  ]

  const pieData = apptCounts
    ? [
        { name: "Pending", value: apptCounts.pending },
        { name: "Confirmed", value: apptCounts.confirmed },
        { name: "Completed", value: apptCounts.completed },
        { name: "Cancelled", value: apptCounts.cancelled },
      ].filter((d) => d.value > 0)
    : []

  const recent = recentAppointments?.slice(0, 5) ?? []

  return (
    <>
      <h1 className="text-xl font-bold">Overview</h1>

      <div className="grid grid-cols-4 gap-5">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-[20px] bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground">{stat.label}</p>
              <div className={`flex h-8 w-8 items-center justify-center rounded-full ${stat.bg}`}>
                <stat.icon size={16} className={stat.color} />
              </div>
            </div>
            <p className="mt-3 text-[28px] font-bold leading-none tracking-tight">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-8 rounded-[20px] bg-card p-5 shadow-sm">
          <h3 className="text-base font-semibold">Appointments (Last 6 Months)</h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Monthly appointment bookings from the public form.
          </p>
          <div className="mt-4 h-[250px]">
            {monthlyData ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="month" tick={{ fontSize: 12, fill: "var(--muted-foreground)" }} />
                  <YAxis
                    tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
                    allowDecimals={false}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "12px",
                      border: "1px solid var(--border)",
                      background: "var(--card)",
                      fontSize: "13px",
                    }}
                  />
                  <Bar dataKey="count" fill="var(--primary)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                Loading...
              </div>
            )}
          </div>
        </div>

        <div className="col-span-4 rounded-[20px] bg-card p-5 shadow-sm">
          <h3 className="text-base font-semibold">Status Breakdown</h3>
          <p className="mt-1 text-xs text-muted-foreground">All appointments by current status.</p>
          <div className="mt-4 h-[250px]">
            {pieData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {pieData.map((entry) => (
                      <Cell
                        key={entry.name}
                        fill={STATUS_COLORS[entry.name.toLowerCase() as keyof typeof STATUS_COLORS]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      borderRadius: "12px",
                      border: "1px solid var(--border)",
                      background: "var(--card)",
                      fontSize: "13px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                No data yet
              </div>
            )}
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              {Object.entries(STATUS_COLORS).map(([status, color]) => (
                <div key={status} className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: color }} />
                  <span className="text-xs capitalize text-muted-foreground">{status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[20px] bg-card p-5 shadow-sm">
        <h3 className="text-base font-semibold">Recent Appointments</h3>
        <p className="mt-1 text-xs text-muted-foreground">Latest 5 appointment requests.</p>

        <div className="mt-4">
          <div className="grid grid-cols-12 gap-4 border-b border-border pb-3">
            <p className="col-span-3 text-xs font-medium text-muted-foreground">Patient</p>
            <p className="col-span-2 text-xs font-medium text-muted-foreground">Reason</p>
            <p className="col-span-2 text-xs font-medium text-muted-foreground">Date</p>
            <p className="col-span-2 text-xs font-medium text-muted-foreground">Time</p>
            <p className="col-span-3 text-xs font-medium text-muted-foreground">Status</p>
          </div>

          {recent.length === 0 ? (
            <p className="py-12 text-center text-sm text-muted-foreground">
              No appointments yet. Bookings from the website will appear here.
            </p>
          ) : (
            <ul className="divide-y divide-border">
              {recent.map((appt) => (
                <li
                  key={appt._id}
                  className="grid grid-cols-12 items-center gap-4 -mx-2 rounded-xl px-2 py-3"
                >
                  <p className="col-span-3 truncate text-sm font-medium">{appt.name}</p>
                  <p className="col-span-2 truncate text-sm text-muted-foreground">{appt.reason}</p>
                  <p className="col-span-2 text-sm text-muted-foreground">{appt.preferredDate}</p>
                  <p className="col-span-2 text-sm text-muted-foreground">{appt.preferredTime}</p>
                  <div className="col-span-3">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        appt.status === "confirmed"
                          ? "bg-green-100 text-green-700"
                          : appt.status === "completed"
                            ? "bg-blue-100 text-blue-700"
                            : appt.status === "cancelled"
                              ? "bg-gray-100 text-gray-600"
                              : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {appt.status}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}
