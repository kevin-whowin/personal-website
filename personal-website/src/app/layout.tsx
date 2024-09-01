import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'eva-icons/style/eva-icons.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Your Portfolio',
  description: 'Welcome to my portfolio website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>

    </html>
  );
}
