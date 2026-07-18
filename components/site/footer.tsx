"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { FacebookIcon, InstagramIcon } from "./social-icons"
import { ADDRESS, EMAIL, PHONE, PHONE_HREF } from "@/lib/data"
import { Container, PillButton, Reveal, SectionLabel } from "./ui"
import { cn } from "@/lib/utils"

const CTA_COPY: Record<
  string,
  { label: string; title: string; body: string; after?: string }
> = {
  default: {
    label: "Ready?",
    title: "Ready to feel taken care of?",
    body: "Appointments available this week.\nNo referral needed for new patients.",
  },
  about: {
    label: "Ready?",
    title: "Book your first visit with Dr. Lindgren",
    body: "New patients welcome. No referral required.",
    after: `Or call us: ${PHONE}`,
  },
  service: {
    label: "",
    title: "Ready to book?",
    body: "New patients welcome. We'll confirm\nby phone within one business day.",
  },
}

export function FooterCta() {
  const pathname = usePathname()
  if (pathname === "/book") return null
  const copy =
    pathname === "/about"
      ? CTA_COPY.about
      : /^\/services\/.+/.test(pathname)
        ? CTA_COPY.service
        : CTA_COPY.default

  return (
    <section className="bg-white py-6">
      <Container>
        <Reveal>
          <div className="flex flex-col items-center rounded-[28px] bg-ink px-6 py-16 text-center md:py-20">
            {copy.label && (
              <SectionLabel className="mb-4 text-white/50">
                {copy.label}
              </SectionLabel>
            )}
            <h2 className="text-3xl font-medium tracking-tight text-white md:text-[40px]">
              {copy.title}
            </h2>
            <p className="mt-4 whitespace-pre-line text-[14px] leading-relaxed text-white/60">
              {copy.body}
            </p>
            <PillButton href="/book" className="mt-8">
              Book Appointment
            </PillButton>
            {copy.after && (
              <p className="mt-5 text-[13px] text-white/50">{copy.after}</p>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Book Appointment", href: "/book" },
]

const SERVICE_LINKS = [
  { label: "General Dentistry", href: "/services/general-check-up" },
  { label: "Teeth Whitening", href: "/services/teeth-whitening" },
  { label: "Dental Implants", href: "/services/dental-implants" },
  { label: "Emergency Care", href: "/services/emergency-care" },
]

export function Footer() {
  const pathname = usePathname()
  return (
    <>
      <FooterCta />
      <footer className="bg-white pt-10">
        <Container>
          <div className="grid gap-10 border-t border-line pt-12 md:grid-cols-2">
            <div>
              <Link href="/" className="inline-flex items-center">
                <span className="text-[15px] font-bold leading-[1.05] tracking-tight">
                  NorthGate
                  <br />
                  Dental{" "}
                  <Image
                    src="/images/logo-tooth.png"
                    alt=""
                    width={12}
                    height={12}
                    className="inline-block -translate-y-px"
                  />
                </span>
              </Link>
              <p className="mt-4 text-[13px] text-body">
                Gentle care for the whole family.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <SectionLabel className="mb-4">Quick Links</SectionLabel>
                <ul className="space-y-2.5">
                  {QUICK_LINKS.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className={cn(
                          "text-[13px] text-ink transition-colors hover:text-sage-dark",
                          pathname === l.href && "text-sage-dark"
                        )}
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <SectionLabel className="mb-4">Services</SectionLabel>
                <ul className="space-y-2.5">
                  {SERVICE_LINKS.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-[13px] text-ink transition-colors hover:text-sage-dark"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <SectionLabel className="mb-4">Visit Us</SectionLabel>
                <ul className="space-y-2.5 text-[13px] text-ink">
                  <li>{ADDRESS.replace(" 00100", "")}</li>
                  <li>
                    <a href={PHONE_HREF} className="hover:text-sage-dark">
                      {PHONE}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="hover:text-sage-dark"
                    >
                      {EMAIL}
                    </a>
                  </li>
                  <li>Mon–Fri: 8:00–18:00</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line py-6 text-[12px] text-body sm:flex-row">
            <p>© 2026 Northgate Family Dental. All rights reserved.</p>
            <div className="flex items-center gap-5">
              <Link href="#" className="hover:text-ink">
                Privacy
              </Link>
              <Link href="#" className="hover:text-ink">
                Refund Policy
              </Link>
              <div className="flex items-center gap-2">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex size-8 items-center justify-center rounded-full border border-line transition-colors hover:bg-cream"
                >
                  <InstagramIcon className="size-3.5" />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex size-8 items-center justify-center rounded-full border border-line transition-colors hover:bg-cream"
                >
                  <FacebookIcon className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  )
}
