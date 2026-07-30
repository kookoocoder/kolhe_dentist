"use client"

import { Container, Reveal, SectionLabel } from "@/components/site/ui"

const STATS = [
  { title: "3 Centres", text: "Ahmednagar & Pune" },
  { title: "1,000+", text: "Successful full mouth rehabilitations" },
  { title: "72 hrs", text: "Full mouth rehabilitation with basal implants", highlight: true },
]

export function Philosophy() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionLabel>Our Philosophy</SectionLabel>
        </Reveal>
        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_280px] md:gap-16">
          <Reveal delay={0.05}>
            <h2 className="max-w-xl text-[26px] font-medium leading-snug tracking-tight md:text-[30px]">
              We believe everyone deserves a healthy,
              <span className="text-sage-dark"> confident smile.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-[13px] leading-relaxed text-body">
              Combining clinical expertise, compassion, and continuous learning to deliver exceptional
              dental care with a personal touch. We invest in the latest technology so you receive
              treatments that are effective, comfortable, and built to last.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <div className="mt-14 grid divide-y divide-line border-t border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {STATS.map((s, i) => (
              <div
                key={s.title}
                className={`py-6 sm:px-8 sm:first:pl-2 ${s.highlight ? "rounded-xl bg-cream px-5 sm:my-3 sm:py-3" : ""}`}
                style={{ paddingLeft: i === 0 ? undefined : undefined }}
              >
                <h3 className={`text-[19px] font-semibold tracking-tight ${s.highlight ? "text-sage-dark" : ""}`}>{s.title}</h3>
                <p className="mt-1.5 text-[12px] text-body">{s.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
