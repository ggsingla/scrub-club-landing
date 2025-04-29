import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans, Signika } from "next/font/google";

const signika = Signika({
  subsets: ['latin'],
  variable: '--font-signika',
  weight: ['400', '500', '600', '700'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: "Scrub club – Landing page",
  description: "Scrub club – Landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${signika.variable} antialiased font-sans bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
