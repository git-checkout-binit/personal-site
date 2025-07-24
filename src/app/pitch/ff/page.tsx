import { FantasyFootballPitchPresentation } from '@/components/FantasyFootballPitchPresentation';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Fantasy Football Playoff Revolution",
  description: "A revolutionary fantasy football playoff format that makes every week matter and eliminates luck-based outcomes.",
  openGraph: {
    title: "🏈 Fantasy Football Playoff Revolution",
    description: "A revolutionary fantasy football playoff format that makes every week matter and eliminates luck-based outcomes.",
    type: 'website',
    siteName: "FF Playoff Concept",
  },
  twitter: {
    card: 'summary',
    title: "🏈 Fantasy Football Playoff Revolution", 
    description: "A revolutionary fantasy football playoff format that makes every week matter and eliminates luck-based outcomes.",
  },
}

export default function FantasyFootballPitchPage() {
  return <FantasyFootballPitchPresentation />;
}