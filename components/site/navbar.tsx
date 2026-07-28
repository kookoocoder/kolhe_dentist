"use client"

import { LOCATIONS } from "@/lib/data"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, ChevronDown, Menu, Moon, Palette, Phone, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

const themes = [
  { id: "classic", label: "Sage", detail: "Soft sage" },
  { id: "dental", label: "Aqua", detail: "Fresh aqua" },
  { id: "hospital", label: "Emerald", detail: "Calm emerald" },
  { id: "medical", label: "Cobalt", detail: "Clinical cobalt" },
]

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <div className="flex items-center gap-1 rounded-full border border-line bg-cream/70 p-1" aria-label="Choose website theme">
      <Palette className="ml-2 size-3.5 text-body" strokeWidth={1.8} />
      {themes.map((option) => (
        <button
          key={option.id}
          type="button"
          title={option.detail}
          aria-label={`Use ${option.label} theme`}
          aria-pressed={mounted && theme === option.id}
          onClick={() => setTheme(option.id)}
          className={cn(
            "rounded-full px-2.5 py-1.5 text-[10px] font-semibold tracking-wide transition-colors active:scale-[0.96]",
            mounted && theme === option.id
              ? "bg-ink text-cream shadow-sm"
              : "text-body hover:bg-cream-dark hover:text-ink",
          )}
        >
          {option.label}
        </button>
      ))}
      <button
        type="button"
        title="Dark mode"
        aria-label="Use dark mode"
        aria-pressed={mounted && theme === "dark"}
        onClick={() => setTheme(theme === "dark" ? "classic" : "dark")}
        className={cn(
          "flex size-7 items-center justify-center rounded-full transition-colors active:scale-[0.96]",
          mounted && theme === "dark" ? "bg-ink text-cream" : "text-body hover:bg-cream-dark hover:text-ink",
        )}
      >
        <Moon className="size-3.5" strokeWidth={1.8} />
      </button>
    </div>
  )
}

export function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:px-10">
        <Link href="/" className="flex items-center gap-1.5">
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

        <nav className="hidden items-center gap-1 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={cn(
                "flex items-center gap-1.5 rounded-full bg-cream px-4 py-2 text-[13px] font-medium transition-colors hover:bg-cream-dark",
                (pathname.startsWith("/services") || pathname.startsWith("/clinics")) && "text-sage-dark"
              )}
            >
              Clinics
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
                  <div className="rounded-2xl border border-line bg-background p-2 shadow-lg shadow-black/5">
                    {LOCATIONS.map((clinic) => (
                      <Link
                        key={clinic.slug}
                        href={`/clinics/${clinic.slug}`}
                        className="block rounded-xl px-3.5 py-2 text-[13px] font-medium text-ink transition-colors hover:bg-cream"
                        onClick={() => setServicesOpen(false)}
                      >
                        {clinic.name}
                      </Link>
                    ))}
                    <div className="mx-2 my-1.5 border-t border-line" />
                    <Link
                      href="/services"
                      className="block rounded-xl px-3.5 py-2 text-[13px] font-semibold text-sage-dark transition-colors hover:bg-cream"
                      onClick={() => setServicesOpen(false)}
                    >
                      View all clinics
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
          <ThemeSwitcher />
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
            href="tel:+919923387272"
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
            className="overflow-hidden border-t border-line bg-background md:hidden"
          >
            <div className="space-y-3 px-5 py-4">
                          <ThemeSwitcher />
              {[
                { label: "Clinics", href: "/services" },
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
