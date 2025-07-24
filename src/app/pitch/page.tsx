import { PitchIndex } from '@/components/PitchIndex';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Project Pitches - Concept Hub",
  description: "A collection of app concepts and project pitches with business and technical specifications.",
  openGraph: {
    title: "💡 Project Pitches - Concept Hub",
    description: "A collection of app concepts and project pitches with business and technical specifications.",
    type: 'website',
    siteName: "Project Pitches",
  },
  twitter: {
    card: 'summary',
    title: "💡 Project Pitches - Concept Hub", 
    description: "A collection of app concepts and project pitches with business and technical specifications.",
  },
}

export default function PitchIndexPage() {
  return <PitchIndex />;
}