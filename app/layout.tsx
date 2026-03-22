import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "./components/JsonLd";

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
    "AI agents NZ",
    "AI consultancy Auckland",
    "business AI New Zealand",
    "AI orchestration NZ",
    "Microsoft Copilot deployment NZ",
    "Claude AI for business",
    "AI automation New Zealand",
    "AI agent development",
    "artificial intelligence consulting NZ",
    "Engine AI",
    "Engine AI Consulting",
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
    // TODO: Add these after registering with each service
    // google: "your-google-verification-code",
    // other: { "msvalidate.01": "your-bing-verification-code" },
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
      </body>
    </html>
  );
}
