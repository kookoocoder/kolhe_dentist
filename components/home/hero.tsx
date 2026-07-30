"use client"


import { Container } from "@/components/site/ui"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, ArrowUpRight, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
}

const HERO_SLIDES = [
  { src: "/images/hero.png", alt: "Doctors at Dr. Kolhe's Dental Clinic" },
  { src: "/images/Carusol1.png", alt: "Dr. Kunal Kolhe" },
  { src: "/images/Carusol3.png", alt: "Dr. Kirti Kolhe" },
]

export function HomeHero() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % HERO_SLIDES.length)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="bg-white pb-6 pt-12 md:pt-16">
      <Container>
        <div className="flex flex-col items-center text-center">
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-medium uppercase tracking-[0.18em] text-body/70"
          >
            Laser · Implant · Cosmetic · Family Dentistry
          </motion.p>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-5 text-[44px] font-medium leading-[1.04] tracking-[-0.02em] md:text-[64px]"
          >
            दाँत हैं…
            <br />
            तो बात है…
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-5 max-w-md text-[14px] leading-relaxed text-body"
          >
            Expert dental care across Ahmednagar &amp; Pune. Advanced laser dentistry, implants, and cosmetic treatments by Dr. Kunal Kolhe and Dr. Kirti Kolhe.
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href="/book"
              className="group appointment-attention flex items-center gap-2.5 rounded-full bg-sage py-2.5 pl-6 pr-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink transition-[background-color,transform] duration-300 hover:bg-sage-dark  active:scale-[0.96]"
            >
              Book Appointment
              <span className="flex size-7 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="size-3.5" strokeWidth={2.2} />
              </span>
            </Link>
            <a
              href="tel:+919923387272"
              className="flex items-center gap-2.5 rounded-full border border-line bg-white px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink transition-colors duration-300 hover:bg-cream"
            >
              <Phone className="size-3.5" strokeWidth={2} />
              Call Us
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mt-12 aspect-4/5 overflow-hidden rounded-[24px] sm:aspect-16/10 md:aspect-1064/560"
        >
          <div className="absolute inset-0" aria-live="polite">
            {HERO_SLIDES.map((slide, index) => (
              <Image
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(max-width: 639px) 100vw, 100vw"
                priority={index === 0}
                className={`object-contain transition-opacity duration-1000 ${index === activeSlide ? "opacity-100" : "opacity-0"}`}
              />
            ))}
          </div>
          <div className="absolute inset-x-0 bottom-4 flex items-center justify-between px-4 md:bottom-6 md:px-6">
            <div className="flex gap-1.5" aria-label="Hero image slides">
              {HERO_SLIDES.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  aria-label={`Show ${slide.alt}`}
                  aria-current={index === activeSlide}
                  onClick={() => setActiveSlide(index)}
                  className={`h-1 rounded-full transition-[width,background-color] duration-300 ${index === activeSlide ? "w-8 bg-white" : "w-2 bg-white/55 hover:bg-white/80"}`}
                />
              ))}
            </div>
            <div className="flex gap-1.5">
              <button
                type="button"
                aria-label="Previous hero image"
                onClick={() => setActiveSlide((current) => (current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
                className="flex size-8 items-center justify-center rounded-full bg-black/20 text-white/90 backdrop-blur-sm transition-[background-color,transform] hover:bg-black/35 active:scale-[0.96]"
              >
                <ArrowLeft className="size-3.5" />
              </button>
              <button
                type="button"
                aria-label="Next hero image"
                onClick={() => setActiveSlide((current) => (current + 1) % HERO_SLIDES.length)}
                className="flex size-8 items-center justify-center rounded-full bg-black/20 text-white/90 backdrop-blur-sm transition-[background-color,transform] hover:bg-black/35 active:scale-[0.96]"
              >
                <ArrowRight className="size-3.5" />
              </button>
            </div>
          </div>

        </motion.div>
      </Container>
    </section>
  )
}
