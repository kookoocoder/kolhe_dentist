import { AboutContent } from "@/components/about/about-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Dr. Kolhe's Dental Clinic",
  description:
    "Dr. Kolhe's Dental Clinic is a leading dental clinic with locations in Ahmednagar (Ahilyanagar) and Pune, led by Dr. Kunal Kolhe (MDS, Prosthodontist & Implantologist) and Dr. Kirti Kolhe (BDS, Laser Dentist). Specialising in laser dentistry, dental implants, full mouth rehabilitation, and comprehensive oral care.",
}

export default function AboutPage() {
  return <AboutContent />
}
