import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'IkigaiE — Find Your Reason for Being',
  description: "India's premier personal development and online education institute.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
