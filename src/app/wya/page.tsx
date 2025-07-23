import './calendar.css';
import { CalendarAuth } from '@/components/CalendarAuth';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Binit's Calendar - Private Access",
  description: "Where I'll be and what I'm up to - races, celebrations, and travels. Private calendar access required.",
  openGraph: {
    title: "🗓️ Binit's Calendar",
    description: "Where I'll be and what I'm up to - races, celebrations, and travels. Private access required.",
    type: 'website',
    siteName: "Binit's Calendar",
  },
  twitter: {
    card: 'summary',
    title: "🗓️ Binit's Calendar", 
    description: "Where I'll be and what I'm up to - races, celebrations, and travels. Private access required.",
  },
}

export default function WyaPage() {
  return <CalendarAuth />;
}