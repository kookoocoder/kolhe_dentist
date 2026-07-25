"use client"

import { Container, Reveal, SectionLabel } from "@/components/site/ui"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const DOCTORS = [
  {
    name: "Dr. Kirti Kolhe, BDS",
    title: "Consultant Dental Surgeon | Laser Dentist",
    brief:
      "Co-Founder & Director of Dr. Kolhe's Dental Clinic with advanced training in Laser Dentistry. Passionate about creating positive dental experiences.",
    image: "/images/dr-kirti-kolhe-standing.jpg",
    alt: "Dr. Kirti Kolhe",
    badges: ["BDS", "Laser Dentist", "Co-Founder & Director"],
  },
  {
    name: "Dr. Kunal Kolhe, MDS",
    title: "Consultant Prosthodontist | Implantologist",
    brief:
      "Founder & Director with 16+ years of experience and 1,000+ successful full mouth rehabilitations. Leading dental excellence across multiple centres.",
    image: "/images/dr-kunal-kolhe-standing.png",
    alt: "Dr. Kunal Kolhe",
    badges: ["MDS", "Implantologist", "16+ Years Experience", "1,000+ Cases"],
  },
]

export function DoctorPreview() {
  return (
    <section className="bg-white pb-20 md:pb-28">
      <Container>
        <Reveal>
          <SectionLabel>Meet Our Doctors</SectionLabel>
        </Reveal>

        <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-10">
          {DOCTORS.map((doc, i) => (
            <Reveal key={doc.name} delay={i === 0 ? 0.05 : 0.12}>
              <div className="rounded-[18px] bg-cream p-6 md:p-7">
                <div className="overflow-hidden rounded-[18px]">
                  <img
                    src={doc.image}
                    alt={doc.alt}
                    className="aspect-[3/4] w-full object-cover"
                  />
                </div>
                <div className="mt-6">
                  <h2 className="text-[22px] font-medium tracking-tight md:text-[26px]">
                    {doc.name}
                  </h2>
                  <p className="mt-1.5 text-[13px] font-medium text-sage-dark">
                    {doc.title}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {doc.badges.map((b) => (
                      <span
                        key={b}
                        className="rounded-full bg-white px-3.5 py-1.5 text-[11px] font-medium text-ink"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-[13px] leading-relaxed text-body">
                    {doc.brief}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
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
