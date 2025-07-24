import { AppPitchPresentation } from '@/components/AppPitchPresentation';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "IMY - Private Travel Calendar App",
  description: "IMY: A privacy-focused travel calendar app for sharing your location with close friends. Business pitch and technical specification.",
  openGraph: {
    title: "🗺️ IMY - Private Travel Calendar",
    description: "IMY: A privacy-focused travel calendar app for sharing your location with close friends. Business pitch and technical specification.",
    type: 'website',
    siteName: "IMY App Concept",
  },
  twitter: {
    card: 'summary',
    title: "🗺️ IMY - Private Travel Calendar", 
    description: "IMY: A privacy-focused travel calendar app for sharing your location with close friends. Business pitch and technical specification.",
  },
}

export default function PitchPage() {
  return <AppPitchPresentation />;
}