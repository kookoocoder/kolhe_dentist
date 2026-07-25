"use client"

import { Container, Reveal, SectionLabel } from "@/components/site/ui"
import { LOCATIONS } from "@/lib/data"
import { Award, GraduationCap, Sparkles, MapPin } from "lucide-react"

const DR_KUNAL_CREDENTIALS = [
  {
    icon: GraduationCap,
    title: "Education",
    items: ["BDS + MDS in Prosthodontics, Crown & Bridge, and Oral Implantology"],
  },
  {
    icon: Award,
    title: "Experience & Memberships",
    items: [
      "16+ years clinical experience",
      "1,000+ full mouth rehabilitation cases",
      "District Oral Health Chairman, Rotary District 3132 (2026–27)",
      "Member, Rotary Club of Ahilyanagar Central",
      "Member, BNI Ajinkya Chapter, Pune",
    ],
  },
  {
    icon: Sparkles,
    title: "Specialisations",
    items: [
      "Full Mouth Rehabilitation",
      "Basal Implantology",
      "Immediate Loading Dental Implants",
      "Digital Smile Designing",
      "Advanced Prosthodontics",
    ],
  },
]

const DR_KIRTI_CREDENTIALS = [
  {
    icon: GraduationCap,
    title: "Education",
    items: ["BDS with advanced training in Laser Dentistry"],
  },
  {
    icon: Award,
    title: "Experience & Memberships",
    items: [
      "Co-Founder & Director, Dr. Kolhe's Dental Clinic",
      "Active member, Rotary Club of Ahilyanagar Central",
      "Regular participant, national & international CDE programmes",
    ],
  },
  {
    icon: Sparkles,
    title: "Specialisations",
    items: [
      "Laser Dentistry",
      "Cosmetic Dentistry",
      "Preventive Dentistry",
      "Pediatric Dental Care",
      "Gum Care & Smile Enhancement",
    ],
  },
]

