import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZHM Real Estate – Top Real Estate Company in Dubai",
  description: "ZHM Real Estate LLC is one of the top real estate agencies in Dubai, offering premium real estate for buy, sell, and rent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <GoogleAnalytics />
        {/* Preload first hero video at highest priority — largest loading win */}
        <link
          rel="preload"
          as="video"
          href="/videos/Burj_Khalifa_in_Dubai_1080p_202607070141.mp4"
          type="video/mp4"
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`} suppressHydrationWarning>
        <Navbar />
        <main className="flex-1 w-full bg-white text-foreground">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

