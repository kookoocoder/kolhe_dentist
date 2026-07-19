import { ServiceDetail } from "@/components/services/service-detail"
import { SERVICES } from "@/lib/data"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: `${service.short} | Northgate Family Dental, Helsinki`,
    description: service.description,
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) notFound()
  return <ServiceDetail service={service} />
}
