import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Zernosh Haider | Mobile & Cross-Platform Developer (Flutter Focus)',
  description: 'Production-ready portfolio of Zernosh Haider, specialized in high-performance Flutter mobile applications, Clean BLoC/Riverpod Architecture, and Apple-inspired UI/UX.',
  icons: {
    icon: '/zernoshlogo.png',
    shortcut: '/zernoshlogo.png',
    apple: '/zernoshlogo.png',
  },
  keywords: [
    'Zernosh Haider',
    'Flutter Developer',
    'Mobile Developer',
    'Cross-Platform Developer',
    'Dart',
    'iOS Developer',
    'Android Developer',
    'BLoC Architecture',
    'Firebase',
    'React Next.js Portfolio'
  ],
  authors: [{ name: 'Zernosh Haider' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/zernoshlogo.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/zernoshlogo.png" />
      </head>
      <body className={`${outfit.variable} font-sans bg-obsidian text-white antialiased selection:bg-cyan-500/30 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
