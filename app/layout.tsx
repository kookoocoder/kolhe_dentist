import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"
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
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  )
}
