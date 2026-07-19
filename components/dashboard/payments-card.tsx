"use client"

import { useState } from "react"
import { Building2, Wrench, Users, Check } from "lucide-react"
import { payments } from "./data"

const iconMap: Record<string, typeof Building2> = {
  building: Building2,
  wrench: Wrench,
  users: Users,
}

const extraPayments = [
  { title: "Liability Insurance", date: "Jun 15", amount: "$2,410.00", icon: "building" },
  { title: "Floor Refinishing", date: "Jun 21", amount: "$1,190.00", icon: "wrench" },
]

export function PaymentsCard() {
  const [paidIds, setPaidIds] = useState(() => new Set<string>())
  const [showAll, setShowAll] = useState(false)

  const items = showAll ? [...payments, ...extraPayments] : payments

  const togglePaid = (id: string) =>
    setPaidIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  return (
    <div className="h-full rounded-[20px] bg-card p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold">Upcoming Payments</h3>
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          className="text-xs font-medium text-primary transition hover:underline"
        >
          {showAll ? "Show less" : "View all"}
        </button>
      </div>
      <ul className="mt-3 divide-y">
        {items.map((payment, index) => {
          const Icon = iconMap[payment.icon] || Building2
          const id = `${payment.title}-${payment.date}-${index}`
          const isPaid = paidIds.has(id)
          return (
            <li key={id} className={`flex items-center gap-3 py-2.5 transition ${isPaid ? "opacity-60" : ""}`}>
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-muted/50">
                <Icon size={16} className="text-muted-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold">{payment.title}</p>
                <p className="text-xs text-muted-foreground">{payment.date}</p>
              </div>
              <p className={`text-sm font-bold ${isPaid ? "line-through" : ""}`}>
                {payment.amount}
              </p>
              <button
                type="button"
                aria-pressed={isPaid}
                onClick={() => togglePaid(id)}
                className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                  isPaid ? "border-primary bg-primary" : "border-border hover:border-primary"
                }`}
              >
                {isPaid && <Check className="h-3.5 w-3.5 text-primary-foreground" />}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
