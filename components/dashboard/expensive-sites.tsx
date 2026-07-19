"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import { expensiveSites } from "./data"

export function ExpensiveSites() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [favoriteIds, setFavoriteIds] = useState(() => new Set<string>())

  const toggleFavorite = (id: string) =>
    setFavoriteIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  return (
    <div className="rounded-[20px] bg-card p-5 shadow-sm">
      <h3 className="text-base font-semibold">Top Revenue Clubs</h3>

      <ul className="mt-3 divide-y">
        {expensiveSites.map((site, index) => {
          const id = `${site.name}-${site.address}-${index}`
          const isSelected = selectedId === id
          const isFavorite = favoriteIds.has(id)
          return (
            <li
              key={id}
              role="button"
              tabIndex={0}
              aria-pressed={isSelected}
              onClick={() => setSelectedId((prev) => (prev === id ? null : id))}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  setSelectedId((prev) => (prev === id ? null : id))
                }
              }}
              className={`-mx-2 flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2.5 transition hover:bg-muted/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                isSelected ? "ring-1 ring-primary/30" : ""
              }`}
            >
              <img
                src={site.image}
                alt={site.name}
                className="h-11 w-11 rounded-lg object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">{site.name}</p>
                <p className="truncate text-xs text-muted-foreground">{site.address}</p>
              </div>
              <p className="shrink-0 text-right text-sm font-bold">{site.price}</p>
              <button
                type="button"
                aria-pressed={isFavorite}
                onClick={(e) => {
                  e.stopPropagation()
                  toggleFavorite(id)
                }}
                className="grid h-7 w-7 shrink-0 place-items-center rounded-full transition hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                <Heart
                  className={`h-4 w-4 transition ${
                    isFavorite ? "fill-current text-primary" : "text-muted-foreground"
                  }`}
                />
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
