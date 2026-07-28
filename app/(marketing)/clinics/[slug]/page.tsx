import { ClinicDetail } from "@/components/clinics/clinics-content"
import { LOCATIONS } from "@/lib/data"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return LOCATIONS.map((clinic) => ({ slug: clinic.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const clinic = LOCATIONS.find((location) => location.slug === slug)
  return clinic ? { title: `${clinic.name} | Dr. Kolhe's Dental Clinic` } : {}
}

export default async function ClinicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const clinic = LOCATIONS.find((location) => location.slug === slug)
  if (!clinic) notFound()
  return <ClinicDetail clinic={clinic} />
}
