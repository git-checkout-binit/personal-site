import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Thoughts & Stories | Binit Shrestha',
  description: 'Stories from building things and the unexpected places where the best lessons happen. Read about software development, personal growth, martial arts training, and more from Brooklyn-based software engineer Binit Shrestha.',
  keywords: 'blog, software engineering, personal growth, martial arts, travel, React, full-stack development, Brooklyn tech, Muay Thai, fantasy football, product development',
  authors: [{ name: 'Binit Shrestha' }],
  openGraph: {
    title: 'Blog - Thoughts & Stories | Binit Shrestha',
    description: 'Stories from building things and the unexpected places where the best lessons happen.',
    url: 'https://binshr.me/blog',
    siteName: 'Binit Shrestha - Software Engineer',
    images: [
      {
        url: 'https://binshr.me/images/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Binit Shrestha Blog',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Thoughts & Stories | Binit Shrestha',
    description: 'Stories from building things and the unexpected places where the best lessons happen.',
    images: ['https://binshr.me/images/hero-bg.jpg'],
    creator: '@binitshrestharealdeal',
  },
  alternates: {
    canonical: 'https://binshr.me/blog',
  },
};