"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Container, Reveal } from "@/components/site/ui"
import { WHY_US } from "@/lib/data"
import { cn } from "@/lib/utils"

function Card({
  item,
  className,
  delay,
}: {
  item: (typeof WHY_US)[number]
  className?: string
  delay: number
}) {
  return (
    <Reveal delay={delay} className={className}>
      <div className="rounded-[18px] bg-cream p-6 transition-colors duration-300 hover:bg-cream-dark">
        <div className="flex items-start justify-between">
          <h3 className="text-[15px] font-semibold tracking-tight">{item.title}</h3>
          <span className="rounded-md bg-white px-1.5 py-0.5 text-[10px] font-medium text-body">
            {item.n}
          </span>
        </div>
        <p className="mt-3 max-w-[210px] text-[13px] leading-relaxed text-body">{item.text}</p>
      </div>
    </Reveal>
  )
}

export function WhyUs() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px 0px" })

  return (
    <section className="bg-white pb-20 md:pb-28">
      <Container>
        <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr] md:gap-10">
          <div className="space-y-6">
            <Card item={WHY_US[0]} delay={0.05} />
            <Card item={WHY_US[1]} delay={0.15} className="md:translate-x-4" />
          </div>

          <div
            ref={ref}
            className="relative mx-auto flex size-56 items-center justify-center md:size-72"
          >
            <motion.span
              className="absolute inset-0 rounded-full border border-line"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : undefined}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            <motion.span
              className="absolute inset-6 rounded-full border border-line md:inset-8"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : undefined}
              transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
            />
            <motion.h2
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : undefined}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[28px] font-medium tracking-tight md:text-[32px]"
            >
              Why us?
            </motion.h2>
          </div>

          <div className="space-y-6">
            <Card item={WHY_US[2]} delay={0.1} className="md:-translate-x-4" />
            <Card item={WHY_US[3]} delay={0.2} />
          </div>
        </div>
      </Container>
    </section>
  )
}
