"use client"

import { Container, Reveal, SectionLabel } from "@/components/site/ui"
import { LOCATIONS } from "@/lib/data"
import { MapPin } from "lucide-react"

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
              comprehensive oral care with a commitment to the philosophy: &ldquo;दात हैं… तो बात हैं…..&rdquo;
            </p>
          </Reveal>

          <Reveal delay={0.15} y={40}>
            <div className="relative mt-14 overflow-hidden rounded-[24px]">
              <img
                src="/images/dr-kirti-kunal-together.png"
                alt="Dr. Kirti Kolhe and Dr. Kunal Kolhe"
                className="aspect-[4/3] w-full object-cover object-top md:aspect-[16/9]"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Section 2 — Dr. Kunal Kolhe */}
      <section className="bg-white pb-16 pt-4 md:pb-20">
        <Container>
          <Reveal>
            <SectionLabel>Our Doctors</SectionLabel>
          </Reveal>

          <div className="mt-8 grid items-start gap-8 md:grid-cols-[300px_1fr] md:gap-14">
            {/* Photo */}
            <Reveal>
              <div className="overflow-hidden rounded-[24px]">
                <img
                  src="/images/dr-kunal-kolhe-standing.png"
                  alt="Dr. Kunal Kolhe"
                  className="aspect-[3/4] w-full object-cover object-top"
                />
              </div>
            </Reveal>

            {/* Info */}
            <div className="pt-1">
              <Reveal delay={0.07}>
                <h2 className="text-[28px] font-medium leading-tight tracking-tight md:text-[36px]">
                  Dr. Kunal Kolhe, MDS
                </h2>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-sage-dark">
                  Consultant Prosthodontist &amp; Implantologist &middot; Founder &amp; Director
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="mt-6 flex flex-wrap gap-8 border-y border-line py-5">
                  <div>
                    <p className="text-[28px] font-semibold leading-none tracking-tight">16+</p>
                    <p className="mt-1.5 text-[10.5px] uppercase tracking-wide text-body">
                      Years Experience
                    </p>
                  </div>
                  <div>
                    <p className="text-[28px] font-semibold leading-none tracking-tight">1,000+</p>
                    <p className="mt-1.5 text-[10.5px] uppercase tracking-wide text-body">
                      Cases Completed
                    </p>
                  </div>
                  <div>
                    <p className="text-[28px] font-semibold leading-none tracking-tight">5L+</p>
                    <p className="mt-1.5 text-[10.5px] uppercase tracking-wide text-body">
                      Check-ups Facilitated
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.17}>
                <div className="mt-6 space-y-4 text-[14px] leading-relaxed text-body">
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
                    Through his initiative &ldquo;दात हैं… तो बात हैं…..&rdquo;, Dr. Kunal has facilitated
                    over 5,00,000 dental check-ups across Maharashtra, driving awareness about oral
                    health in communities statewide.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

        </Container>
      </section>

      {/* Section 3 — Dr. Kirti Kolhe */}
      <section className="bg-white pb-16 pt-4 md:pb-20">
        <Container>
          <div className="mt-0 grid items-start gap-8 md:grid-cols-[300px_1fr] md:gap-14">
            {/* Photo */}
            <Reveal>
              <div className="overflow-hidden rounded-[24px]">
                <img
                  src="/images/dr-kirti-kolhe-standing.jpg"
                  alt="Dr. Kirti Kolhe"
                  className="aspect-[3/4] w-full object-cover object-top"
                />
              </div>
            </Reveal>

            {/* Info */}
            <div className="pt-1">
              <Reveal delay={0.07}>
                <h2 className="text-[28px] font-medium leading-tight tracking-tight md:text-[36px]">
                  Dr. Kirti Kolhe, BDS
                </h2>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-sage-dark">
                  Consultant Dental Surgeon &middot; Laser Dentist &middot; Co-Founder &amp; Director
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="mt-6 flex flex-wrap gap-8 border-y border-line py-5">
                  <div>
                    <p className="text-[28px] font-semibold leading-none tracking-tight">BDS</p>
                    <p className="mt-1.5 text-[10.5px] uppercase tracking-wide text-body">
                      Dental Surgeon
                    </p>
                  </div>
                  <div>
                    <p className="text-[28px] font-semibold leading-none tracking-tight">3</p>
                    <p className="mt-1.5 text-[10.5px] uppercase tracking-wide text-body">
                      Clinic Locations
                    </p>
                  </div>
                  <div>
                    <p className="text-[28px] font-semibold leading-none tracking-tight">Laser+</p>
                    <p className="mt-1.5 text-[10.5px] uppercase tracking-wide text-body">
                      Advanced Certified
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.17}>
                <div className="mt-6 space-y-4 text-[14px] leading-relaxed text-body">
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
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Laser Dentistry", "Cosmetic Dentistry", "Preventive Dentistry", "Pediatric Dental Care", "Gum Care & Smile Enhancement"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-sage/15 px-3 py-1 text-[11px] font-medium text-sage-dark"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

        </Container>
      </section>

      {/* Section 4 — Philosophy */}
      <section className="bg-white pb-16 md:pb-24">
        <Container>
          <Reveal>
            <SectionLabel>Our Philosophy</SectionLabel>
            <h2 className="mt-4 text-[30px] font-medium tracking-tight md:text-[36px]">
              दात हैं… तो बात हैं…..
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
                    <h3 className="text-[13px] font-semibold leading-tight">{loc.name}</h3>
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
