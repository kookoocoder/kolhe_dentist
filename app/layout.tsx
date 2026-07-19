import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"
import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { cn } from "@/lib/utils"
import { ConvexClientProvider } from "./ConvexClientProvider"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Northgate Family Dental | Gentle Dental Care in Helsinki",
  description:
    "Gentle, unhurried dentistry for the whole family in Helsinki. New patients welcome, same-week appointments.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn("antialiased font-sans", inter.variable)}>
      <body className="bg-white text-ink">
        <ConvexClientProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ConvexClientProvider>
      </body>
    </html>
  )
}
