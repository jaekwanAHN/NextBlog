import Header from './dashboard/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <body>{children}</body>
    </>
  );
}
