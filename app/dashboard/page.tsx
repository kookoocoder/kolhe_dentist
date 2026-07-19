"use client"

import dynamic from "next/dynamic"
import { Topbar } from "@/components/dashboard/topbar"
import { StatsRow } from "@/components/dashboard/stats-row"
import { ExpenseChart } from "@/components/dashboard/expense-chart"
import { EstateMap } from "@/components/dashboard/estate-map"
import { CriticalDates } from "@/components/dashboard/critical-dates"
import { ExpensiveSites } from "@/components/dashboard/expensive-sites"
import { PaymentsCard } from "@/components/dashboard/payments-card"

export default function DashboardPage() {
  return (
    <>
      <Topbar />
      <StatsRow />
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-7">
          <ExpenseChart />
        </div>
        <div className="col-span-5">
          <EstateMap />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-3">
          <CriticalDates />
        </div>
        <div className="col-span-4">
          <ExpensiveSites />
        </div>
        <div className="col-span-5">
          <PaymentsCard />
        </div>
      </div>
    </>
  )
}
