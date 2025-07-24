import { AppPitchPresentation } from '@/components/AppPitchPresentation';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Private Travel Calendar App - Concept & Technical Spec",
  description: "A privacy-focused travel calendar app for sharing your location with close friends. Business pitch and technical specification.",
  openGraph: {
    title: "🗺️ Private Travel Calendar App",
    description: "A privacy-focused travel calendar app for sharing your location with close friends. Business pitch and technical specification.",
    type: 'website',
    siteName: "App Concept",
  },
  twitter: {
    card: 'summary',
    title: "🗺️ Private Travel Calendar App", 
    description: "A privacy-focused travel calendar app for sharing your location with close friends. Business pitch and technical specification.",
  },
}

export default function PitchPage() {
  return <AppPitchPresentation />;
}