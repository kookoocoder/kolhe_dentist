"use client"

import { GraduationCap, Award, Sparkles } from "lucide-react"
import { Container, Reveal, SectionLabel } from "@/components/site/ui"
import { TEAM } from "@/lib/data"

const CREDENTIALS = [
  {
    icon: GraduationCap,
    title: "Education",
    highlight: "2008",
    items: ["DDS, University of Helsinki School of Dentistry"],
  },
  {
    icon: Award,
    title: "Certifications & Memberships",
    items: [
      "Board Certified, Finnish Dental Association",
      "Member, European Academy of Cosmetic Dentistry",
    ],
  },
  {
    icon: Sparkles,
    title: "Advanced Training",
    items: [
      "Dental Implants",
      "Invisalign & Clear Aligners",
      "Paediatric Dentistry Continuing Education",
    ],
  },
]

export function AboutContent() {
  return (
    <>
      <section className="bg-white pb-16 pt-12 md:pb-24 md:pt-16">
        <Container>
          <Reveal>
            <SectionLabel>About the Practice</SectionLabel>
            <h1 className="mt-5 text-[38px] font-medium leading-[1.05] tracking-[-0.02em] md:text-[56px]">
              Meet Dr. Sarah Lindgren
            </h1>
            <p className="mt-5 max-w-md text-[14px] leading-relaxed text-body">
              General &amp; Cosmetic Dentist · DDS, University of Helsinki ·
              Practising gentle dentistry in Helsinki since 2008.
            </p>
          </Reveal>

          <Reveal delay={0.15} y={40}>
            <div className="relative mt-10 overflow-hidden rounded-[24px]">
              <img
                src="/images/doctor.jpeg"
                alt="Dr. Sarah Lindgren"
                className="aspect-[4/3] w-full object-cover md:aspect-[1064/460]"
              />
              <div className="absolute bottom-5 left-4 flex items-center gap-3 rounded-full bg-white py-2 pl-2 pr-5 shadow-sm md:bottom-7 md:left-6">
                <span className="size-6 rounded-full bg-sage" />
                <span>
                  <span className="block text-[12px] font-semibold leading-tight">
                    Dr. Sarah Lindgren
                  </span>
                  <span className="block text-[11px] leading-tight text-body">
                    DDS · Helsinki
                  </span>
                </span>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white pb-16 md:pb-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-[280px_1fr] md:gap-20">
            <Reveal>
              <SectionLabel>In Her Words</SectionLabel>
            </Reveal>
            <div>
              <Reveal delay={0.05}>
                <blockquote className="text-[22px] font-medium leading-snug tracking-tight md:text-[28px]">
                  &ldquo;My approach is simple: slow down, listen first,
                  explain everything, and never recommend something I
                  wouldn&rsquo;t do for my own family.&rdquo;
                </blockquote>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="mt-8 max-w-xl space-y-5 text-[14px] leading-relaxed text-body">
                  <p>
                    I grew up watching my grandmother avoid the dentist because
                    she was scared. By the time she finally went, the problem
                    was serious, and it didn&rsquo;t have to be. That&rsquo;s
                    the reason I became a dentist, and the reason I practise
                    the way I do.
                  </p>
                  <p>
                    Outside the practice, I coach my daughter&rsquo;s football
                    team on Saturday mornings, which is partly why we keep
                    Saturday hours.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white pb-16 md:pb-24">
        <Container>
          <Reveal>
            <SectionLabel>Education &amp; Credentials</SectionLabel>
            <h2 className="mt-4 text-[30px] font-medium tracking-tight md:text-[36px]">
              Qualified, and always learning
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {CREDENTIALS.map((c, i) => (
              <Reveal key={c.title} delay={0.05 + i * 0.07}>
                <div className="h-full rounded-[18px] bg-cream p-6 md:p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-full bg-sage/40">
                      <c.icon className="size-4 text-sage-dark" strokeWidth={2} />
                    </span>
                    <h3 className="text-[14px] font-semibold">{c.title}</h3>
                  </div>
                  {c.highlight && (
                    <p className="mt-5 text-[30px] font-medium text-sage">
                      {c.highlight}
                    </p>
                  )}
                  <ul className="mt-4 space-y-3">
                    {c.items.map((item) => (
                      <li
                        key={item}
                        className="border-b border-line pb-3 text-[13px] leading-relaxed text-body last:border-b-0 last:pb-0"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white pb-16 md:pb-24">
        <Container>
          <Reveal>
            <SectionLabel>Our Team</SectionLabel>
            <h2 className="mt-4 text-[30px] font-medium tracking-tight md:text-[36px]">
              The people you&rsquo;ll meet
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={0.05 + i * 0.07}>
                <div className="group">
                  <div className="overflow-hidden rounded-[18px]">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="aspect-[4/3.4] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-4 text-[15px] font-semibold">{m.name}</h3>
                  <p className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.1em] text-body/70">
                    {m.role}
                  </p>
                  <p className="mt-3 text-[13px] leading-relaxed text-body">
                    {m.bio}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white pb-14 md:pb-20">
        <Container>
          <Reveal>
            <SectionLabel>Our Practice</SectionLabel>
            <h2 className="mt-4 text-[30px] font-medium tracking-tight md:text-[36px]">
              A space designed for comfort
            </h2>
            <p className="mt-4 max-w-lg text-[14px] leading-relaxed text-body">
              Renovated in 2022 with patient comfort at the centre of every
              decision: natural light, plants, and warm materials, because a
              calm space leads to a calmer appointment.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-5">
            <Reveal delay={0.05} className="md:col-span-3">
              <img
                src="/images/clinic-room.jpg"
                alt="Treatment room"
                className="h-64 w-full rounded-[18px] object-cover md:h-full"
              />
            </Reveal>
            <Reveal delay={0.12} className="md:col-span-2">
              <img
                src="/images/practice-lounge.jpg"
                alt="Waiting lounge"
                className="h-64 w-full rounded-[18px] object-cover md:h-80"
              />
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-2">
              <img
                src="/images/practice-plants.jpg"
                alt="Reception with plants"
                className="h-64 w-full rounded-[18px] object-cover md:h-72"
              />
            </Reveal>
            <Reveal delay={0.17} className="md:col-span-3">
              <img
                src="/images/practice-reception.jpg"
                alt="Front desk"
                className="h-64 w-full rounded-[18px] object-cover md:h-72"
              />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
