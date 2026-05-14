import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Chandra Kiran Narala | Portfolio',
  description: 'FPGA Engineer, Hardware-Aware Software Engineer, and Low-Latency Systems Engineer portfolio.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
