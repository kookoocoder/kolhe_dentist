import type { Metadata } from "next"
import { ServicesContent } from "@/components/services/services-content"

export const metadata: Metadata = {
  title: "Dental Services in Helsinki | Northgate Family Dental",
  description:
    "Comprehensive, gentle dentistry, from routine check-ups to cosmetic treatments. Transparent pricing, no surprises.",
}

export default function ServicesPage() {
  return <ServicesContent />
}
