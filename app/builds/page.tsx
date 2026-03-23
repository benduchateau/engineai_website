import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "../components/AnimatedSection";
import Logo from "../components/Logo";

export const metadata: Metadata = {
  title: "Bespoke Builds — Custom Dashboards, Tools & AI Automations NZ | Engine AI",
  description:
    "Engine AI builds custom dashboards, internal tools, and AI-powered automations for New Zealand businesses. Sprint Build Cards: fixed scope, fixed price, working software in weeks. Data pipelines, reporting engines, workflow automation. Based in Auckland.",
  keywords: [
    "custom dashboards NZ",
    "custom software development NZ",
    "bespoke software New Zealand",
    "business automation NZ",
    "AI automation New Zealand",
    "workflow automation NZ",
    "internal tools development",
    "Sprint Build Cards",
    "fixed price software development",
    "data pipelines NZ",
    "reporting dashboards NZ",
    "custom business tools Auckland",
    "Engine AI builds",
  ],
  openGraph: {
    title: "Bespoke Builds — Custom Dashboards, Tools & AI Automations NZ | Engine AI",
    description:
      "Custom dashboards, internal tools, and AI automations. Fixed scope, fixed price, working software in weeks. Engine AI, Auckland NZ.",
  },
};

const examples = [
  {
    num: "01",
    title: "Custom dashboards",
    body: "Real-time visibility into your business. We build dashboards that pull from your existing systems and give your leadership team the numbers they actually need, updated live, accessible from anywhere.",
  },
  {
    num: "02",
    title: "Internal tools",
    body: "The tools your team wishes they had. Job costing calculators, client onboarding flows, inventory trackers, reporting engines. Built around how your business actually operates, not how a SaaS vendor thinks it should.",
  },
  {
    num: "03",
    title: "Workflow automations",
    body: "The repetitive tasks your team does every day, automated. Data entry, report generation, notification routing, document processing. We connect the systems that were never designed to talk to each other.",
  },
  {
    num: "04",
    title: "AI-powered features",
    body: "Intelligent document analysis, automated categorisation, natural language search across your data, predictive alerts. We embed AI into the tools we build so they get smarter as your business grows.",
  },
];

