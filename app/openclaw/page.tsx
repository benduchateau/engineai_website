import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "../components/AnimatedSection";
import Logo from "../components/Logo";

export const metadata: Metadata = {
  title: "OpenClaw — Open Source AI Orchestration Platform | Engine AI NZ",
  description:
    "OpenClaw is an open-source AI operating system for deploying, managing, and orchestrating AI agents on your own infrastructure. Self-hosted AI agent management with a single gateway. Built and deployed by Engine AI in Auckland, New Zealand.",
  keywords: [
    "OpenClaw",
    "OpenClaw AI",
    "OpenClaw AI orchestration",
    "open source AI orchestration",
    "AI orchestration platform",
    "self-hosted AI agents",
    "AI agent management",
    "AI operating system",
    "AI gateway",
    "deploy AI agents on-premise",
    "open source AI platform NZ",
    "AI infrastructure New Zealand",
    "Engine AI OpenClaw",
  ],
  openGraph: {
    title: "OpenClaw — Open Source AI Orchestration Platform | Engine AI NZ",
    description:
      "OpenClaw is an open-source AI OS for deploying and orchestrating AI agents on your own infrastructure. Built by Engine AI, Auckland NZ.",
  },
};

const capabilities = [
  {
    num: "01",
    title: "Deploy agents anywhere",
    body: "Run AI agents on your own servers, your own cloud, or a hybrid of both. No vendor lock-in. No data leaving your network unless you say so.",
  },
  {
    num: "02",
    title: "Orchestrate at scale",
    body: "A single gateway that routes, monitors, and manages every AI agent in your business. One place to see what's running, what's working, and what needs attention.",
  },
  {
    num: "03",
    title: "Enterprise-grade security",
    body: "Your data stays yours. OpenClaw runs on your infrastructure with your security policies. API keys, credentials, and business data never touch a third-party server.",
  },
  {
    num: "04",
    title: "Open source, open future",
    body: "No proprietary lock-in. OpenClaw is open source — you can inspect every line, contribute, and adapt it to your needs. Your AI infrastructure belongs to you.",
  },
];

export default function OpenClawPage() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/90 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Logo size={32} color="#e8e8e8" />
            <span
              className="text-lg font-bold tracking-wide uppercase"
              style={{ letterSpacing: "0.08em", color: "#e8e8e8" }}
            >
              Engine AI
            </span>
          </Link>
          <Link
            href="/"
            className="font-mono text-xs text-text-secondary hover:text-white tracking-[0.15em] uppercase transition-colors"
          >
            &larr; Back to home
          </Link>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-32 md:py-44 px-6 bg-bg-primary">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-teal mb-6">
                OpenClaw
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight text-white mb-8">
                AI orchestration for
                <br />
                <span className="text-teal">your agents.</span>
              </h1>
              <p className="text-text-body leading-[1.8] text-lg md:text-xl max-w-2xl">
                OpenClaw is an open-source AI operating system that gives your
                business a single place to deploy, manage, and orchestrate your
                AI agents &mdash; on your own infrastructure, under your control.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* The Problem */}
        <section className="relative py-24 md:py-32 px-6 bg-bg-surface">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-light leading-[1.15] tracking-tight text-white mb-10">
                AI is getting powerful. But who controls it?
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="max-w-[680px] space-y-6 text-text-body leading-[1.8] text-base md:text-lg">
                <p>
                  Right now, most businesses run AI through someone else&apos;s
                  platform. Your data goes to their servers. Your agents run on
                  their infrastructure. Your business logic lives in their
                  ecosystem.
                </p>
                <p>
                  That works until it doesn&apos;t. Until the pricing changes.
                  Until the API terms shift. Until you need to run something
                  sensitive and realise you can&apos;t control where the data goes.
                </p>
                <p>
                  OpenClaw is the alternative. An AI operating system you own,
                  running on infrastructure you control, with every agent in your
                  business managed from one place.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Capabilities */}
        <section className="relative py-24 md:py-32 px-6 bg-bg-primary">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-text-secondary mb-6">
                Capabilities
              </p>
              <h2 className="text-3xl md:text-4xl font-light leading-[1.15] tracking-tight text-white mb-14 max-w-3xl">
                What OpenClaw gives your business.
              </h2>
            </AnimatedSection>

            <div className="space-y-0">
              {capabilities.map((cap, i) => (
                <AnimatedSection key={cap.num} delay={i * 100}>
                  <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-10 md:py-14 border-t border-white/10 group">
                    <div className="shrink-0">
                      <span className="font-mono text-xs text-teal tracking-wider">
                        {cap.num}
                      </span>
                      <h3 className="text-2xl md:text-3xl text-white font-light mt-2 group-hover:translate-x-1 transition-transform duration-500">
                        {cap.title}
                      </h3>
                    </div>
                    <p className="text-text-body leading-[1.7] text-base md:text-lg md:pt-4 max-w-xl">
                      {cap.body}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
              <div className="border-t border-white/10" />
            </div>
          </div>
        </section>

        {/* Current Status */}
        <section className="relative py-24 md:py-32 px-6 bg-bg-surface">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-text-secondary mb-6">
                Where We Are
              </p>
              <h2 className="text-3xl md:text-4xl font-light leading-[1.15] tracking-tight text-white mb-10">
                Early. Moving fast. Real.
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="max-w-[680px] space-y-6 text-text-body leading-[1.8] text-base md:text-lg">
                <p>
                  OpenClaw is in active development. We run it ourselves. The
                  gateway is live, the agent orchestration layer works, and
                  we&apos;re deploying it for real workloads today.
                </p>
                <p>
                  The development is moving at a rapid pace. Every week we&apos;re
                  adding capabilities that bring it closer to something any
                  business can deploy &mdash; securely, reliably, and without
                  needing a team of infrastructure engineers to maintain it.
                </p>
                <p>
                  This isn&apos;t a roadmap promise. It&apos;s a working system
                  that&apos;s getting better every day.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 md:py-32 px-6 bg-bg-primary">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-light leading-[1.15] tracking-tight text-white mb-6">
                Interested in running OpenClaw for your business?
              </h2>
              <p className="text-text-body leading-[1.8] text-base md:text-lg mb-10 max-w-xl mx-auto">
                We&apos;re working with early partners who want to own their AI
                infrastructure from day one. If that sounds like you, let&apos;s
                talk.
              </p>
              <a
                href="/#contact"
                className="inline-block bg-gold text-black font-semibold px-8 py-4 rounded text-base hover:brightness-110 transition-all duration-300"
              >
                Book a Discovery Call
              </a>
            </AnimatedSection>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border bg-bg-primary">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Logo size={40} color="#e8e8e8" />
              <span
                className="text-2xl font-bold tracking-wide uppercase"
                style={{ letterSpacing: "0.08em", color: "#e8e8e8" }}
              >
                Engine AI
              </span>
            </div>
            <p className="text-text-muted text-[13px]">Auckland, New Zealand</p>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 text-[13px] text-text-muted">
            <Link href="/" className="hover:text-white transition-colors">
              engineai.co.nz
            </Link>
            <a
              href="mailto:sales@engineai.co.nz"
              className="hover:text-white transition-colors"
            >
              sales@engineai.co.nz
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
