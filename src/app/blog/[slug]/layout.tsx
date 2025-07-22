export function generateStaticParams() {
  return [
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