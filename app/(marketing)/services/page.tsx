import { ClinicsContent } from "@/components/clinics/clinics-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Clinics | Dr. Kolhe's Dental Clinic",
  description: "Explore Dr. Kolhe's three dental clinics in Ahmednagar, Viman Nagar, and Kharadi.",
}

export default function ServicesPage() {
  return <ClinicsContent />
}
