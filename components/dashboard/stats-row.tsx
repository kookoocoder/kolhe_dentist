"use client"

import { useState } from "react"
import { TrendingDown, TrendingUp } from "lucide-react"
import { stats } from "./data"
import { cn } from "@/lib/utils"

export function StatsRow() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-5 gap-5">
      {stats.map((stat, index) => {
        const isDown = stat.trend === "down"
        const TrendIcon = isDown ? TrendingDown : TrendingUp
        return (
          <div
            key={stat.label}
            onClick={() => setSelected(index)}
            className={cn(
              "cursor-pointer rounded-[20px] bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md",
              selected === index && "ring-2 ring-primary/30"
            )}
          >
            <p className="text-xs text-muted-foreground">{stat.label}</p>
            <p className="mt-2 text-[28px] font-bold leading-none tracking-tight text-foreground">
              {stat.value}
              {stat.unit && (
                <span className="ml-1 align-super text-sm font-medium text-muted-foreground">
                  {stat.unit}
                </span>
              )}
            </p>
            <div className="mt-3">
              <span
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold",
                  isDown
                    ? "bg-destructive/10 text-destructive"
                    : "bg-success/10 text-success"
                )}
              >
                <TrendIcon size={12} />
                {stat.change}
              </span>
              <p className="mt-1 text-xs text-muted-foreground">vs last month</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
