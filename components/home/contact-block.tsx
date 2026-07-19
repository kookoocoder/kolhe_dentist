"use client"

import { Container, Reveal, SectionLabel } from "@/components/site/ui"
import { ADDRESS, HOURS, PHONE, PHONE_HREF } from "@/lib/data"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"

function isOpenToday() {
  const now = new Date()
  const day = now.getDay() // 0 Sunday
  return day !== 0
}

export function ContactBlock() {
  const openToday = isOpenToday()
  const todayIndex = (new Date().getDay() + 6) % 7 // HOURS starts Monday

  return (
    <section id="contact" className="bg-white pb-14 md:pb-20">
      <Container>
        <Reveal>
          <SectionLabel>Find Us</SectionLabel>
          <h2 className="mt-4 text-[32px] font-medium tracking-tight md:text-[40px]">
            We&rsquo;re easy to reach
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Reveal delay={0.05}>
            <div className="h-full rounded-[18px] bg-cream p-6 md:p-7">
              <div className="flex items-center justify-between">
                <h3 className="text-[15px] font-semibold">Opening Hours</h3>
                {openToday && (
                  <span className="rounded-full bg-sage px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-ink">
                    Open today
                  </span>
                )}
              </div>
              <ul className="mt-4">
                {HOURS.map((h, i) => (
                  <li
                    key={h.day}
                    className={cn(
                      "flex items-center justify-between border-b border-line py-3 text-[13px] last:border-b-0",
                      i === todayIndex ? "text-ink" : "text-body",
                    )}
                  >
                    <span>{h.day}</span>
                    <span className={cn(i === todayIndex && "font-semibold")}>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex h-full flex-col overflow-hidden rounded-[18px] border border-line bg-white">
              <img
                src="/images/clinic-room.jpg"
                alt="Our treatment room"
                className="h-48 w-full object-cover md:h-56"
              />
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <h3 className="text-[15px] font-semibold">Northgate Family Dental</h3>
                <p className="mt-2.5 max-w-xs text-[13px] leading-relaxed text-body">
                  {ADDRESS} · Free parking in the rear car park, 2 min from Kallio metro.
                </p>
                <a
                  href={PHONE_HREF}
                  className="mt-4 text-[15px] font-semibold tracking-tight hover:text-sage-dark"
                >
                  {PHONE}
                </a>
                <a
                  href="https://maps.google.com/?q=14+Maple+Street+Helsinki"
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-5 inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.08em]"
                >
                  Get directions
                  <span className="flex size-8 items-center justify-center rounded-full bg-sage transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="size-3.5 text-white" strokeWidth={2.2} />
                  </span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