export default function BuildsPage() {
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
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#4CAF50] mb-6">
                Bespoke Builds
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight text-white mb-8">
                The tool you need
                <br />
                <span className="text-[#4CAF50]">doesn&apos;t exist yet.</span>
              </h1>
              <p className="text-text-body leading-[1.8] text-lg md:text-xl max-w-2xl">
                Sometimes the right solution isn&apos;t a platform you buy.
                It&apos;s a tool built specifically for how your business works.
                Custom dashboards, internal tools, and automations. Fixed scope.
                Fixed price. Working software in weeks.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* The Problem */}
        <section className="relative py-24 md:py-32 px-6 bg-bg-surface">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-light leading-[1.15] tracking-tight text-white mb-10">
                You&apos;ve looked at the off-the-shelf options. None of them
                fit.
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="max-w-[680px] space-y-6 text-text-body leading-[1.8] text-base md:text-lg">
                <p>
                  Your operations manager is running the business from a
                  spreadsheet that was never designed for what it&apos;s doing.
                  Your team is copy-pasting data between three systems that
                  don&apos;t talk to each other. You&apos;ve looked at SaaS
                  tools but they either do too much or not enough.
                </p>
                <p>
                  What you need is something built for you. Not a platform with
                  a hundred features you&apos;ll never use. A tool that does
                  exactly what your business needs, connects to the systems you
                  already have, and works the way your team actually works.
                </p>
                <p>
                  We build those.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Case Study — Discovery Engine */}
        <section className="relative py-24 md:py-32 px-6 bg-bg-primary">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#4CAF50] mb-6">
                In Production
              </p>
              <h2 className="text-3xl md:text-4xl font-light leading-[1.15] tracking-tight text-white mb-6">
                The Discovery Engine
              </h2>
              <p className="text-text-body leading-[1.8] text-base md:text-lg max-w-2xl mb-10">
                Built for a client to map operational friction across
                every role. Staff select their position, walk through a guided
                discovery flow, and the system identifies exactly where time is
                being lost. From there, we design custom dashboards, deploy AI
                agents for repetitive tasks, and build automated workflows
                tailored to their specific operations.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="rounded-lg overflow-hidden border border-border/50">
                <Image
                  src="/images/discovery-engine-v2.webp"
                  alt="Discovery Engine — operational intelligence tool built by Engine AI"
                  width={1280}
                  height={720}
                  className="w-full h-auto"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="grid md:grid-cols-4 gap-6 mt-10">
                <div className="border-t border-[#4CAF50]/30 pt-4">
                  <p className="font-mono text-xs text-[#4CAF50] uppercase tracking-[0.15em] mb-2">Identify</p>
                  <p className="text-text-body text-sm">Map pain points and bottlenecks across every role</p>
                </div>
                <div className="border-t border-[#4CAF50]/30 pt-4">
                  <p className="font-mono text-xs text-[#4CAF50] uppercase tracking-[0.15em] mb-2">Optimise</p>
                  <p className="text-text-body text-sm">Design custom dashboards and automated workflows</p>
                </div>
                <div className="border-t border-[#4CAF50]/30 pt-4">
                  <p className="font-mono text-xs text-[#4CAF50] uppercase tracking-[0.15em] mb-2">Deploy</p>
                  <p className="text-text-body text-sm">AI agents handle repetitive tasks autonomously</p>
                </div>
                <div className="border-t border-[#4CAF50]/30 pt-4">
                  <p className="font-mono text-xs text-[#4CAF50] uppercase tracking-[0.15em] mb-2">Measure</p>
                  <p className="text-text-body text-sm">Your operational data drives every decision</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* What We Build */}
        <section className="relative py-24 md:py-32 px-6 bg-bg-primary">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-text-secondary mb-6">
                What We Build
              </p>
              <h2 className="text-3xl md:text-4xl font-light leading-[1.15] tracking-tight text-white mb-14 max-w-3xl">
                Software shaped around your business.
              </h2>
            </AnimatedSection>

            <div className="space-y-0">
              {examples.map((ex, i) => (
                <AnimatedSection key={ex.num} delay={i * 100}>
                  <div className="grid md:grid-cols-[240px_1fr] gap-6 md:gap-12 py-10 md:py-14 border-t border-white/10 group">
                    <div className="shrink-0">
                      <span className="font-mono text-xs text-[#4CAF50] tracking-wider">
                        {ex.num}
                      </span>
                      <h3 className="text-2xl md:text-3xl text-white font-light mt-2 group-hover:translate-x-1 transition-transform duration-500">
                        {ex.title}
                      </h3>
                    </div>
                    <p className="text-text-body leading-[1.7] text-base md:text-lg md:pt-4 max-w-xl">
                      {ex.body}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
              <div className="border-t border-white/10" />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="relative py-24 md:py-32 px-6 bg-bg-surface">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-text-secondary mb-6">
                How It Works
              </p>
              <h2 className="text-3xl md:text-4xl font-light leading-[1.15] tracking-tight text-white mb-10">
                Sprint Build Cards. No surprises.
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="max-w-[680px] space-y-6 text-text-body leading-[1.8] text-base md:text-lg">
                <p>
                  Every build starts with a Sprint Build Card: a fixed scope
                  and fixed price for a working piece of software. You know
                  exactly what you&apos;re getting and exactly what it costs
                  before we write a line of code.
                </p>
                <p>
                  We build in short sprints, show you working software at every
                  step, and adjust based on what you see. No six-month projects
                  that deliver something you didn&apos;t ask for. No scope creep.
                  No change requests that double the bill.
                </p>
                <p>
                  Working software in weeks. Then we iterate.
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
                Got a problem that needs a custom solution?
              </h2>
              <p className="text-text-body leading-[1.8] text-base md:text-lg mb-10 max-w-xl mx-auto">
                Tell us what&apos;s not working. We&apos;ll tell you what
                we&apos;d build and what it would cost. 30 minutes. No
                obligation.
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
