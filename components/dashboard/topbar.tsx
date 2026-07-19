"use client"

import { useState } from "react"
import { LayoutGrid } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

const CLIENT_OPTIONS = ["All Clubs", "VoltFit Midtown", "VoltFit Harbor", "VoltFit Chelsea", "VoltFit Brooklyn"]
const CATEGORY_OPTIONS = ["All Categories", "Strength", "Cardio", "Yoga", "CrossFit"]
const MODULES = ["Stats", "Operating Spend", "Club Map", "Upcoming Deadlines", "Top Revenue Clubs", "Payments"]

export function Topbar() {
  const [client, setClient] = useState("All Clubs")
  const [category, setCategory] = useState("All Categories")
  const [modules, setModules] = useState(() =>
    Object.fromEntries(MODULES.map((name) => [name, true]))
  )

  return (
    <header>
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Select value={client} onValueChange={(v) => v && setClient(v)}>
            <SelectTrigger className="w-fit min-w-[140px] rounded-full bg-card shadow-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {CLIENT_OPTIONS.map((opt) => (
                <SelectItem key={opt} value={opt}>{opt}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={category} onValueChange={(v) => v && setCategory(v)}>
            <SelectTrigger className="w-fit min-w-[140px] rounded-full bg-card shadow-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {CATEGORY_OPTIONS.map((opt) => (
                <SelectItem key={opt} value={opt}>{opt}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Popover>
          <PopoverTrigger render={<Button variant="outline" className="rounded-full bg-card shadow-sm" />}>
            <LayoutGrid size={16} />
            Edit Modules
          </PopoverTrigger>
          <PopoverContent align="end" className="w-64">
            <div className="flex flex-col gap-3">
              {MODULES.map((name) => (
                <div key={name} className="flex items-center justify-between">
                  <span className="text-sm">{name}</span>
                  <Switch
                    checked={modules[name]}
                    onCheckedChange={(next) =>
                      setModules((m) => ({ ...m, [name]: next }))
                    }
                  />
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  )
}
