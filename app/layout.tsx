import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Engine AI — AI Orchestration for New Zealand Business",
  description:
    "Engine AI helps NZ businesses discover, build, and deploy AI agents that solve real operational problems. Founded by two enterprise technology veterans with 2,000+ hours of hands-on AI development.",
  keywords:
    "AI consulting NZ, AI agents New Zealand, business AI, AI orchestration, AI for SME, artificial intelligence New Zealand",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Engine AI — AI Orchestration for New Zealand Business",
    description:
      "Engine AI helps NZ businesses discover, build, and deploy AI agents that solve real operational problems.",
    url: "https://engineai.co.nz",
    siteName: "Engine AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
