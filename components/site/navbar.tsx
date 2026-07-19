"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, ChevronDown, Menu, Phone, X } from "lucide-react"
import { SERVICES } from "@/lib/data"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:px-10">
        <Link href="/" className="flex items-center gap-1.5">
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

        <nav className="hidden items-center gap-1 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={cn(
                "flex items-center gap-1.5 rounded-full bg-cream px-4 py-2 text-[13px] font-medium transition-colors hover:bg-cream-dark",
                pathname.startsWith("/services") && "text-sage-dark",
              )}
            >
              Services
              <ChevronDown
                className={cn(
                  "size-3.5 transition-transform duration-300",
                  servicesOpen && "rotate-180",
                )}
              />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full w-64 pt-2"
                >
                  <div className="rounded-2xl border border-line bg-white p-2 shadow-lg shadow-black/5">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="block rounded-xl px-3.5 py-2 text-[13px] font-medium text-ink transition-colors hover:bg-cream"
                        onClick={() => setServicesOpen(false)}
                      >
                        {s.short}
                      </Link>
                    ))}
                    <div className="mx-2 my-1.5 border-t border-line" />
                    <Link
                      href="/services"
                      className="block rounded-xl px-3.5 py-2 text-[13px] font-semibold text-sage-dark transition-colors hover:bg-cream"
                      onClick={() => setServicesOpen(false)}
                    >
                      See all treatments
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {[
            { label: "About", href: "/about" },
            { label: "Reviews", href: "/#reviews" },
            { label: "Contact", href: "/#contact" },
          ].map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={cn(
                "rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors hover:text-sage-dark",
                pathname === l.href && "text-sage-dark",
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 md:flex">
          <Link
            href="/book"
            className="group flex items-center gap-2.5 rounded-full border border-sage-dark/30 bg-sage py-2 pl-5 pr-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink transition-colors duration-300 hover:bg-sage-dark"
          >
            Book Appointment
            <span className="flex size-6 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="size-3 text-ink" strokeWidth={2.2} />
            </span>
          </Link>
          <a
            href="tel:+358401234567"
            aria-label="Call us"
            className="flex size-10 items-center justify-center rounded-full border border-line bg-white transition-colors hover:bg-cream"
          >
            <Phone className="size-4" strokeWidth={1.8} />
          </a>
        </div>

        <button
          className="flex size-10 items-center justify-center rounded-full border border-line md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-line bg-white md:hidden"
          >
            <div className="space-y-1 px-5 py-4">
              {[
                { label: "Services", href: "/services" },
                { label: "About", href: "/about" },
                { label: "Reviews", href: "/#reviews" },
                { label: "Contact", href: "/#contact" },
                { label: "Book Appointment", href: "/book" },
              ].map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="block rounded-xl px-3 py-2.5 text-[15px] font-medium hover:bg-cream"
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
