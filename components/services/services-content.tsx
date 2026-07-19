"use client"

import Link from "next/link"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, Check, Plus } from "lucide-react"
import { Container, Reveal, SectionLabel } from "@/components/site/ui"
import { FAQS, SERVICES } from "@/lib/data"
import { cn } from "@/lib/utils"

const FIRST_VISIT = [
  {
    n: "01",
    title: "We listen",
    text: "Your first appointment is mostly conversation. We want to understand your history and concerns before we examine anything.",
  },
  {
    n: "02",
    title: "We examine",
    text: "A gentle, thorough check-up. We explain what we find in plain language, not clinical shorthand, as we go.",
  },
  {
    n: "03",
    title: "We recommend, never push",
    text: "You'll leave with a clear picture of your options and a written plan. No pressure, no upsells, no rush.",
  },
]

const INSURANCE = [
  "Most major insurance accepted",
  "Direct billing to your insurer available",
  "Kela reimbursement supported",
  "Payment plans for treatments over €500",
  "Cash, card, and contactless accepted",
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-line">
      <button
        className="flex w-full items-center justify-between py-5 text-left"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="text-[15px] font-medium">{q}</span>
        <span
          className={cn(
            "flex size-8 shrink-0 items-center justify-center rounded-full bg-cream transition-transform duration-300",
            open && "rotate-45",
          )}
        >
          <Plus className="size-4" strokeWidth={2} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-5 text-[13px] leading-relaxed text-body">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function ServicesContent() {
  return (
    <>
      <section className="bg-white pb-16 pt-12 md:pb-24 md:pt-16">
        <Container>
          <Reveal>
            <SectionLabel>What We Offer</SectionLabel>
            <h1 className="mt-5 text-[38px] font-medium leading-[1.05] tracking-[-0.02em] md:text-[56px]">
              Care for every stage of life
            </h1>
            <p className="mt-5 max-w-md text-[14px] leading-relaxed text-body">
              Comprehensive, gentle dentistry, from routine check-ups to cosmetic treatments.
              Transparent pricing, no surprises.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={0.04 * (i % 4)}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-line bg-white transition-shadow duration-300 hover:shadow-lg hover:shadow-black/5"
                >
                  <div className="overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="aspect-[4/2.8] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-[15px] font-semibold leading-snug">{s.title}</h3>
                    <p className="mt-2.5 line-clamp-4 text-[12.5px] leading-relaxed text-body">
                      {s.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-5">
                      <span className="text-[13px] font-semibold">{s.price}</span>
                      <span className="flex size-8 items-center justify-center rounded-full bg-cream transition-colors duration-300 group-hover:bg-sage">
                        <ArrowRight
                          className="size-3.5 transition-colors group-hover:text-white"
                          strokeWidth={2}
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white pb-16 md:pb-24">
        <Container>
          <Reveal>
            <SectionLabel>Your First Visit</SectionLabel>
            <h2 className="mt-4 text-[30px] font-medium tracking-tight md:text-[36px]">
              We&rsquo;ll take good care of you from the start
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {FIRST_VISIT.map((step, i) => (
              <Reveal key={step.n} delay={0.05 + i * 0.08}>
                <div className="h-full rounded-[18px] bg-cream p-6 md:p-7">
                  <span className="text-[13px] font-semibold text-sage-dark">{step.n}</span>
                  <h3 className="mt-3 text-[16px] font-semibold">{step.title}</h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-body">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white pb-16 md:pb-24">
        <Container>
          <div className="grid gap-10 rounded-[24px] bg-cream p-7 md:grid-cols-2 md:p-12">
            <Reveal>
              <SectionLabel>Insurance &amp; Payment</SectionLabel>
              <h2 className="mt-4 text-[28px] font-medium tracking-tight md:text-[34px]">
                No surprises. Ever.
              </h2>
              <ul className="mt-7 space-y-3.5">
                {INSURANCE.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex size-6 items-center justify-center rounded-full bg-sage">
                      <Check className="size-3 text-white" strokeWidth={2.5} />
                    </span>
                    <span className="text-[13.5px]">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex h-full flex-col justify-center rounded-[18px] bg-white p-7 md:p-9">
                <SectionLabel>Our promise</SectionLabel>
                <p className="mt-4 text-[15px] leading-relaxed">
                  We provide a written cost estimate before any treatment begins. You approve it,
                  then we proceed. We will never start work without your agreement on cost.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-white pb-14 md:pb-20">
        <Container>
          <Reveal>
            <SectionLabel>Questions</SectionLabel>
            <h2 className="mt-4 text-[30px] font-medium tracking-tight md:text-[36px]">
              Things patients often ask
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 border-t border-line">
              {FAQS.map((f) => (
                <FaqItem key={f.q} q={f.q} a={f.a} />
              ))}
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
