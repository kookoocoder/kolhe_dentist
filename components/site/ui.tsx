"use client"

import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function PillButton({
  href,
  children,
  variant = "sage",
  className,
  iconBg,
}: {
  href: string
  children: React.ReactNode
  variant?: "sage" | "white" | "outline"
  className?: string
  iconBg?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-full py-2.5 pl-6 pr-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] transition-colors duration-300",
        variant === "sage" && "bg-sage text-ink hover:bg-sage-dark",
        variant === "white" && "border border-line bg-white text-ink hover:bg-cream",
        variant === "outline" && "border border-line bg-transparent text-ink hover:bg-cream",
        className,
      )}
    >
      <span>{children}</span>
      <span
        className={cn(
          "flex size-7 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45",
          iconBg ?? (variant === "sage" ? "bg-white" : "bg-sage"),
        )}
      >
        <ArrowUpRight className="size-3.5 text-ink" strokeWidth={2.2} />
      </span>
    </Link>
  )
}

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p
      className={cn("text-[11px] font-medium uppercase tracking-[0.18em] text-body/70", className)}
    >
      {children}
    </p>
  )
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 32,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px 0px" })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  )
}

export function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1200px] px-5 md:px-10", className)}>{children}</div>
  )
}
