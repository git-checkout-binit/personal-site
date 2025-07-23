import { Metadata } from 'next';

const blogPosts = {
  'muay-thai-bangkok-fight-camp': {
    title: 'What I Learned Living in a Bangkok Muay Thai Fight Camp',
    description: 'How I accidentally joined a Muay Thai fight camp in Bangkok during a solo backpacking trip. Three lessons learned from training with real fighters including Petchmorakot Petchyindee in sweltering heat.',
    date: '2025-06-15',
    author: 'Binit Shrestha',
    tags: ['Travel', 'Martial Arts', 'Personal Growth', 'Bangkok', 'Challenge', 'Muay Thai', 'Training'],
    readingTime: '6 min read',
    image: '/images/muay-thai-group.jpg'
  },
  'nfl-fantasy-spreadsheet-to-web': {
    title: 'From Spreadsheet Chaos to Web Platform: Building NFL Playoff Fantasy',
    description: 'The story of building a fantasy football platform for NFL playoffs after discovering nothing like it exists. From complex spreadsheet formulas to a full-stack web application with React and Node.js.',
    date: '2025-03-08',
    author: 'Binit Shrestha',
    tags: ['React', 'Full-stack', 'Sports Data', 'Product Development', 'Node.js', 'Fantasy Football', 'Web Development'],
    readingTime: '8 min read',
    image: '/images/nfl-fantasy-pff.webp'
  }
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts[resolvedParams.slug as keyof typeof blogPosts];
  
  if (!post) {
    return {
      title: 'Blog Post Not Found | Binit Shrestha',
      description: 'The requested blog post could not be found.',
    };
  }

  const baseUrl = 'https://binshr.me';
  const url = `${baseUrl}/blog/${resolvedParams.slug}`;

  return {
    title: `${post.title} | Binit Shrestha`,
    description: post.description,
    authors: [{ name: post.author }],
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.description,
      url: url,
      siteName: 'Binit Shrestha - Software Engineer',
      images: [
        {
          url: `${baseUrl}${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`${baseUrl}${post.image}`],
      creator: '@binitshrestharealdeal',
    },
    alternates: {
      canonical: url,
    },
  };
}

export function generateStaticParams() {
  return [
    {
      slug: 'muay-thai-bangkok-fight-camp',
    },
    {
      slug: 'nfl-fantasy-spreadsheet-to-web',
    },
  ];
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}