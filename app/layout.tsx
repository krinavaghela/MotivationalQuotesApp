import "./globals.css";

export const metadata = {
  title: "Daily Motivation - Inspirational Quotes",
  description: "Get inspired with daily motivational quotes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


