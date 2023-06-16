import Header from '@/app/components/header';
import Sidebar from '@/app/components/sidebar';
import Footer from '@/app/footer';
import '@/style/reset.css';
import '@/style/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <title>Blog Title</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        <div className="main-content">
          <Sidebar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
