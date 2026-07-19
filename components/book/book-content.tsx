"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, Check, ChevronDown } from "lucide-react"
import { Container, Reveal, SectionLabel } from "@/components/site/ui"
import { PHONE, PHONE_HREF } from "@/lib/data"
import { cn } from "@/lib/utils"

const REASONS = [
  "New patient check-up",
  "Routine cleaning",
  "Teeth whitening",
  "Filling or restoration",
  "Emergency (I'm in pain)",
]

const TIMES = [
  "Morning (8:00 – 12:00)",
  "Afternoon (12:00 – 16:00)",
  "Late afternoon (16:00 – 18:00)",
  "Saturday morning (9:00 – 13:00)",
]

const INFO_BLOCKS = [
  {
    title: "Confirmed by phone",
    text: "We call or email to confirm every booking. Your time is locked in only after we've spoken.",
  },
  {
    title: "Easy to reschedule",
    text: "Cancel or reschedule any time, no fee, no questions. We just ask for as much notice as you can give.",
  },
]

type Errors = Partial<Record<string, string>>

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[12px] font-medium text-ink">{label}</label>
      {children}
      {error && <p className="mt-1.5 text-[11.5px] text-red-500">{error}</p>}
    </div>
  )
}

const inputClass = (hasError?: string) =>
  cn(
    "w-full rounded-xl border bg-white px-4 py-2.5 text-[13px] text-ink placeholder:text-body/60 outline-none transition-colors focus:border-sage-dark",
    hasError ? "border-red-400" : "border-line",
  )

export function BookContent() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    reason: REASONS[0],
    day: "",
    time: TIMES[0],
    notes: "",
  })
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  const set =
    (key: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [key]: e.target.value }))
      setErrors((err) => ({ ...err, [key]: undefined }))
    }

  const validate = (): Errors => {
    const e: Errors = {}
    if (values.name.trim().length < 2) e.name = "Please enter your full name."
    if (!/^[+\d][\d\s\-()]{6,}$/.test(values.phone.trim()))
      e.phone = "Please enter a valid phone number."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      e.email = "Please enter a valid email address."
    if (!values.day) e.day = "Please pick a preferred day."
    else if (new Date(values.day) < new Date(new Date().toDateString()))
      e.day = "Please pick a date in the future."
    return e
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length === 0) setSubmitted(true)
  }

  return (
    <section className="bg-white pb-16 pt-12 md:pb-24 md:pt-16">
      <Container>
        <Reveal>
          <SectionLabel>Book Your Visit</SectionLabel>
          <h1 className="mt-5 text-[38px] font-medium leading-[1.05] tracking-[-0.02em] md:text-[56px]">
            Book your appointment
          </h1>
          <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-body">
            We&rsquo;ll confirm by phone or email within one business day. Your spot is reserved
            only after we speak.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_360px] lg:gap-16">
          <Reveal delay={0.08}>
            <h2 className="text-[22px] font-medium tracking-tight">Request an appointment</h2>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 rounded-[18px] bg-cream p-8 text-center"
                >
                  <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-sage">
                    <Check className="size-5 text-white" strokeWidth={2.5} />
                  </span>
                  <h3 className="mt-5 text-[18px] font-semibold">Request received</h3>
                  <p className="mx-auto mt-2 max-w-sm text-[13px] leading-relaxed text-body">
                    Thank you, {values.name.split(" ")[0]}. We&rsquo;ll call or email within one
                    business day to confirm your appointment.
                  </p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={onSubmit} noValidate className="mt-6 space-y-5">
                  <Field label="Full Name" error={errors.name}>
                    <input
                      className={inputClass(errors.name)}
                      placeholder="Your full name"
                      value={values.name}
                      onChange={set("name")}
                    />
                  </Field>
                  <Field label="Phone Number" error={errors.phone}>
                    <input
                      type="tel"
                      className={inputClass(errors.phone)}
                      placeholder="+358 XX XXX XXXX"
                      value={values.phone}
                      onChange={set("phone")}
                    />
                  </Field>
                  <Field label="Email Address" error={errors.email}>
                    <input
                      type="email"
                      className={inputClass(errors.email)}
                      placeholder="you@email.com"
                      value={values.email}
                      onChange={set("email")}
                    />
                  </Field>
                  <Field label="Reason for Visit">
                    <div className="relative">
                      <select
                        className={cn(inputClass(), "appearance-none pr-10")}
                        value={values.reason}
                        onChange={set("reason")}
                      >
                        {REASONS.map((r) => (
                          <option key={r}>{r}</option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-3.5 -translate-y-1/2 text-body" />
                    </div>
                  </Field>
                  <Field label="Preferred Day" error={errors.day}>
                    <input
                      type="date"
                      className={inputClass(errors.day)}
                      value={values.day}
                      onChange={set("day")}
                    />
                  </Field>
                  <Field label="Preferred Time">
                    <div className="relative">
                      <select
                        className={cn(inputClass(), "appearance-none pr-10")}
                        value={values.time}
                        onChange={set("time")}
                      >
                        {TIMES.map((t) => (
                          <option key={t}>{t}</option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-3.5 -translate-y-1/2 text-body" />
                    </div>
                  </Field>
                  <Field label="Anything we should know?">
                    <textarea
                      rows={3}
                      className={cn(inputClass(), "resize-y")}
                      placeholder="Allergies, dental anxiety, mobility needs, or questions, anything that helps us prepare. Optional."
                      value={values.notes}
                      onChange={set("notes")}
                    />
                  </Field>

                  <button
                    type="submit"
                    className="group flex items-center gap-2.5 rounded-full bg-sage py-2.5 pl-6 pr-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink transition-colors duration-300 hover:bg-sage-dark"
                  >
                    Request My Appointment
                    <span className="flex size-7 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight className="size-3.5" strokeWidth={2.2} />
                    </span>
                  </button>
                  <p className="text-[12px] text-body">
                    We&rsquo;ll never share your information with anyone outside this practice.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="space-y-5">
              <div className="rounded-[24px] bg-cream p-7 md:p-8">
                <div className="space-y-7">
                  {INFO_BLOCKS.map((b) => (
                    <div key={b.title}>
                      <h3 className="text-[15px] font-semibold">{b.title}</h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-body">{b.text}</p>
                    </div>
                  ))}
                  <div>
                    <h3 className="text-[15px] font-semibold">Rather call?</h3>
                    <p className="mt-2 text-[13px] text-body">
                      Mon–Fri: 8:00 – 18:00 · Sat: 9:00 – 14:00
                    </p>
                    <a
                      href={PHONE_HREF}
                      className="mt-2 block text-[16px] font-semibold tracking-tight hover:text-sage-dark"
                    >
                      {PHONE}
                    </a>
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold">Find us</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-body">
                      Northgate Family Dental, 14 Maple Street, Helsinki 00100. Free parking in the
                      rear car park, 2 minutes from Kallio metro station.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[24px] bg-ink p-7 md:p-8">
                <h3 className="text-[15px] font-semibold text-white">Dental emergency?</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                  Call us directly, we keep same-day slots for urgent care.
                </p>
                <a
                  href={PHONE_HREF}
                  className="mt-3 block text-[16px] font-semibold tracking-tight text-sage hover:text-sage-light"
                >
                  {PHONE}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
