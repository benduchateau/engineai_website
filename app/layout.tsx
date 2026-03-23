import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "./components/JsonLd";
import { Analytics } from "@vercel/analytics/next";

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
  metadataBase: new URL("https://engineai.co.nz"),
  title: {
    default: "Engine AI — AI Consulting & Agent Development | New Zealand",
    template: "%s | Engine AI",
  },
  description:
    "Engine AI Consulting Limited helps NZ businesses discover, build, and deploy AI agents that solve real operational problems. Founded by two enterprise technology veterans with 2,000+ hours of hands-on AI development. Based in Auckland, New Zealand.",
  keywords: [
    "AI consulting New Zealand",
    "AI consultancy Auckland",
    "AI agents NZ",
    "AI agent development",
    "business AI New Zealand",
    "AI automation New Zealand",
    "artificial intelligence consulting NZ",
    "Engine AI",
    "Engine AI Consulting",
    "Claude for Teams",
    "Claude Co-Work deployment",
    "Claude Code setup",
    "Claude Chat for business",
    "deploy Claude for business NZ",
    "Anthropic Claude consulting",
    "Microsoft Copilot deployment NZ",
    "Copilot Studio agents",
    "Copilot Studio custom agents NZ",
    "Microsoft 365 Copilot setup",
    "M365 Copilot deployment",
    "OpenClaw",
    "OpenClaw AI orchestration",
    "open source AI orchestration",
    "self-hosted AI agents",
    "AI orchestration platform NZ",
    "Agent-as-a-Service",
    "AaaS",
    "Sprint Build Cards",
    "custom dashboards NZ",
    "business automation NZ",
    "AI workflow automation",
    "bespoke software development NZ",
  ],
  authors: [
    { name: "Ben du Chateau" },
    { name: "Joe Ward" },
  ],
  creator: "Engine AI Consulting Limited",
  publisher: "Engine AI Consulting Limited",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Engine AI — AI Consulting & Agent Development | New Zealand",
    description:
      "NZ AI consultancy helping businesses discover, build, and deploy AI agents. Agent-as-a-Service model. Based in Auckland.",
    url: "https://engineai.co.nz",
    siteName: "Engine AI",
    type: "website",
    locale: "en_NZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engine AI — AI Consulting & Agent Development | New Zealand",
    description:
      "NZ AI consultancy helping businesses discover, build, and deploy AI agents. Agent-as-a-Service model. Based in Auckland.",
  },
  alternates: {
    canonical: "https://engineai.co.nz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "-6_tPgTEl4rt0ZULvlvs6DGchNqLi6ldCbK-cC7Qngc",
    other: { "msvalidate.01": "CEE42F8C88162777387011AA5C49BE5E" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