export function AboutContent() {
  return (
    <>
      {/* Section 1 — About the Practice */}
      <section className="bg-white pb-16 pt-12 md:pb-24 md:pt-16">
        <Container>
          <Reveal>
            <SectionLabel>About the Practice</SectionLabel>
            <h1 className="mt-5 text-[38px] font-medium leading-[1.05] tracking-[-0.02em] md:text-[56px]">
              Dr. Kolhe&rsquo;s Dental Clinic
            </h1>
            <p className="mt-5 max-w-xl text-[14px] leading-relaxed text-body">
              A leading dental clinic with three locations across Ahmednagar and Pune, led by
              Dr. Kunal Kolhe and Dr. Kirti Kolhe. Specialising in laser dentistry, implants, and
              comprehensive oral care with a commitment to the philosophy: &ldquo;Healthy Smile,
              Healthy Life.&rdquo;
            </p>
          </Reveal>

          <Reveal delay={0.15} y={40}>
            <div className="relative mt-10 overflow-hidden rounded-[24px]">
              <img
                src="/images/dr-kirti-kunal-together.png"
                alt="Dr. Kirti Kolhe and Dr. Kunal Kolhe"
                className="aspect-[4/3] w-full object-cover md:aspect-[1064/460]"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Section 2 — Dr. Kunal Kolhe */}
      <section className="bg-white pb-16 md:pb-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-[280px_1fr] md:gap-20">
            <Reveal>
              <SectionLabel>Our Doctors</SectionLabel>
            </Reveal>
            <div>
              <Reveal delay={0.05}>
                <div className="flex items-start gap-6">
                  <img
                    src="/images/dr-kunal-kolhe-standing.png"
                    alt="Dr. Kunal Kolhe"
                    className="h-48 w-36 shrink-0 rounded-[18px] object-cover md:h-64 md:w-48"
                  />
                  <div>
                    <h2 className="text-[26px] font-medium tracking-tight md:text-[32px]">
                      Dr. Kunal Kolhe, MDS
                    </h2>
                    <p className="mt-1 text-[13px] font-medium uppercase tracking-[0.08em] text-body/70">
                      Consultant Prosthodontist &amp; Implantologist · Founder &amp; Director
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="mt-8 max-w-xl space-y-5 text-[14px] leading-relaxed text-body">
                  <p>
                    Dr. Kunal Kolhe is a specialist prosthodontist and implantologist with over 16
                    years of clinical experience. He holds an MDS in Prosthodontics, Crown &amp;
                    Bridge, and Oral Implantology, and has successfully completed over 1,000 full
                    mouth rehabilitation cases.
                  </p>
                  <p>
                    His expertise spans basal implantology, immediate loading dental implants, digital
                    smile designing, and advanced prosthodontics. He serves as District Oral Health
                    Chairman for Rotary District 3132 (2026–27) and is an active member of the Rotary
                    Club of Ahilyanagar Central and BNI Ajinkya Chapter, Pune.
                  </p>
                  <p>
                    Through his initiative &ldquo;दात हैं तो बात है&rdquo;, Dr. Kunal has facilitated
                    over 5,00,000 dental check-ups across Maharashtra, driving awareness about oral
                    health in communities statewide.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Dr. Kunal Credentials */}
      <section className="bg-white pb-16 md:pb-24">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {DR_KUNAL_CREDENTIALS.map((c, i) => (
              <Reveal key={c.title} delay={0.05 + i * 0.07}>
                <div className="h-full rounded-[18px] bg-cream p-6 md:p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-full bg-sage/40">
                      <c.icon className="size-4 text-sage-dark" strokeWidth={2} />
                    </span>
                    <h3 className="text-[14px] font-semibold">{c.title}</h3>
                  </div>
                  <ul className="mt-4 space-y-3">
                    {c.items.map((item) => (
                      <li
                        key={item}
                        className="border-b border-line pb-3 text-[13px] leading-relaxed text-body last:border-b-0 last:pb-0"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 3 — Dr. Kirti Kolhe */}
      <section className="bg-white pb-16 md:pb-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-[280px_1fr] md:gap-20">
            <Reveal>
              <SectionLabel>In Her Words</SectionLabel>
            </Reveal>
            <div>
              <Reveal delay={0.05}>
                <div className="flex items-start gap-6">
                  <img
                    src="/images/dr-kirti-kolhe-standing.jpg"
                    alt="Dr. Kirti Kolhe"
                    className="h-48 w-36 shrink-0 rounded-[18px] object-cover md:h-64 md:w-48"
                  />
                  <div>
                    <h2 className="text-[26px] font-medium tracking-tight md:text-[32px]">
                      Dr. Kirti Kolhe, BDS
                    </h2>
                    <p className="mt-1 text-[13px] font-medium uppercase tracking-[0.08em] text-body/70">
                      Consultant Dental Surgeon · Laser Dentist · Co-Founder &amp; Director
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <blockquote className="mt-8 text-[22px] font-medium leading-snug tracking-tight md:text-[28px]">
                  &ldquo;Healthy Smile, Healthy Life — that&rsquo;s the belief that drives
                  everything we do at our clinics.&rdquo;
                </blockquote>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="mt-8 max-w-xl space-y-5 text-[14px] leading-relaxed text-body">
                  <p>
                    Dr. Kirti Kolhe is a BDS-qualified dental surgeon with advanced training in laser
                    dentistry. As Co-Founder &amp; Director of Dr. Kolhe&rsquo;s Dental Clinic, she
                    brings a patient-first approach with expertise spanning cosmetic dentistry,
                    preventive care, pediatric dentistry, and gum care.
                  </p>
                  <p>
                    She is an active member of the Rotary Club of Ahilyanagar Central and regularly
                    participates in oral health awareness programs, free dental check-up camps, and
                    preventive healthcare initiatives. Dr. Kirti regularly attends national and
                    international conferences, CDE programmes, and laser dentistry workshops to stay
                    at the forefront of modern dental practice.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Dr. Kirti Credentials */}
      <section className="bg-white pb-16 md:pb-24">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {DR_KIRTI_CREDENTIALS.map((c, i) => (
              <Reveal key={c.title} delay={0.05 + i * 0.07}>
                <div className="h-full rounded-[18px] bg-cream p-6 md:p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-full bg-sage/40">
                      <c.icon className="size-4 text-sage-dark" strokeWidth={2} />
                    </span>
                    <h3 className="text-[14px] font-semibold">{c.title}</h3>
                  </div>
                  <ul className="mt-4 space-y-3">
                    {c.items.map((item) => (
                      <li
                        key={item}
                        className="border-b border-line pb-3 text-[13px] leading-relaxed text-body last:border-b-0 last:pb-0"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 4 — Philosophy */}
      <section className="bg-white pb-16 md:pb-24">
        <Container>
          <Reveal>
            <SectionLabel>Our Philosophy</SectionLabel>
            <h2 className="mt-4 text-[30px] font-medium tracking-tight md:text-[36px]">
              Healthy Smile, Healthy Life
            </h2>
            <p className="mt-4 max-w-lg text-[14px] leading-relaxed text-body">
              At Dr. Kolhe&rsquo;s Dental Clinic, we believe that a healthy smile is the foundation
              of overall well-being. Our mission is to provide modern, ethical, and compassionate
              dental care using advanced technology — from laser dentistry to digital smile design —
              ensuring every patient leaves with confidence and a smile they love.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Section 5 — Our Locations */}
      <section className="bg-white pb-14 md:pb-20">
        <Container>
          <Reveal>
            <SectionLabel>Our Locations</SectionLabel>
            <h2 className="mt-4 text-[30px] font-medium tracking-tight md:text-[36px]">
              Visit Us
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {LOCATIONS.map((loc, i) => (
              <Reveal key={loc.name} delay={0.05 + i * 0.07}>
                <div className="h-full rounded-[18px] bg-cream p-6 md:p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-full bg-sage/40">
                      <MapPin className="size-4 text-sage-dark" strokeWidth={2} />
                    </span>
                    <h3 className="text-[14px] font-semibold">{loc.name}</h3>
                  </div>
                  <p className="mt-4 text-[13px] leading-relaxed text-body">{loc.address}</p>
                  {loc.hours && (
                    <p className="mt-2 text-[12px] font-medium text-body/70">{loc.hours}</p>
                  )}
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href={loc.googleMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-sage px-4 py-1.5 text-[12px] font-medium text-white transition-colors hover:bg-sage-dark"
                    >
                      <MapPin className="size-3" />
                      Directions
                    </a>
                    {loc.website && (
                      <a
                        href={loc.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-1.5 text-[12px] font-medium text-body transition-colors hover:bg-cream"
                      >
                        Website
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
