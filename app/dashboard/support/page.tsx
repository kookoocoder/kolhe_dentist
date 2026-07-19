"use client"

import { useState } from "react"
import { CheckCircle2, ChevronDown, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const FAQS = [
  {
    q: "How do I add a new club to my network?",
    a: "Open Studios and use the club filter to review capacity. To onboard a new location, contact Franchise Ops from the workspace switcher — once approved, the club appears on your Club Map and dashboard KPIs.",
  },
  {
    q: "How is studio utilization calculated?",
    a: "Utilization is the share of studios currently Booked across the selected clubs. It updates when a studio is held, booked, or released from the Studios page.",
  },
  {
    q: "Can I export membership and spend reports?",
    a: "Yes. Operating Spend and membership summaries can be exported as CSV or PDF from each module menu, filtered by the date range you select.",
  },
  {
    q: "How do I change a team member\u2019s permissions?",
    a: "Open the Team page, find the member, and use the role dropdown on their card to switch between Admin and Member. Owners keep full access and cannot be demoted.",
  },
  {
    q: "What happens when a membership is about to expire?",
    a: "You will receive an alert 60 days before expiry (configurable in Settings → Notifications). The member is flagged on Memberships so coaches can start renewal outreach in time.",
  },
]

const TOPICS = ["Billing", "Technical Issue", "Membership Question", "Other"]

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState(0)
  const [form, setForm] = useState({ name: "", email: "", topic: TOPICS[0], message: "" })
  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const [sent, setSent] = useState(false)

  const setField = (key: string, value: string) => {
    setForm((f) => ({ ...f, [key]: value }))
    setErrors((e) => ({ ...e, [key]: false }))
  }

  const handleSubmit = () => {
    const next = { name: !form.name.trim(), email: !form.email.trim(), message: !form.message.trim() }
    setErrors(next)
    if (Object.values(next).some(Boolean)) return
    setSent(true)
  }

  const resetForm = () => {
    setForm({ name: "", email: "", topic: TOPICS[0], message: "" })
    setErrors({})
    setSent(false)
  }

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-xl font-bold">Support</h1>

      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-[20px] bg-card p-5 shadow-sm">
          <h2 className="text-base font-semibold">Frequently Asked Questions</h2>
          <div className="mt-4 divide-y divide-border">
            {FAQS.map((faq, i) => {
              const open = openIndex === i
              return (
                <div key={faq.q}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    className="flex w-full items-center justify-between gap-3 py-3 text-left transition-colors hover:text-accent-foreground"
                  >
                    <span className={`text-sm font-medium ${open ? "text-accent-foreground" : ""}`}>
                      {faq.q}
                    </span>
                    <ChevronDown size={16} className={`shrink-0 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
                  </button>
                  {open && (
                    <p className="border-t border-border py-3 text-sm text-muted-foreground">{faq.a}</p>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="rounded-[20px] bg-card p-5 shadow-sm">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center gap-2 py-10 text-center">
              <CheckCircle2 size={40} className="text-green-500" />
              <h2 className="text-base font-semibold">Message sent!</h2>
              <p className="text-sm text-muted-foreground">
                Thanks for reaching out — our team will get back to you within 24 hours.
              </p>
              <button type="button" onClick={resetForm} className="mt-3 text-sm font-medium text-accent-foreground transition-colors hover:text-foreground">
                Send another message
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-base font-semibold">Contact Support</h2>
              <div className="mt-4 flex flex-col gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-muted-foreground">Name</label>
                  <Input
                    value={form.name}
                    onChange={(e) => setField("name", e.target.value)}
                    placeholder="Jane Cooper"
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && <p className="text-xs text-destructive">Please enter your name.</p>}
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-muted-foreground">Email</label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setField("email", e.target.value)}
                    placeholder="jane@example.com"
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && <p className="text-xs text-destructive">Please enter your email.</p>}
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-muted-foreground">Topic</label>
                  <Select value={form.topic} onValueChange={(v) => v && setField("topic", v)}>
                    <SelectTrigger className="w-full rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {TOPICS.map((t) => (
                        <SelectItem key={t} value={t}>{t}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-muted-foreground">Message</label>
                  <Textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setField("message", e.target.value)}
                    placeholder="How can we help?"
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && <p className="text-xs text-destructive">Please write a message.</p>}
                </div>
                <Button onClick={handleSubmit} className="w-fit rounded-full">
                  <Send size={14} />
                  Send Message
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
