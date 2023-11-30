import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Slider Crafts",
  description: "Powered by Leven Plus",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="ZEUS / DARSHAN PATEL"></meta>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
