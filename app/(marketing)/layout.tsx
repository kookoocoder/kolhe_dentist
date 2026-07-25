import type { Metadata } from "next"
import { Footer } from "@/components/site/footer"
import { Navbar } from "@/components/site/navbar"

export const metadata: Metadata = {
  title: {
    default: "Dr. Kolhe's Dental Clinic | Ahmednagar & Pune",
    template: "%s | Dr. Kolhe's Dental Clinic",
  },
  description:
    "Leading dental clinic with locations in Ahmednagar and Pune. Expert care in laser dentistry, dental implants, full mouth rehabilitation, and cosmetic dentistry by Dr. Kunal Kolhe and Dr. Kirti Kolhe.",
}

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
