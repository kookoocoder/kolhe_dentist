"use client"

import { FacebookIcon, InstagramIcon } from "@/components/site/social-icons"
import { Container } from "@/components/site/ui"
import { motion } from "framer-motion"
import { ArrowUpRight, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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
            Laser · Implant · Cosmetic · Family Dentistry
          </motion.p>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-5 text-[44px] font-medium leading-[1.04] tracking-[-0.02em] md:text-[64px]"
          >
            Healthy Smile,
            <br />
            Healthy Life
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
              className="group flex items-center gap-2.5 rounded-full bg-sage py-2.5 pl-6 pr-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink transition-colors duration-300 hover:bg-sage-dark"
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
          <Image
            src="/images/hero.png"
            alt="Doctors at the dental and hair transplant clinic"
            fill
            loading="eager"
            className="object-cover"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="absolute bottom-5 right-4 hidden items-center gap-3 sm:flex md:bottom-7 md:right-6"
          >
            <span className="text-[11px] font-medium text-white/90">Join us!</span>
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
