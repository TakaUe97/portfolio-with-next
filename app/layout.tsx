import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageTransition from "./components/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PORTFOLIO with Next.js14",
  description: "PORTFOLIO with Next.js14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-gradient-to-r from-slate-300 to-slate-400 font-mono`}>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
