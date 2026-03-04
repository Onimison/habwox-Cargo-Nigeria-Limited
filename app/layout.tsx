import type {Metadata} from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css'; // Global styles

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: 'Premium UK Goods Distributor | Abuja, Nigeria',
  description: 'Supplying supermarkets and retail outlets in Abuja with quality imported UK goods.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="antialiased">{children}</body>
    </html>
  );
}
