import Header from '@/app/components/header';
import Head from '@/app/head';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <Head />
      <body>
        <Header />
        <aside>this is side bar</aside>
        {children}
        <footer>I'm footer</footer>
      </body>
    </html>
  );
}
