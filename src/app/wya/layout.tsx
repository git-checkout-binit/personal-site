import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Binit's Calendar - Private Access",
  description: "Where I'll be and what I'm up to - private calendar access required",
  openGraph: {
    title: "Binit's Calendar",
    description: "Where I'll be and what I'm up to - private calendar access required",
    type: 'website',
    siteName: "Binit's Calendar",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Binit's Calendar",
    description: "Where I'll be and what I'm up to - private calendar access required",
  },
}

export default function WyaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}