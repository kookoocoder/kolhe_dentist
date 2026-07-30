import { WhatsAppIcon } from "@/components/site/social-icons"
import { Container, Reveal, SectionLabel } from "@/components/site/ui"
import { PillButton } from "@/components/site/ui"
import { LOCATIONS, SERVICES } from "@/lib/data"
import { ArrowLeft, ArrowRight, Clock, MapPin, Phone } from "lucide-react"
import Link from "next/link"

function ClinicCard({ clinic, index }: { clinic: (typeof LOCATIONS)[number]; index: number }) {
  return (
    <Reveal delay={index * 0.08}>
      <Link
        href={`/clinics/${clinic.slug}`}
        className="group block overflow-hidden rounded-[22px] bg-cream transition-transform duration-300 hover:-translate-y-1"
      >
        <div className="p-6">
          <SectionLabel>Clinic {String(index + 1).padStart(2, "0")}</SectionLabel>
          <h2 className="mt-3 text-[22px] font-medium leading-tight text-wrap-balance">
            {clinic.name}
          </h2>
          <div className="mt-5 space-y-2.5 text-[13px] leading-relaxed text-body">
            <p className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-sage-dark" />
              {clinic.address}
            </p>
            <p className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-sage-dark" />
              {clinic.phone}
            </p>
            <p className="flex gap-2">
              <Clock className="mt-0.5 size-4 shrink-0 text-sage-dark" />
              {clinic.hours}
            </p>
          </div>
        </div>
      </Link>
    </Reveal>
  )
}

export function ClinicsContent() {
  return (
    <section className="bg-white pb-20 pt-12 md:pb-28 md:pt-16">
      <Container>
        <Reveal>
          <SectionLabel>Our Clinics</SectionLabel>
          <h1 className="mt-5 max-w-2xl text-[38px] font-medium leading-[1.05] tracking-[-0.02em] md:text-[56px]">
            Expert care, wherever you are
          </h1>
          <p className="mt-5 max-w-xl text-[14px] leading-relaxed text-body">
            Explore our three clinics across Ahmednagar and Pune. Choose a location to see its
            services, details, and how to get in touch.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {LOCATIONS.map((clinic, index) => (
            <ClinicCard key={clinic.slug} clinic={clinic} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export function ClinicDetail({ clinic }: { clinic: (typeof LOCATIONS)[number] }) {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-cream pb-14 pt-12 md:pb-20 md:pt-16">
        <div className="absolute inset-y-0 right-0 -z-10 w-full md:w-[58%]">
          <img
            src={clinic.heroImage}
            alt={`${clinic.name} interior`}
            className="size-full object-cover opacity-20 md:opacity-100"
          />
          <div className="absolute inset-0 bg-cream/95 md:hidden" />
          <div className="absolute inset-0 hidden bg-gradient-to-r from-cream via-cream/70 to-cream/10 md:block" />
        </div>
        <Container>
          <Reveal>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[12px] text-body hover:text-ink"
            >
              <ArrowLeft className="size-4" />
              All clinics
            </Link>
            <SectionLabel className="mt-8">{clinic.page?.eyebrow ?? clinic.name}</SectionLabel>
            <h1 className="mt-4 max-w-3xl text-[38px] font-medium leading-[1.05] tracking-[-0.02em] md:text-[64px]">
              {clinic.page?.headline ?? "Care tailored to your smile"}
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-body">
              {clinic.page?.intro}
            </p>
            <div className="mt-6 flex max-w-xl flex-wrap gap-x-6 gap-y-2 text-[13px] text-body">
              <span className="flex gap-2">
                <MapPin className="size-4 shrink-0 text-sage-dark" />
                {clinic.address}
              </span>
              <a href={clinic.phoneHref} className="flex gap-2 hover:text-ink">
                <Phone className="size-4 text-sage-dark" />
                {clinic.phone}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <PillButton href={clinic.googleMaps} variant="sage">
                Get Directions
              </PillButton>
              <a
                href={`https://wa.me/${clinic.phone.replace(/[^\\d]/g, "")}?text=${encodeURIComponent(`Hi, I'd like to contact ${clinic.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#25D366] px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-white transition-[background-color,transform] hover:bg-[#128C7E] active:scale-[0.96]"
              >
                <WhatsAppIcon className="size-4" />
                WhatsApp this clinic
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
      <section className="bg-white py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionLabel>Services at this clinic</SectionLabel>
            <h2 className="mt-4 text-[30px] font-medium tracking-tight md:text-[42px]">
              Treatments available here
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.filter((service) => clinic.page?.serviceSlugs.includes(service.slug)).map((service, index) => (
              <Reveal key={service.slug} delay={0.04 * (index % 4)}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-line bg-white px-5 py-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-black/5"
                >
                  <h3 className="text-[15px] font-semibold">{service.title}</h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-body line-clamp-3">
                    {service.description}
                  </p>
                  <span className="mt-auto flex justify-end pt-5">
                    <span className="flex size-8 items-center justify-center rounded-full bg-cream group-hover:bg-sage">
                      <ArrowRight className="size-3.5 group-hover:text-white" />
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          {clinic.page && (
            <div className="mt-20">
              <Reveal>
                <SectionLabel>Why choose us</SectionLabel>
                <ul className="mt-5 grid gap-3 text-[14px] leading-relaxed text-body sm:grid-cols-2 lg:grid-cols-3">
                  {clinic.page.highlights.map((item) => (
                    <li key={item} className="rounded-xl bg-cream px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          )}
          {clinic.page?.audiences && (
            <Reveal>
              <div className="mt-16 rounded-[22px] bg-cream p-7 md:p-10">
                <SectionLabel>Who we serve</SectionLabel>
                <ul className="mt-5 grid gap-3 text-[14px] text-body md:grid-cols-2">
                  {clinic.page.audiences.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}
          {clinic.page?.reasons && (
            <Reveal>
              <div className="mt-16">
                <SectionLabel>Why patients travel to us</SectionLabel>
                <ul className="mt-5 grid gap-3 text-[14px] text-body md:grid-cols-2">
                  {clinic.page.reasons.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}
          {clinic.page?.process && (
            <Reveal>
              <div className="mt-16">
                <SectionLabel>Simple treatment process</SectionLabel>
                <ol className="mt-5 grid gap-4 text-[14px] text-body md:grid-cols-5">
                  {clinic.page.process.map((item, index) => (
                    <li key={item}>
                      <span className="text-lg font-medium text-sage-dark">0{index + 1}</span>
                      <p className="mt-2 leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          )}
          {clinic.page?.commitment && (
            <Reveal>
              <div className="mt-16">
                <SectionLabel>Our commitment to quality</SectionLabel>
                <ul className="mt-5 grid gap-3 text-[14px] text-body sm:grid-cols-2 md:grid-cols-3">
                  {clinic.page.commitment.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}

        </Container>
      </section>
    </>
  )
}
