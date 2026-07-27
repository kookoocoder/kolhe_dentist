"use client"

import { Container, Reveal, SectionLabel } from "@/components/site/ui"
import { LOCATIONS } from "@/lib/data"
import { cn } from "@/lib/utils"
import { useMutation } from "convex/react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, Check, ChevronDown, Clock, MapPin, Phone } from "lucide-react"
import { useState } from "react"
import { api } from "../../convex/_generated/api"

const REASONS = [
  "New patient check-up",
  "Routine cleaning",
  "Teeth whitening",
  "Filling or restoration",
  "Dental implants",
  "Laser dentistry",
  "Full mouth rehabilitation",
  "Emergency (I'm in pain)",
]

const TIMES = [
  "Morning (9:00 – 12:00)",
  "Afternoon (12:00 – 16:00)",
  "Late afternoon (16:00 – 19:00)",
  "Saturday morning (9:00 – 13:00)",
]

type Errors = Partial<Record<string, string>>

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string
  required?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[12px] font-medium text-ink">
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </label>
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
  const createAppointment = useMutation(api.appointments.create)

  const [values, setValues] = useState({
    clinic: "",
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

  const selectedClinic = LOCATIONS.find((l) => l.name === values.clinic)

  const set =
    (key: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [key]: e.target.value }))
      setErrors((err) => ({ ...err, [key]: undefined }))
    }

  const validate = (): Errors => {
    const e: Errors = {}
    if (!values.clinic) e.clinic = "Please select a clinic."
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

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    await createAppointment({
      clinic: values.clinic,
      name: values.name.trim(),
      phone: values.phone.trim(),
      email: values.email.trim(),
      reason: values.reason,
      preferredDate: values.day,
      preferredTime: values.time,
      notes: values.notes.trim(),
    })
    setSubmitted(true)
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
                    business day to confirm your appointment at{" "}
                    <span className="font-medium text-ink">{values.clinic.split(" – ")[0]}</span>.
                  </p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={onSubmit} noValidate className="mt-6 space-y-5">
                  {/* Clinic Selector — mandatory, first field */}
                  <Field label="Select Clinic" required error={errors.clinic}>
                    <div className="relative">
                      <select
                        className={cn(
                          inputClass(errors.clinic),
                          "appearance-none pr-10",
                          !values.clinic && "text-body/60",
                        )}
                        value={values.clinic}
                        onChange={set("clinic")}
                      >
                        <option value="" disabled>
                          Choose a clinic location…
                        </option>
                        {LOCATIONS.map((loc) => (
                          <option key={loc.name} value={loc.name}>
                            {loc.name}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-3.5 -translate-y-1/2 text-body" />
                    </div>
                    {/* Show selected clinic's address inline */}
                    {selectedClinic && (
                      <p className="mt-2 text-[12px] leading-relaxed text-body">
                        <MapPin className="mr-1 inline size-3" />
                        {selectedClinic.address}
                      </p>
                    )}
                  </Field>

                  <Field label="Full Name" required error={errors.name}>
                    <input
                      className={inputClass(errors.name)}
                      placeholder="Your full name"
                      value={values.name}
                      onChange={set("name")}
                    />
                  </Field>
                  <Field label="Phone Number" required error={errors.phone}>
                    <input
                      type="tel"
                      className={inputClass(errors.phone)}
                      placeholder="+91 XXXXX XXXXX"
                      value={values.phone}
                      onChange={set("phone")}
                    />
                  </Field>
                  <Field label="Email Address" required error={errors.email}>
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
                  <Field label="Preferred Day" required error={errors.day}>
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
                    We&rsquo;ll never share your information with anyone outside the practice.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="space-y-5">
              {/* All clinic locations */}
              <div className="rounded-[24px] bg-cream p-7 md:p-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-[15px] font-semibold">Our Clinics</h3>
                  <span className="rounded-full bg-white px-2.5 py-0.5 text-[11px] font-medium text-body">
                    3 locations
                  </span>
                </div>
                <div className="mt-5 space-y-3">
                  {LOCATIONS.map((loc, idx) => {
                    const isSelected = values.clinic === loc.name
                    return (
                      <div
                        key={loc.name}
                        className={cn(
                          "overflow-hidden rounded-[14px] border bg-white transition-all duration-200",
                          isSelected
                            ? "border-sage shadow-sm shadow-sage/10"
                            : "border-line",
                        )}
                      >
                        <div
                          className={cn(
                            "flex items-start gap-3 p-4",
                            isSelected && "border-l-[3px] border-l-sage",
                          )}
                        >
                          <div
                            className={cn(
                              "mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold",
                              isSelected ? "bg-sage text-white" : "bg-cream text-body",
                            )}
                          >
                            {isSelected ? (
                              <Check className="size-3.5" strokeWidth={2.5} />
                            ) : (
                              `0${idx + 1}`
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="text-[13px] font-semibold leading-tight">
                              {loc.name}
                            </h4>
                            <a
                              href={loc.googleMaps}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-1 block text-[12px] leading-relaxed text-body transition-colors hover:text-sage-dark"
                            >
                              {loc.address}
                            </a>
                            <div className="mt-2 flex flex-wrap items-center gap-3">
                              <a
                                href={loc.phoneHref}
                                className="flex items-center gap-1 text-[11.5px] font-medium text-ink hover:text-sage-dark"
                              >
                                <Phone className="size-3" />
                                {loc.phone}
                              </a>
                              {loc.hours && (
                                <span className="flex items-center gap-1 rounded-full bg-cream px-2.5 py-0.5 text-[10.5px] text-body/70">
                                  <Clock className="size-3" />
                                  Mon–Sat 9–7
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="rounded-[24px] bg-ink p-7 md:p-8">
                <h3 className="text-[15px] font-semibold text-white">Dental emergency?</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                  Call the clinic nearest to you directly — we keep same-day slots for urgent care.
                </p>
                <div className="mt-4 space-y-3">
                  {LOCATIONS.map((loc) => (
                    <div key={loc.name}>
                      <p className="text-[11px] font-medium text-white/40">{loc.name.split(" – ")[1] || loc.name}</p>
                      <a
                        href={loc.phoneHref}
                        className="text-[15px] font-semibold tracking-tight text-sage hover:text-sage-light"
                      >
                        {loc.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
