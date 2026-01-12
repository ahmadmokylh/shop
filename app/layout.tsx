import type { Metadata } from 'next';
import { Almarai } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const almarai = Almarai({
  variable: '--font-almarai',
  weight: ['300', '400', '700', '800'],
  subsets: ['arabic'],
});

export const metadata: Metadata = {
  // metadataBase: new URL("https://your-website.com"), // ضع رابط موقعك بدون / في النهاية

  title: 'مناحل الثنيان',
  description: 'أعسال طبيعية مكفولة من انتاج مناحلنا',

  // Icons
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },

  // 👑 Open Graph — الأفضل لجميع المنصات
  openGraph: {
    title: 'مناحل الثنيان',
    description: 'أعسال طبيعية مكفولة من انتاج مناحلنا',
    url: '/',
    siteName: 'مناحل الثنيان',
    type: 'website',
    locale: 'ar_AR',
    images: [
      {
        url: '/logo2.png',
        secureUrl: '/logo2.png',
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: 'مناحل الثنيان',
      },
    ],
  },

  // 👑 Twitter / X
  twitter: {
    card: 'summary_large_image',
    title: 'مناحل الثنيان',
    description: 'أعسال طبيعية مكفولة من انتاج مناحلنا',
    creator: '@yourXAccount', // اختياري
    images: ['/logo2.png'],
  },

  // 📌 Canonical link (مهم لـ SEO + الظهور الصحيح)
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${almarai.variable}`}>
      <body>
        <Providers>{children}</Providers>
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  );
}
