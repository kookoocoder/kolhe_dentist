import { Container, Reveal, SectionLabel } from "@/components/site/ui"
import { LOCATIONS, SERVICES } from "@/lib/data"
import { ArrowRight, ArrowLeft, Clock, MapPin, Phone } from "lucide-react"
import { WhatsAppIcon } from "@/components/site/social-icons"
import { PillButton } from "@/components/site/ui"
import Link from "next/link"

const CLINIC_IMAGES = ["/images/clinic-room.jpg", "/images/practice-reception.jpg", "/images/practice-lounge.jpg"]

function ClinicCard({ clinic, index }: { clinic: (typeof LOCATIONS)[number]; index: number }) {
  return (
    <Reveal delay={index * 0.08}>
      <Link href={`/clinics/${clinic.slug}`} className="group block overflow-hidden rounded-[22px] bg-cream transition-transform duration-300 hover:-translate-y-1">
        <div className="relative overflow-hidden">
          <img src={CLINIC_IMAGES[index]} alt={`${clinic.name} interior`} className="aspect-[1.5] w-full object-cover outline outline-1 outline-black/10 transition-transform duration-700 group-hover:scale-105" />
          <span className="absolute bottom-4 right-4 flex size-10 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:rotate-45">
            <ArrowRight className="size-4" />
          </span>
        </div>
        <div className="p-6">
          <SectionLabel>Clinic {String(index + 1).padStart(2, "0")}</SectionLabel>
          <h2 className="mt-3 text-[22px] font-medium leading-tight text-wrap-balance">{clinic.name}</h2>
          <div className="mt-5 space-y-2.5 text-[13px] leading-relaxed text-body">
            <p className="flex gap-2"><MapPin className="mt-0.5 size-4 shrink-0 text-sage-dark" />{clinic.address}</p>
            <p className="flex gap-2"><Phone className="mt-0.5 size-4 shrink-0 text-sage-dark" />{clinic.phone}</p>
            <p className="flex gap-2"><Clock className="mt-0.5 size-4 shrink-0 text-sage-dark" />{clinic.hours}</p>
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
          <h1 className="mt-5 max-w-2xl text-[38px] font-medium leading-[1.05] tracking-[-0.02em] md:text-[56px]">Expert care, wherever you are</h1>
          <p className="mt-5 max-w-xl text-[14px] leading-relaxed text-body">Explore our three clinics across Ahmednagar and Pune. Choose a location to see its services, details, and how to get in touch.</p>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {LOCATIONS.map((clinic, index) => <ClinicCard key={clinic.slug} clinic={clinic} index={index} />)}
        </div>
      </Container>
    </section>
  )
}

export function ClinicDetail({ clinic }: { clinic: (typeof LOCATIONS)[number] }) {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-cream pb-14 pt-12 md:pb-20 md:pt-16">
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-[58%] md:block"><img src="/images/clinic-room.jpg" alt="" className="size-full object-cover opacity-70 blur-[1px]" /><div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/80 to-cream/10" /></div>
        <Container>
          <Reveal>
            <Link href="/services" className="inline-flex items-center gap-2 text-[12px] text-body hover:text-ink"><ArrowLeft className="size-4" />All clinics</Link>
            <SectionLabel className="mt-8">{clinic.name}</SectionLabel>
            <h1 className="mt-4 max-w-3xl text-[38px] font-medium leading-[1.05] tracking-[-0.02em] md:text-[64px]">Care tailored to your smile</h1>
            <div className="mt-6 flex max-w-xl flex-wrap gap-x-6 gap-y-2 text-[13px] text-body"><span className="flex gap-2"><MapPin className="size-4 shrink-0 text-sage-dark" />{clinic.address}</span><a href={clinic.phoneHref} className="flex gap-2 hover:text-ink"><Phone className="size-4 text-sage-dark" />{clinic.phone}</a></div>
            <div className="mt-8 flex flex-wrap gap-3"><PillButton href={clinic.googleMaps} variant="sage">Get Directions</PillButton><a href={`https://wa.me/${clinic.phone.replace(/[^\\d]/g, "")}?text=${encodeURIComponent(`Hi, I'd like to contact ${clinic.name}.`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#25D366] px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-white transition-[background-color,transform] hover:bg-[#128C7E] active:scale-[0.96]"><WhatsAppIcon className="size-4" />WhatsApp this clinic</a></div>
          </Reveal>
        </Container>
      </section>
      <section className="bg-white py-16 md:py-24">
        <Container>
          <Reveal><SectionLabel>Services at this clinic</SectionLabel><h2 className="mt-4 text-[30px] font-medium tracking-tight md:text-[42px]">Everything you need for a healthy smile</h2></Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, index) => <Reveal key={service.slug} delay={0.04 * (index % 4)}><Link href={`/services/${service.slug}`} className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-line bg-white transition-shadow duration-300 hover:shadow-lg hover:shadow-black/5"><img src={service.image} alt={service.title} className="aspect-[4/2.8] w-full object-cover outline outline-1 outline-black/10 transition-transform duration-700 group-hover:scale-105" /><div className="flex flex-1 flex-col p-5"><h3 className="text-[15px] font-semibold">{service.title}</h3><p className="mt-2 text-[12.5px] leading-relaxed text-body line-clamp-3">{service.description}</p><span className="mt-auto flex justify-end pt-5"><span className="flex size-8 items-center justify-center rounded-full bg-cream group-hover:bg-sage"><ArrowRight className="size-3.5 group-hover:text-white" /></span></span></div></Link></Reveal>)}
          </div>
        </Container>
      </section>
    </>
  )
}
