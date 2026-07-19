"use client"

import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Container, Reveal, SectionLabel } from "@/components/site/ui"
import { cn } from "@/lib/utils"

function ImageCard({
  href,
  title,
  image,
  className,
  arrowSage,
}: {
  href: string
  title: string
  image: string
  className?: string
  arrowSage?: boolean
}) {
  return (
    <Link
      href={href}
      className={cn("group relative block overflow-hidden rounded-[18px]", className)}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-transparent" />
      <span className="absolute left-5 top-4 text-[14px] font-medium text-white">{title}</span>
      <span
        className={cn(
          "absolute bottom-4 right-4 flex size-8 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5",
          arrowSage ? "bg-sage" : "bg-white",
        )}
      >
        <ArrowRight
          className={cn("size-3.5", arrowSage ? "text-white" : "text-ink")}
          strokeWidth={2}
        />
      </span>
    </Link>
  )
}

export function ServicesCarousel() {
  return (
    <section className="bg-white pb-20 md:pb-28">
      <Container>
        <Reveal>
          <SectionLabel>What we offer</SectionLabel>
          <h2 className="mt-4 text-[32px] font-medium tracking-tight md:text-[40px]">
            General Care <span className="text-body/40">/ Cosmetic</span>
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Reveal delay={0.05}>
            <ImageCard
              href="/services/general-check-up"
              title="General Check-up"
              image="/images/service-checkup.jpg"
              className="h-60"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ImageCard
              href="/services/teeth-whitening"
              title="Teeth Whitening"
              image="/images/service-whitening.jpg"
              className="h-60"
              arrowSage
            />
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid h-60 grid-rows-2 gap-4">
              <ImageCard
                href="/services/digital-x-rays"
                title="Digital X-Rays"
                image="/images/service-xray.jpg"
              />
              <ImageCard
                href="/services/dental-fillings"
                title="Dental Fillings"
                image="/images/clinic-room.jpg"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Link
              href="/services/emergency-care"
              className="group relative block h-32 rounded-[18px] bg-ink p-5 transition-colors duration-300 hover:bg-black"
            >
              <span className="block text-[14px] font-medium text-white">Emergency Care</span>
              <span className="mt-1 block text-[12px] text-white/50">
                Same-day slots, call us first
              </span>
              <span className="absolute bottom-4 right-4 flex size-8 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight className="size-3.5 text-ink" strokeWidth={2} />
              </span>
            </Link>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              href="/services/paediatric-care"
              className="group relative block h-32 rounded-[18px] bg-sage-light p-5 transition-colors duration-300 hover:bg-sage"
            >
              <span className="block text-[14px] font-medium text-ink">Paediatric Care</span>
              <span className="mt-1 block text-[12px] text-ink/60">
                Gentle dentistry from age 3
              </span>
              <span className="absolute bottom-4 right-4 flex size-8 items-center justify-center rounded-full bg-sage-dark transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight className="size-3.5 text-white" strokeWidth={2} />
              </span>
            </Link>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              href="/services"
              className="group relative block h-32 rounded-[18px] border border-line bg-white p-5 transition-colors duration-300 hover:bg-cream"
            >
              <span className="block text-[14px] font-medium text-ink">See all treatments</span>
              <span className="mt-1 block text-[12px] text-body">8 services available</span>
              <span className="absolute bottom-4 right-4 flex size-8 items-center justify-center rounded-full bg-sage transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="size-3.5 text-white" strokeWidth={2} />
              </span>
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
