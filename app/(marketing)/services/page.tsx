import { ServicesContent } from "@/components/services/services-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dental Services | Dr. Kolhe's Dental Clinic",
  description:
    "Expert dental services in Ahmednagar & Pune. Laser dentistry, implants, cosmetic treatments, and more by Dr. Kunal Kolhe and Dr. Kirti Kolhe. Transparent pricing, no surprises.",
}

export default function ServicesPage() {
  return <ServicesContent />
}
