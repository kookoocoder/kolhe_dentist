"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, MapPin, Phone } from "lucide-react"
import { FacebookIcon, InstagramIcon } from "@/components/site/social-icons"
import { Container } from "@/components/site/ui"

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
}

export function HomeHero() {
  return (
    <section className="bg-white pb-6 pt-12 md:pt-16">
      <Container>
        <div className="flex flex-col items-center text-center">
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-medium uppercase tracking-[0.18em] text-body/70"
          >
            General · Cosmetic · Family Dentistry
          </motion.p>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-5 text-[44px] font-medium leading-[1.04] tracking-[-0.02em] md:text-[64px]"
          >
            Exceptional care,
            <br />
            from the first hello
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-5 max-w-md text-[14px] leading-relaxed text-body"
          >
            Gentle, unhurried dentistry for the whole family, serving Helsinki
            since 2008. Same-week appointments available.
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href="/book"
              className="group flex items-center gap-2.5 rounded-full bg-sage py-2.5 pl-6 pr-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink transition-colors duration-300 hover:bg-sage-dark"
            >
              Book Appointment
              <span className="flex size-7 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="size-3.5" strokeWidth={2.2} />
              </span>
            </Link>
            <a
              href="tel:+358401234567"
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
          className="relative mt-12 overflow-hidden rounded-[24px]"
        >
          <video
            src="/images/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="aspect-[4/5] w-full object-cover sm:aspect-[16/10] md:aspect-[1064/560]"
          />

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="absolute left-4 top-5 hidden items-center gap-3 rounded-full bg-white py-2 pl-2 pr-5 shadow-sm sm:flex md:left-6 md:top-7"
          >
            <span className="flex size-9 items-center justify-center rounded-full bg-sage/30">
              <MapPin className="size-4 text-sage-dark" strokeWidth={2} />
            </span>
            <span>
              <span className="block text-[12px] font-semibold leading-tight">
                We&rsquo;re here!
              </span>
              <span className="block text-[11px] leading-tight text-body">
                14 Maple Street, Helsinki
              </span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="absolute bottom-5 left-4 hidden items-center gap-3 rounded-full bg-white py-2 pl-2 pr-5 shadow-sm sm:flex md:bottom-7 md:left-6"
          >
            <span className="flex size-9 items-center justify-center overflow-hidden rounded-full bg-cream-dark">
              <img
                src="/images/team-anika.jpg"
                alt=""
                className="size-full object-cover"
              />
            </span>
            <span>
              <span className="block text-[12px] font-semibold leading-tight">
                Message us
              </span>
              <span className="block text-[11px] leading-tight text-body">
                Reception
              </span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="absolute bottom-5 right-4 hidden items-center gap-3 sm:flex md:bottom-7 md:right-6"
          >
            <span className="text-[11px] font-medium text-white/90">
              Join us!
            </span>
            <a
              href="#"
              aria-label="Instagram"
              className="flex size-8 items-center justify-center rounded-full bg-white/95 transition-transform hover:scale-105"
            >
              <InstagramIcon className="size-3.5" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex size-8 items-center justify-center rounded-full bg-white/95 transition-transform hover:scale-105"
            >
              <FacebookIcon className="size-3.5" />
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
