"use client"

import { ADDRESS, EMAIL, LOCATIONS, PHONE, PHONE_HREF } from "@/lib/data"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "./social-icons"
import { Container, PillButton, Reveal, SectionLabel } from "./ui"
const WHATSAPP_HREF =
  "https://wa.me/919923387272?text=Hi%20Dr.%20Kolhe%27s%20Dental%20Clinic%21%20I%27d%20like%20to%20book%20an%20appointment.%20"

const CTA_COPY: Record<string, { label: string; title: string; body: string; after?: string }> = {
  default: {
    label: "Ready?",
    title: "Ready to feel taken care of?",
    body: "Appointments available this week.\nNo referral needed for new patients.",
  },
  about: {
    label: "Ready?",
    title: "Book your first visit with Dr. Kolhe's Dental Clinic",
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
            {copy.label && <SectionLabel className="mb-4 text-white/50">{copy.label}</SectionLabel>}
            <h2 className="text-3xl font-medium tracking-tight text-white md:text-[40px]">
              {copy.title}
            </h2>
            <p className="mt-4 whitespace-pre-line text-[14px] leading-relaxed text-white/60">
              {copy.body}
            </p>
            <PillButton href="/book" className="mt-8">
              Book Appointment
            </PillButton>
            {copy.after && <p className="mt-5 text-[13px] text-white/50">{copy.after}</p>}
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
  { label: "Laser Dentistry", href: "/services/laser-dentistry" },
  { label: "Dental Implants", href: "/services/dental-implants" },
  { label: "Full Mouth Rehab", href: "/services/full-mouth-rehabilitation" },
  { label: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" },
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
                  Dr. Kolhe&apos;s
                  <br />
                  Dental Clinic{" "}
                  <Image
                    src="/images/logo-tooth.png"
                    alt=""
                    width={12}
                    height={12}
                    className="inline-block -translate-y-px"
                  />
                </span>
              </Link>
              <p className="mt-4 text-[13px] text-body">Healthy Smile, Healthy Life</p>
              <div className="mt-4 flex flex-col gap-1.5 text-[13px] text-ink">
                <a href={PHONE_HREF} className="hover:text-sage-dark">
                  {PHONE}
                </a>
                <p className="max-w-xs leading-relaxed text-body">{ADDRESS}</p>
                <a href={`mailto:${EMAIL}`} className="hover:text-sage-dark">
                  {EMAIL}
                </a>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex min-h-10 w-fit items-center gap-2 rounded-full bg-[#25D366] px-4 text-[12px] font-semibold text-white shadow-sm transition-[background-color,transform,box-shadow] hover:bg-[#128C7E] hover:shadow-md active:scale-[0.96]"
                >
                  <WhatsAppIcon className="size-4" />
                  Message us on WhatsApp
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <SectionLabel className="mb-4">Quick Links</SectionLabel>
                <ul className="space-y-2.5">
                  {QUICK_LINKS.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className={cn(
                          "text-[13px] text-ink transition-colors hover:text-sage-dark",
                          pathname === l.href && "text-sage-dark",
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
            </div>
          </div>

          {/* Visit Us — full-width 3-card row */}
          <div className="mt-10 border-t border-line pt-8">
            <SectionLabel className="mb-5">Visit Us</SectionLabel>
            <div className="grid gap-3 md:grid-cols-3">
              {LOCATIONS.map((loc) => (
                <div key={loc.name} className="rounded-[14px] bg-cream p-4">
                  <p className="text-[12px] font-semibold text-ink">{loc.name}</p>
                  <a
                    href={loc.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 block text-[11.5px] leading-relaxed text-body transition-colors hover:text-sage-dark"
                  >
                    {loc.address.split(" (")[0]}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line py-6 text-[12px] text-body sm:flex-row">
            <p>© 2026 Dr. Kolhe's Dental Clinic. All rights reserved.</p>
            <div className="flex items-center gap-5">
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
