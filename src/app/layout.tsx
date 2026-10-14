import type { Metadata } from 'next';
import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { RouteTransition } from '@/components/RouteTransition';
import { site } from '@/lib/content';

const sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal'],
  variable: '--font-sans',
  display: 'swap'
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal'],
  variable: '--font-mono',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Automation & Systems Engineer`,
    template: `%s — ${site.name}`
  },
  description: site.claim,
  keywords: [
    'automation engineer',
    'full-stack developer',
    'n8n',
    'AI integration',
    'Raspberry Pi',
    'Manila',
    'remote'
  ],
  authors: [{ name: site.name, url: site.github }],
  openGraph: {
    type: 'website',
    title: `${site.name} — Automation & Systems Engineer`,
    description: site.claim,
    url: site.url,
    siteName: site.name
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — Automation & Systems Engineer`,
    description: site.claim
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-paper font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <RouteTransition>{children}</RouteTransition>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
