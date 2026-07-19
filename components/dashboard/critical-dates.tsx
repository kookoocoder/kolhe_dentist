"use client"

import { useState } from "react"
import { CalendarDays, Check } from "lucide-react"
import { criticalDates } from "./data"

const extraDates = [
  {
    title: "Onboarding Day",
    date: "Mar 02",
    description: "Member onboarding with Mara Quinn for VoltFit Austin in Austin",
  },
  {
    title: "Safety Inspection",
    date: "Mar 11",
    description: "Annual floor inspection with Devon Park for VoltFit Harbor in Brooklyn",
  },
]

function Description({ text }: { text: string }) {
  const parts = text.split(/( with | for | in )/)
  return parts.map((part, i) => {
    const prev = parts[i - 1]
    const isName = prev === " with " || prev === " for "
    return isName ? (
      <span key={i} className="font-semibold text-foreground">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  })
}

export function CriticalDates() {
  const [doneIds, setDoneIds] = useState(() => new Set<string>())
  const [showAll, setShowAll] = useState(false)

  const items = showAll ? [...criticalDates, ...extraDates] : criticalDates

  const toggleDone = (id: string) =>
    setDoneIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  return (
    <div className="flex h-full flex-col rounded-[20px] bg-card p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold">Upcoming Deadlines</h3>
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          className="text-xs font-medium text-primary transition hover:underline"
        >
          {showAll ? "Show less" : "View all"}
        </button>
      </div>

      <div className="mt-3 space-y-4 overflow-hidden">
        {items.map((item, index) => {
          const id = `${item.title}-${item.date}`
          const isDone = doneIds.has(id)
          return (
            <div key={id} className={index > 0 ? "border-t pt-4" : ""}>
              <button
                type="button"
                aria-pressed={isDone}
                onClick={() => toggleDone(id)}
                className="-mx-2 -my-1 block rounded-lg px-2 py-1 text-left transition hover:bg-muted/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <p
                      className={`text-sm font-semibold transition ${
                        isDone ? "text-muted-foreground line-through" : ""
                      }`}
                    >
                      {item.title}
                    </p>
                    {isDone && <Check className="h-3.5 w-3.5 text-primary" />}
                  </div>
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  <Description text={item.description} />
                  <CalendarDays className="ml-1 inline h-3 w-3 align-[-1.5px] text-muted-foreground" />
                </p>
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
