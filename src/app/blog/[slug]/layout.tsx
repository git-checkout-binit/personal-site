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
  return children;
}