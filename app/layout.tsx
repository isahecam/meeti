import { Metadata } from "next"

import "./globals.css"
import { Geist, Geist_Mono } from "next/font/google"

import { cn } from "~/lib/utils"
import { Toaster } from "~/shared/components/ui/sonner"
import { ThemeProvider } from "~/shared/providers/theme-provider"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: {
    template: "%s | Meeti",
    default: "Meeti",
  },
  description: "Crea y gestiona tus reuniones y/o comunidades para compartir lo que más te gusta con Meeti",
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={cn("antialiased", fontSans.variable, "font-mono", geistMono.variable)}>
      <body>
        <ThemeProvider>
          {children}
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
