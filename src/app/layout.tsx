import React from 'react';
import type { Metadata, Viewport } from 'next';
import { DM_Sans } from 'next/font/google';
import '../styles/tailwind.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Mohamed Hassanin — Senior Frontend Developer & Software Engineer',
  description: 'Senior Frontend Developer & Software Engineer with 10+ years of experience building scalable web applications, high-performance interfaces, and design systems. MSc in Data Science & AI at FH Joanneum, Graz, Austria.',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} scroll-smooth dark`} suppressHydrationWarning>
      <body className={`${dmSans.className} antialiased bg-background text-foreground`} suppressHydrationWarning>
        {children}
</body>
    </html>
  );
}