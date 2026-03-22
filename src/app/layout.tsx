import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZHM Real Estate – Top Real Estate Company in Dubai",
  description: "ZHM Real Estate LLC is one of the top real estate agencies in Dubai, offering premium properties for buy, sell, and rent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1 w-full bg-white text-foreground">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
