"use client"

import { Container, Reveal, SectionLabel } from "@/components/site/ui"
import { LOCATIONS, PHONE, PHONE_HREF } from "@/lib/data"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function ContactBlock() {
  return (
    <section id="contact" className="bg-white pb-14 md:pb-20">
      <Container>
        <Reveal>
          <SectionLabel>Find Us</SectionLabel>
          <h2 className="mt-4 text-[32px] font-medium tracking-tight md:text-[40px]">
            Our Clinics
          </h2>
          <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-body">
            Visit us at any of our 3 locations across Ahmednagar and Pune.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {LOCATIONS.map((loc, i) => (
            <Reveal key={loc.name} delay={0.05 + i * 0.07}>
              <div className="group relative flex h-full flex-col rounded-[18px] bg-cream p-6 md:p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-black/5">
                <Link
                  href={`/clinics/${loc.slug}`}
                  aria-label={`View ${loc.name}`}
                  className="absolute inset-0 rounded-[18px]"
                />
                <h3 className="relative z-10 text-[15px] font-semibold tracking-tight">
                  {loc.name}
                </h3>
                <p className="relative z-10 mt-3 text-[13px] leading-relaxed text-body">{loc.address}</p>
                <a
                  href={PHONE_HREF}
                  className="relative z-10 mt-4 text-[14px] font-semibold tracking-tight hover:text-sage-dark"
                >
                  {PHONE}
                </a>
                <div className="relative z-10 mt-auto pt-5">
                  <a
                    href={loc.googleMaps}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.08em]"
                  >
                    Get directions
                    <span className="flex size-8 items-center justify-center rounded-full bg-sage transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight className="size-3.5 text-white" strokeWidth={2.2} />
                    </span>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
