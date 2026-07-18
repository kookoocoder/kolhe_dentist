import { HomeHero } from "@/components/home/hero"
import { Philosophy } from "@/components/home/philosophy"
import { ServicesCarousel } from "@/components/home/services-carousel"
import { DoctorPreview } from "@/components/home/doctor-preview"
import { WhyUs } from "@/components/home/why-us"
import { Testimonials } from "@/components/home/testimonials"
import { ContactBlock } from "@/components/home/contact-block"

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <Philosophy />
      <ServicesCarousel />
      <DoctorPreview />
      <WhyUs />
      <Testimonials />
      <ContactBlock />
    </>
  )
}
