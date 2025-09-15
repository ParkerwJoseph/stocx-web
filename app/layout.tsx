import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Stocx AI - Trade Smarter with AI-Powered Insights",
  description:
    "Revolutionize your trading strategy with advanced machine learning algorithms that analyze market patterns and deliver real-time insights directly to your mobile device.",
  keywords:
    "AI trading, stock market, cryptocurrency, machine learning, trading app, market analysis, financial technology",
  authors: [{ name: "Stocx AI Team" }],
  creator: "Stocx AI",
  publisher: "Stocx AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://stocx-ai.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Stocx AI - Trade Smarter with AI-Powered Insights",
    description:
      "Revolutionize your trading strategy with advanced machine learning algorithms that analyze market patterns and deliver real-time insights.",
    url: "https://stocx-ai.vercel.app",
    siteName: "Stocx AI",
    images: [
      {
        url: "/placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "Stocx AI - AI-Powered Trading Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stocx AI - Trade Smarter with AI-Powered Insights",
    description: "Revolutionize your trading strategy with advanced machine learning algorithms.",
    images: ["/placeholder.jpg"],
    creator: "@stocxai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
