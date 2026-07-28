import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"
import { ConvexClientProvider } from "./ConvexClientProvider"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Dr. Kolhe's Dental Clinic | Laser Dentistry, Implants & Cosmetic Care",
  description:
    "Expert dental care in Ahmednagar & Pune. Laser dentistry, dental implants, full mouth rehabilitation, and cosmetic treatments by Dr. Kunal Kolhe and Dr. Kirti Kolhe.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("antialiased font-sans", inter.variable)}>
      <body>
        <ThemeProvider>
          <ConvexClientProvider>{children}</ConvexClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
