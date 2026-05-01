import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Motalib Hossain - Full Stack Developer',
  description: 'Modern portfolio showcasing web development, design, and creative solutions',
  keywords: ['Portfolio', 'Developer', 'React', 'Next.js', 'Web Design'],
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-dark-900 text-gray-100">
        {children}
      </body>
    </html>
  );
}
