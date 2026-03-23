import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "../components/AnimatedSection";
import Logo from "../components/Logo";

export const metadata: Metadata = {
  title: "Claude for Teams — Deploy Claude Co-Work, Chat & Code | Engine AI NZ",
  description:
    "Engine AI deploys Claude Co-Work, Claude Chat, and Claude Code across your organisation in New Zealand. Custom skills, shared workspaces, autonomous task completion, and team training. Anthropic Claude deployment partner based in Auckland.",
  keywords: [
    "Claude for Teams",
    "Claude Co-Work",
    "Claude Co-Work deployment",
    "Claude Code setup",
    "Claude Code for business",
    "Claude Chat",
    "Anthropic Claude deployment",
    "deploy Claude NZ",
    "Claude AI consulting",
    "Claude custom skills",
    "Claude shared workspaces",
    "AI deployment New Zealand",
    "Engine AI Claude",
  ],
  openGraph: {
    title: "Claude for Teams — Deploy Claude Co-Work, Chat & Code | Engine AI NZ",
    description:
      "Deploy Claude Co-Work, Chat, and Code across your team. Custom skills, shared workspaces, and training. Engine AI, Auckland NZ.",
  },
};

const capabilities = [
  {
    num: "01",
    title: "Claude Co-Work",
    subtitle: "From answers to action",
    body: "Co-Work brings Claude Code's agentic capabilities to your desktop. Give Claude access to your local files, set a task, and step away. Come back to completed work. Your team goes from asking AI questions to AI completing real tasks autonomously.",
  },
  {
    num: "02",
    title: "Claude Chat",
    subtitle: "The everyday AI companion",
    body: "Deep research, document analysis, writing, brainstorming. Claude Chat is the daily tool your whole team can use from day one. But most teams barely scratch the surface. We show them what's actually possible.",
  },
  {
    num: "03",
    title: "Claude Code",
    subtitle: "For your power users",
    body: "Your technical team members get Claude Code, the most capable AI coding tool available. It reads your codebase, writes production code, runs tests, and commits changes. We build the custom skills and workflows that make it specific to your business.",
  },
];

const outcomes = [
  "Custom skills built for your team's actual workflows",
  "Shared Co-Work environments configured for collaboration",
  "Team training until they don't need us",
  "Integration with your existing tools and file systems",
  "Ongoing support as Claude's capabilities expand",
];

export default function ClaudePage() {
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
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-6">
                Claude for Teams
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight text-white mb-8">
                Your team is using AI
                <br />
                <span className="text-gold">at 10% of its potential.</span>
              </h1>
              <p className="text-text-body leading-[1.8] text-lg md:text-xl max-w-2xl mb-12">
                Most businesses are stuck at level one: asking ChatGPT questions,
                uploading spreadsheets to see what happens. Claude Co-Work, Chat,
                and Code can transform how your entire team works. We deploy it,
                build the custom skills, and train your people.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="rounded-lg overflow-hidden border border-border/50">
                <Image
                  src="/images/claude-cowork-hero.webp"
                  alt="Claude Co-Work interface showing autonomous task completion"
                  width={1280}
                  height={720}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <p className="text-text-muted text-xs mt-3 font-mono">
                Claude Co-Work by Anthropic &mdash;{" "}
                <a
                  href="https://claude.com/product/cowork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold/70 hover:text-gold transition-colors"
                >
                  claude.com/product/cowork
                </a>
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* The Problem */}
        <section className="relative py-24 md:py-32 px-6 bg-bg-surface">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-light leading-[1.15] tracking-tight text-white mb-10">
                You&apos;re not getting what you should be from AI.
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="max-w-[680px] space-y-6 text-text-body leading-[1.8] text-base md:text-lg">
                <p>
                  Your team might be using ChatGPT or Copilot. They&apos;re
                  typing in questions, maybe uploading a document here and there.
                  It&apos;s useful. But it&apos;s like having a Ferrari and only
                  driving it to the shops.
                </p>
                <p>
                  Claude is different. Co-Work can access your local files, complete
                  multi-step tasks autonomously, and collaborate with your team in
                  shared workspaces. It doesn&apos;t just answer questions. It does
                  the work.
                </p>
                <p>
                  The gap between what your team is doing with AI and what they
                  could be doing is where we come in.
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
                What We Deploy
              </p>
              <h2 className="text-3xl md:text-4xl font-light leading-[1.15] tracking-tight text-white mb-14 max-w-3xl">
                Three tools. One deployment. Your whole team levels up.
              </h2>
            </AnimatedSection>

            <div className="space-y-0">
              {capabilities.map((cap, i) => (
                <AnimatedSection key={cap.num} delay={i * 100}>
                  <div className="grid md:grid-cols-[240px_1fr] gap-6 md:gap-12 py-10 md:py-14 border-t border-white/10 group">
                    <div className="shrink-0">
                      <span className="font-mono text-xs text-gold tracking-wider">
                        {cap.num}
                      </span>
                      <h3 className="text-2xl md:text-3xl text-white font-light mt-2 group-hover:translate-x-1 transition-transform duration-500">
                        {cap.title}
                      </h3>
                      <p className="font-mono text-xs text-text-secondary mt-1">
                        {cap.subtitle}
                      </p>
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

        {/* What Engine AI Does */}
        <section className="relative py-24 md:py-32 px-6 bg-bg-surface">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-text-secondary mb-6">
                What We Do
              </p>
              <h2 className="text-3xl md:text-4xl font-light leading-[1.15] tracking-tight text-white mb-10">
                We don&apos;t just hand you a licence and wish you luck.
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="max-w-[680px] space-y-6 text-text-body leading-[1.8] text-base md:text-lg mb-12">
                <p>
                  Anyone can sign up for Claude. The difference is what happens
                  next. We deploy it properly, build the custom skills your team
                  actually needs, and train every user until Claude is part of how
                  they work, not something they occasionally open.
                </p>
              </div>
            </AnimatedSection>

            <div className="space-y-0 max-w-[680px]">
              {outcomes.map((outcome, i) => (
                <AnimatedSection key={i} delay={200 + i * 60}>
                  <div className="flex items-start gap-4 py-4 border-t border-border">
                    <span className="font-mono text-xs text-gold mt-1 shrink-0">
                      0{i + 1}
                    </span>
                    <p className="text-text-body text-base">{outcome}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 md:py-32 px-6 bg-bg-primary">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-light leading-[1.15] tracking-tight text-white mb-6">
                Ready to see what your team can actually do with AI?
              </h2>
              <p className="text-text-body leading-[1.8] text-base md:text-lg mb-10 max-w-xl mx-auto">
                We&apos;ll walk you through what Claude can do for your specific
                team and workflows. 30 minutes. No pitch.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/#contact"
                  className="inline-block bg-gold text-black font-semibold px-8 py-4 rounded text-base hover:brightness-110 transition-all duration-300"
                >
                  Book a Discovery Call
                </a>
                <a
                  href="https://claude.com/product/cowork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs text-text-secondary hover:text-white tracking-[0.15em] uppercase transition-colors px-6 py-4"
                >
                  Learn more about Claude
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
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
