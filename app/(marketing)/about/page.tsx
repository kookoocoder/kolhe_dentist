import { AboutContent } from "@/components/about/about-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Dr. Sarah Lindgren | Northgate Family Dental",
  description:
    "Meet Dr. Sarah Lindgren and the Northgate Family Dental team. Gentle, unhurried dentistry in Helsinki since 2008.",
}

export default function AboutPage() {
  return <AboutContent />
}
