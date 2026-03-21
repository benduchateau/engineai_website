import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "../components/AnimatedSection";
import Logo from "../components/Logo";

export const metadata: Metadata = {
  title: "Microsoft Copilot Deployment — AI Inside Your M365 | Engine AI",
  description:
    "Engine AI deploys Microsoft Copilot across your Microsoft 365 environment. Custom agents in Copilot Studio, proper configuration, and team training.",
  openGraph: {
    title: "Microsoft Copilot Deployment — AI Inside Your M365 | Engine AI",
    description:
      "Deploy Microsoft Copilot properly across your organisation with custom agents and real training.",
  },
};

const capabilities = [
  {
    num: "01",
    title: "Copilot in M365",
    subtitle: "AI where your team already works",
    body: "Copilot sits inside Outlook, Teams, Word, Excel, and PowerPoint. It summarises meetings, drafts emails, analyses spreadsheets, and builds presentations from your actual company data. No new tools to learn, no new logins, no behaviour change required.",
  },
  {
    num: "02",
    title: "Copilot Studio",
    subtitle: "Custom agents for your business",
    body: "Off-the-shelf Copilot is useful. Custom agents built in Copilot Studio are transformative. We build agents that know your processes, connect to your data sources, and automate the specific workflows your team runs every day.",
  },
  {
    num: "03",
    title: "Security and Governance",
    subtitle: "Enterprise-grade from day one",
    body: "Copilot respects your existing M365 permissions and security policies. We configure it properly so the right people see the right data. No shadow IT, no data leakage, no surprises for your compliance team.",
  },
  {
    num: "04",
    title: "Training and Adoption",
    subtitle: "From novelty to necessity",
    body: "Most Copilot deployments fail at adoption. People try it once, get a mediocre result, and go back to doing things manually. We train your team on the prompts, workflows, and techniques that actually save time, then follow up until it sticks.",
  },
];

export default function CopilotPage() {
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
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#0078D4] mb-6">
                Microsoft Copilot
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight text-white mb-8">
                AI inside the tools
                <br />
                <span className="text-[#0078D4]">your team already uses.</span>
              </h1>
              <p className="text-text-body leading-[1.8] text-lg md:text-xl max-w-2xl">
                Your team lives in Microsoft 365. Copilot brings AI directly
                into Outlook, Teams, Word, and Excel. We deploy it properly,
                build custom agents in Copilot Studio, and train your people
                until it&apos;s part of how they work.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* The Problem */}
        <section className="relative py-24 md:py-32 px-6 bg-bg-surface">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-light leading-[1.15] tracking-tight text-white mb-10">
                Most Copilot deployments fail at the same point.
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="max-w-[680px] space-y-6 text-text-body leading-[1.8] text-base md:text-lg">
                <p>
                  The licence gets bought. IT turns it on. Everyone tries it
                  for a week. Most people get a mediocre result, decide
                  it&apos;s not that useful, and go back to doing things the
                  old way. Six months later, you&apos;re paying for licences
                  nobody uses.
                </p>
                <p>
                  The problem isn&apos;t the tool. It&apos;s the deployment.
                  Copilot needs to be configured for your data, your permissions,
                  and your workflows. Your team needs to be trained on what
                  actually works, not just given a login and wished good luck.
                </p>
                <p>
                  That&apos;s what we do.
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
                Copilot done right.
              </h2>
            </AnimatedSection>

            <div className="space-y-0">
              {capabilities.map((cap, i) => (
                <AnimatedSection key={cap.num} delay={i * 100}>
                  <div className="grid md:grid-cols-[240px_1fr] gap-6 md:gap-12 py-10 md:py-14 border-t border-white/10 group">
                    <div className="shrink-0">
                      <span className="font-mono text-xs text-[#0078D4] tracking-wider">
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

        {/* CTA */}
        <section className="relative py-24 md:py-32 px-6 bg-bg-surface">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-light leading-[1.15] tracking-tight text-white mb-6">
                Ready to get real value from your Copilot licences?
              </h2>
              <p className="text-text-body leading-[1.8] text-base md:text-lg mb-10 max-w-xl mx-auto">
                We&apos;ll assess your M365 environment and show you exactly
                where Copilot will have the biggest impact. 30 minutes. No pitch.
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
