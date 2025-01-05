import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sabrísia Confecção",
  description: "Sabrísia Confecção oferece moda feminina, masculina e infantil exclusiva, elegante e moderna, além de multimarcas. Explore nossa coleção de vestidos, saias, calças, blusas e acessórios feitos com alta qualidade. Compre online e desfrute de promoções especiais. Sabrísia Confecção - Inspirada em você.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
