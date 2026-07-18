"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Container, Reveal, SectionLabel } from "@/components/site/ui"

const BADGES = ["DDS", "Board Certified", "16 Years Experience", "University of Helsinki"]

export function DoctorPreview() {
  return (
    <section className="bg-white pb-20 md:pb-28">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto_1fr] md:gap-12">
          <Reveal>
            <SectionLabel>Your Doctor</SectionLabel>
            <h2 className="mt-4 text-[30px] font-medium tracking-tight md:text-[36px]">
              Dr. Sarah Lindgren
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {BADGES.map((b) => (
                <span
                  key={b}
                  className="rounded-full bg-cream px-3.5 py-1.5 text-[12px] font-medium text-ink"
                >
                  {b}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} y={40}>
            <div className="mx-auto size-56 overflow-hidden rounded-full md:size-64">
              <img
                src="/images/doctor.jpeg"
                alt="Dr. Sarah Lindgren"
                className="size-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-[13px] leading-relaxed text-body md:text-right">
              Dr. Lindgren built her practice around a single belief: that
              nervous patients deserve more time, not less. She has practised
              gentle, unhurried dentistry in Helsinki since 2008.
            </p>
            <div className="mt-6 flex md:justify-end">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink"
              >
                More about the doctor
                <span className="flex size-8 items-center justify-center rounded-full bg-sage transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="size-3.5 text-white" strokeWidth={2.2} />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
