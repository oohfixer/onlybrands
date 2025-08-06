// ============================================
// app/layout.tsx - Root Layout
// ============================================
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://onlybrands.oohfixer.com'),
  title: 'OnlyBrands - The Future of Influencer Marketing',
  description: 'Revolutionary reverse bidding platform where influencers compete for your campaigns. Get better results, lower costs, and authentic partnerships.',
  keywords: ['influencer marketing', 'reverse bidding', 'brand campaigns', 'marketing platform'],
  authors: [{ name: 'OnlyBrands' }],
  creator: 'OnlyBrands',
  publisher: 'OnlyBrands',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://onlybrands.com',
    siteName: 'OnlyBrands',
    title: 'OnlyBrands - The Future of Influencer Marketing',
    description: 'Revolutionary reverse bidding platform where influencers compete for your campaigns.',
    images: [
      {
        url: '/og-image.jpg', // Add your OG image
        width: 1200,
        height: 630,
        alt: 'OnlyBrands Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OnlyBrands - The Future of Influencer Marketing',
    description: 'Revolutionary reverse bidding platform where influencers compete for your campaigns.',
    creator: '@onlybrands', // Add your Twitter handle
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
