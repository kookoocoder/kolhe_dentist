import { BookContent } from "@/components/book/book-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book an Appointment | Dr. Kolhe's Dental Clinic",
  description:
    "Request an appointment with Dr. Kolhe's Dental Clinic in Ahmednagar or Pune. We'll confirm by phone or email within one business day.",
}

export default function BookPage() {
  return <BookContent />
}
