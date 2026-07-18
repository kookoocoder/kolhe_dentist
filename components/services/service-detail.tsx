"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Container, PillButton, Reveal, SectionLabel } from "@/components/site/ui"
import { PHONE, PHONE_HREF, type Service } from "@/lib/data"

const HERO_IMAGES: Record<string, string> = {
  "teeth-whitening": "/images/whitening-hero.jpg",
}

const SIDEBAR_IMAGES: Record<string, string> = {
  "teeth-whitening": "/images/smile-closeup.jpg",
}

export function ServiceDetail({ service }: { service: Service }) {
  const heroImage = HERO_IMAGES[service.slug] ?? service.image
  const sidebarImage = SIDEBAR_IMAGES[service.slug] ?? service.image

  return (
    <>
      <section className="bg-white pb-16 pt-10 md:pb-24 md:pt-12">
        <Container>
          <Reveal>
            <nav className="flex items-center gap-1.5 text-[12px] text-body">
              <Link href="/" className="hover:text-ink">
                Home
              </Link>
              <ChevronRight className="size-3" />
              <Link href="/services" className="hover:text-ink">
                Services
              </Link>
              <ChevronRight className="size-3" />
              <span className="text-ink">{service.short}</span>
            </nav>
            <SectionLabel className="mt-8">Our Services</SectionLabel>
            <h1 className="mt-4 text-[38px] font-medium leading-[1.05] tracking-[-0.02em] md:text-[56px]">
              {service.short}
            </h1>
            <p className="mt-4 text-[14px] text-body">
              {service.slug === "teeth-whitening"
                ? "Professional, lasting results in a single appointment."
                : service.description.split(". ")[0] + "."}
            </p>
            <div className="mt-7">
              <PillButton href="/book">Book This Service</PillButton>
            </div>
          </Reveal>

          <Reveal delay={0.15} y={40}>
            <div className="mt-10 overflow-hidden rounded-[24px]">
              <img
                src={heroImage}
                alt={service.title}
                className="aspect-[4/3] w-full object-cover md:aspect-[1064/420]"
              />
            </div>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_360px] lg:gap-16">
            <Reveal delay={0.1}>
              <article className="space-y-10">
                <div>
                  <h2 className="text-[22px] font-medium tracking-tight">
                    Overview
                  </h2>
                  <div className="mt-4 space-y-4 text-[14px] leading-relaxed text-body">
                    {service.overview.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-[22px] font-medium tracking-tight">
                    The benefits
                  </h2>
                  <ul className="mt-4 space-y-2.5">
                    {service.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-[14px] leading-relaxed text-body"
                      >
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-body" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-[22px] font-medium tracking-tight">
                    What to expect
                  </h2>
                  <div className="mt-4 space-y-4 text-[14px] leading-relaxed text-body">
                    {service.expect.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-[22px] font-medium tracking-tight">
                    Is it right for me?
                  </h2>
                  <p className="mt-4 text-[14px] leading-relaxed text-body">
                    {service.fit}
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.2}>
              <aside className="lg:sticky lg:top-24">
                <div className="rounded-[24px] bg-cream p-5 md:p-6">
                  <div className="overflow-hidden rounded-[16px]">
                    <img
                      src={sidebarImage}
                      alt=""
                      className="aspect-[3/2] w-full object-cover"
                    />
                  </div>
                  <SectionLabel className="mt-6">Price</SectionLabel>
                  <p className="mt-2 border-b border-line pb-5 text-[28px] font-medium tracking-tight">
                    {service.price}
                  </p>
                  <div className="mt-5">
                    <p className="text-[12px] font-semibold">Insurance</p>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-body">
                      We&rsquo;ll confirm your coverage before anything begins.
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="text-[12px] font-semibold">Hours</p>
                    <p className="mt-1 text-[12.5px] text-body">
                      Mon–Fri 8:00–18:00 · Sat 9:00–14:00
                    </p>
                  </div>
                  <a
                    href={PHONE_HREF}
                    className="mt-5 block text-[15px] font-semibold tracking-tight hover:text-sage-dark"
                  >
                    {PHONE}
                  </a>
                  <PillButton
                    href="/book"
                    className="mt-6 w-full justify-center"
                  >
                    Book Now
                  </PillButton>
                </div>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
