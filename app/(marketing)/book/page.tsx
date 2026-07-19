import type { Metadata } from "next"
import { BookContent } from "@/components/book/book-content"

export const metadata: Metadata = {
  title: "Book an Appointment | Northgate Family Dental",
  description:
    "Request an appointment with Northgate Family Dental in Helsinki. We'll confirm by phone or email within one business day.",
}

export default function BookPage() {
  return <BookContent />
}
