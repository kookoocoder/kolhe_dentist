"use client"

import { Container, Reveal, SectionLabel } from "@/components/site/ui"

const STATS = [
  { title: "Since 2008", text: "Caring for Helsinki families" },
  { title: "4.9 rating", text: "Averaged across patient reviews" },
  { title: "Same week", text: "Appointments, Saturdays included" },
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
              We believe going to the dentist{" "}
              <span className="text-sage-dark">
                shouldn&rsquo;t feel like a chore.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-[13px] leading-relaxed text-body">
              We built our practice around one idea: care that feels human.
              Gentle, unhurried, and focused entirely on you. No rushing, no
              jargon, no surprises.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <div className="mt-14 grid divide-y divide-line border-t border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {STATS.map((s, i) => (
              <div
                key={s.title}
                className="py-6 sm:px-8 sm:first:pl-2"
                style={{ paddingLeft: i === 0 ? undefined : undefined }}
              >
                <h3 className="text-[19px] font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-[12px] text-body">{s.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
