"use client"

import { Container, Reveal, SectionLabel } from "@/components/site/ui"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"


const DOCTORS = [
  {
    name: "Dr. Kirti Kolhe, BDS",
    title: "Consultant Dental Surgeon | Laser Dentist",
    brief:
      "Co-Founder & Director of Dr. Kolhe's Dental Clinic with advanced training in Laser Dentistry. Passionate about creating positive dental experiences.",
    image: "/images/dr-kirti-kolhe-closeup.jpg",
    alt: "Dr. Kirti Kolhe",
    badges: ["BDS", "Laser Dentist", "Co-Founder & Director"],
    stat: { value: "8+", label: "Years Experience" },
    imageLeft: true,
  },
  {
    name: "Dr. Kunal Kolhe, MDS",
    title: "Consultant Prosthodontist | Implantologist",
    brief:
      "Founder & Director with 16+ years of experience and 1,000+ successful full mouth rehabilitations. Leading dental excellence across multiple centres.",
    image: "/images/dr-kunal-kolhe-closeup.png",
    alt: "Dr. Kunal Kolhe",
    badges: ["MDS", "Implantologist", "16+ Years Experience", "1,000+ Cases"],
    stat: { value: "1,000+", label: "Successful Cases" },
    imageLeft: false,
  },
]



// ─── Variant 4: Horizontal Strip ─────────────────────────────────────────────
// Full-width rows, photo alternates sides, stat callout on far edge
function VariantHorizontal() {
  return (
    <div className="flex flex-col gap-5">
      {DOCTORS.map((doc) => (
        <div
          key={doc.name}
          className={cn(
            "flex flex-col overflow-hidden rounded-[22px] bg-cream md:h-56 md:flex-row",
            !doc.imageLeft && "md:flex-row-reverse",
          )}
        >
          <div className="shrink-0 md:w-48">
            <img
              src={doc.image}
              alt={doc.alt}
              className="h-56 w-full object-cover object-top md:h-full"
            />
          </div>
          <div className="flex flex-1 flex-col justify-center px-7 py-6">
            <h2 className="text-[20px] font-medium tracking-tight md:text-[22px]">{doc.name}</h2>
            <p className="mt-1 text-[12px] font-medium text-sage-dark">{doc.title}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {doc.badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full bg-white px-3 py-1 text-[11px] font-medium text-ink"
                >
                  {b}
                </span>
              ))}
            </div>
            <p className="mt-3 text-[12px] leading-relaxed text-body">{doc.brief}</p>
          </div>
          <div
            className={cn(
              "hidden shrink-0 flex-col items-center justify-center gap-1 border-cream px-10 md:flex",
              doc.imageLeft ? "border-l" : "border-r",
            )}
          >
            <span className="text-[36px] font-semibold leading-none tracking-tight text-sage-dark">
              {doc.stat.value}
            </span>
            <span className="text-center text-[10px] font-medium uppercase tracking-widest text-body">
              {doc.stat.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export function DoctorPreview() {

  return (
    <section className="bg-white pb-20 md:pb-28">
      <Container>
        <Reveal>
          <SectionLabel>Meet Our Doctors</SectionLabel>
        </Reveal>

        <div className="mt-6">
          <Reveal delay={0.1}>
            <VariantHorizontal />
          </Reveal>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/about"
            className="group inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink"
          >
            More about our doctors
            <span className="flex size-8 items-center justify-center rounded-full bg-sage transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="size-3.5 text-white" strokeWidth={2.2} />
            </span>
          </Link>
        </div>
      </Container>
    </section>
  )
}
