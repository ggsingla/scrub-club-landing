import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans, Signika } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const signika = Signika({
  subsets: ['latin'],
  variable: '--font-signika',
  weight: ['400', '500', '600', '700'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: "NoScrubs.io - Fresh Laundry, 4-Hour Turnaround",
  description: "Premium laundry service with 4-hour turnaround. Save with membership, service for individuals and businesses in Austin and Houston.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${signika.variable} antialiased font-sans bg-background text-foreground min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

