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
  description: "Explore a elegância e o conforto das coleções exclusivas da Sabrísia Confecção. Descubra nossas novidades em multimarcas e fardamentos de todos os tipos, perfeitas para qualquer ocasião. Cada peça é inspirada em você!",
  keywords: ["Sabrísia Confecção", "moda", "moda feminina", "moda masculina", "moda infantil", "coleções exclusivas", "multimarcas", "fardas", "fardamentos", "fardamento escolar", "conforto", "elegância", "looks", "ropa de qualidade", "moda para qualquer ocasião"]
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
