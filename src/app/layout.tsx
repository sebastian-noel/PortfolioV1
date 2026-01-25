import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Sebastian Noel | Portfolio",
  description: "Software Engineer and Computer Science student at University of Central Florida. View my experience and projects to learn more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.variable}`}>
        <Navbar />
        <main className="min-h-screen pt-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
