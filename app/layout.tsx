import type { Metadata } from "next";
import { Cinzel, Spectral } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Odyssey | A Mythic Voyage",
  description: "An immersive scroll-driven journey through the epic of The Odyssey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          cinzel.variable,
          spectral.variable,
          "antialiased bg-aegean-900 text-parchment-100 min-h-screen font-serif"
        )}
      >
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
