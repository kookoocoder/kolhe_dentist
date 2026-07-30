import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"

import { ConvexClientProvider } from "./ConvexClientProvider"


const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Dr. Kolhe's Dental Clinic | Laser Dentistry, Implants & Cosmetic Care",
  description:
    "Expert dental care in Ahmednagar & Pune. Laser dentistry, dental implants, full mouth rehabilitation, and cosmetic treatments by Dr. Kunal Kolhe and Dr. Kirti Kolhe.",
  icons: {
    icon: "/logo only without  wordmark.svg",
    shortcut: "/logo only without  wordmark.svg",
    apple: "/logo only without  wordmark.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`antialiased font-sans ${inter.variable}`}>
      <body>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  )
}
