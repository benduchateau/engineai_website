import Image from "next/image";
import Navigation from "./components/Navigation";
import AnimatedSection from "./components/AnimatedSection";
import CountUp from "./components/CountUp";
import ContactForm from "./components/ContactForm";
import PrivacyModal from "./components/PrivacyModal";
import Logo from "./components/Logo";


const steps = [
  {
    num: "01",
    title: "Discover",
    body: "A structured assessment of how your business actually runs, where AI creates measurable value, and what to do first.",
  },
  {
    num: "02",
    title: "Build",
    body: "We deploy the highest-impact opportunities as working AI agents in your existing systems. Not demos — production.",
  },
  {
    num: "03",
    title: "Orchestrate",
    body: "We stay on to monitor, tune, and expand. AI isn't a project you finish. It's a capability you compound.",
  },
];

const clients = [
  "The professional services firm with 40 people and a partner who's been reading about AI for two years but hasn't done anything",
  "The trade company with 80 staff running ops on spreadsheets and email",
  "The logistics operator whose competitors are starting to automate dispatch while they're still doing it manually",
];

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-gold focus:text-black focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>
      <Navigation />
      <main id="main-content">

      {/* ═══════════════════════════════════ HERO ═══════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <Image
          src="/images/hero.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="font-mono text-xl md:text-2xl tracking-[0.3em] uppercase text-gold mb-10 hero-fade-in hero-delay-1">
            AI Orchestration for NZ Business
          </p>

          <h1 className="text-[clamp(2rem,5.5vw,4.5rem)] font-light leading-[1.12] tracking-tight text-white/80 mb-8 hero-fade-up hero-delay-2">
            The biggest technology shift in a generation is happening right now.{" "}
            <span className="text-white font-normal">
              Most businesses are watching it happen to them.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-text-body max-w-2xl mx-auto mb-14 hero-fade-up hero-delay-3 leading-relaxed">
            Engine AI helps New Zealand businesses discover, build, and deploy AI
            that works — starting where it matters most.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 hero-fade-up hero-delay-4">
            <a
              href="#contact"
              className="px-12 py-4 bg-gold text-black font-semibold text-base tracking-wide hover:brightness-110 transition-all duration-300"
            >
              Talk to us →
            </a>
            <a
              href="#model"
              className="text-text-secondary text-sm tracking-wide hover:text-white transition-colors duration-300"
            >
              See how we work ↓
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 float">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
        </div>
      </section>

      {/* ═══════════════════════════════ THE GAP — SOLID BG ═══════════════════════════════ */}
      <section id="the-gap" className="relative py-32 md:py-44 px-6 bg-bg-primary">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-text-secondary mb-6">
              The Gap
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[3.8rem] font-light leading-[1.1] tracking-tight text-white mb-20 max-w-3xl">
              There&apos;s a massive gap between what AI can do and what
              businesses are actually doing with it.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-16 md:gap-20 mb-20">
            <AnimatedSection delay={100}>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-6xl md:text-[5.5rem] font-extralight text-gold leading-none font-mono">
                  <CountUp end={68} />
                </span>
              </div>
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-text-secondary mb-3">
                of NZ SMEs
              </p>
              <p className="text-text-body leading-relaxed text-base md:text-lg max-w-sm">
                have no plans to even evaluate AI. Not implement —{" "}
                <em className="text-white">evaluate</em>.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-6xl md:text-[5.5rem] font-extralight text-gold leading-none font-mono">
                  <CountUp end={75} />
                </span>
              </div>
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-text-secondary mb-3">
                of CEOs
              </p>
              <p className="text-text-body leading-relaxed text-base md:text-lg max-w-sm">
                say AI has had little or no impact on their business, but their
                number one fear is falling behind in it.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={300}>
            <div className="max-w-[680px] space-y-6 text-text-body leading-[1.8] text-base md:text-lg">
              <p>
                That&apos;s not a technology problem. It&apos;s a translation
                problem.
              </p>
              <p>
                The technology exists. The capability is proven. What&apos;s
                missing is someone who can walk into a business of 30 or 50 or
                100 people, understand how they actually operate, and show them —
                concretely, with numbers — where AI creates real value.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400} className="mt-16">
            <blockquote className="border-l-2 border-gold/40 pl-8 py-2 max-w-[680px]">
              <p className="text-[1.25rem] md:text-[1.35rem] text-white font-light leading-[1.7] italic">
                &ldquo;The threat isn&apos;t that AI will replace your people.
                The threat is that a competitor who uses AI will outpace a
                business that doesn&apos;t — and you won&apos;t see it coming
                until it&apos;s too late.&rdquo;
              </p>
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════ ABOUT — PHOTO BG ═══════════════════════════════ */}
      <section id="about" className="relative py-32 md:py-44 px-6 overflow-hidden">
        <Image
          src="/images/who-we-are.png"
          alt=""
          fill
          loading="lazy"
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/85" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-text-secondary mb-6">
              About
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[3.8rem] font-light leading-[1.1] tracking-tight text-white mb-10 max-w-3xl">
              Two operators. Not two consultants.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="max-w-[680px] space-y-6 text-text-body leading-[1.8] text-base md:text-lg mb-20">
              <p>
                We&apos;re not a consultancy that discovered AI. We&apos;re AI
                practitioners who spent two decades in enterprise technology.
              </p>
              <p>
                Between us, we&apos;ve sat across the table from more business
                owners, IT managers, CFOs, and government buyers than we can
                count. We know what they care about. We know what they&apos;re
                afraid of. We know how they make decisions.
              </p>
              <p>
                Most AI consultants fall into two camps: the workshop warriors
                who&apos;ll train your team on prompt engineering and leave, or
                the dev shops who&apos;ll build what you ask for without
                questioning whether it&apos;s the right thing to build. We do
                neither. We start by understanding your business deeply enough to
                know where the value sits — then we build and deploy agents that
                capture it.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedSection delay={200}>
              <div className="border border-border bg-bg-card backdrop-blur-sm p-8 md:p-10 rounded-lg border-t-[3px] border-t-gold/60 hover:border-t-gold transition-colors duration-500">
                <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 mb-6 flex items-center justify-center overflow-hidden">
                  <Image src="/images/joe-ward.webp" alt="Joe Ward, Co-Founder of Engine AI" width={80} height={80} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl text-white font-light mb-1">
                  Joe Ward
                </h3>
                <p className="font-mono text-xs text-gold tracking-[0.15em] uppercase mb-5">
                  Co-Founder
                </p>
                <p className="text-text-body leading-relaxed text-base">
                  15 years as a professional rugby player and coach across NZ,
                  the UK, and Japan. Transitioned into business across
                  distribution, construction, and landscaping — built and sold
                  a product company, ran trades teams hands-on. Now deep in the
                  technical side of AI: designing complex agent architectures,
                  building multi-step automation systems, and deploying production
                  AI solutions that integrate into real business workflows. Combines
                  hands-on operational experience with serious technical capability
                  — he knows what&apos;s bleeding time and money because he&apos;s
                  been the one bleeding it, and he can build the AI to fix it.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="border border-border bg-bg-card backdrop-blur-sm p-8 md:p-10 rounded-lg border-t-[3px] border-t-gold/60 hover:border-t-gold transition-colors duration-500">
                <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 mb-6 flex items-center justify-center overflow-hidden">
                  <Image src="/images/ben-du-chateau.webp" alt="Ben du Chateau, Co-Founder of Engine AI" width={80} height={80} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl text-white font-light mb-1">
                  Ben du Chateau
                </h3>
                <p className="font-mono text-xs text-gold tracking-[0.15em] uppercase mb-5">
                  Co-Founder
                </p>
                <p className="text-text-body leading-relaxed text-base">
                  20+ years selling cloud, connectivity, security, and SaaS
                  across NZ and Australia. Spent the last decade helping
                  businesses navigate digital transformation — from Azure and
                  Microsoft 365 to cybersecurity and managed services. Now builds
                  the AI agents, automation systems, and production platforms he
                  spent years wishing vendors would actually deliver. The tech
                  side of Engine AI: architecture, orchestration, and making it
                  work on day one.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ CLIENTS — SOLID BG ═══════════════════════════════ */}
      <section id="clients" className="relative py-32 md:py-44 px-6 bg-bg-surface">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-text-secondary mb-6">
              Our Clients
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[3.8rem] font-light leading-[1.1] tracking-tight text-white mb-16 max-w-4xl">
              NZ businesses who know they need to move but
              don&apos;t know where to start.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-4 mb-20">
            {clients.map((text, i) => (
              <AnimatedSection key={i} delay={200 + i * 100}>
                <div className="border border-border bg-bg-card rounded-lg p-8 h-full flex flex-col hover:border-gold/20 transition-colors duration-500">
                  <span className="font-mono text-xs text-gold mb-4">
                    0{i + 1}
                  </span>
                  <p className="text-text-body leading-relaxed text-base">
                    {text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={500}>
            <p className="text-text-body leading-[1.8] text-base md:text-lg max-w-[680px]">
              They don&apos;t need a strategy deck. They need someone to point at
              what&apos;s bleeding time and money — and fix it.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════ HOW WE WORK — PHOTO BG ═══════════════════════════════ */}
      <section id="model" className="relative py-32 md:py-44 px-6 overflow-hidden">
        <Image
          src="/images/how-we-work.webp"
          alt=""
          fill
          loading="lazy"
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/85" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-text-secondary mb-6">
              The Model
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[3.8rem] font-light leading-[1.1] tracking-tight text-white mb-14 max-w-3xl">
              Discover. Build. Orchestrate. Repeat.
            </h2>
          </AnimatedSection>

          <div className="space-y-0">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 150}>
                <div className="grid md:grid-cols-[280px_1fr] gap-6 md:gap-12 py-12 md:py-16 border-t border-white/10 group">
                  <div className="shrink-0">
                    <span className="font-mono text-xs text-gold tracking-wider">
                      {step.num}
                    </span>
                    <h3 className="text-3xl md:text-5xl text-white font-light mt-2 group-hover:translate-x-1 transition-transform duration-500">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-text-body leading-[1.7] text-base md:text-lg md:pt-4 max-w-xl">
                    {step.body}
                  </p>
                </div>
              </AnimatedSection>
            ))}
            <div className="border-t border-white/10" />
          </div>

          <AnimatedSection delay={500} className="mt-16">
            <div className="bg-bg-card border border-border rounded-lg p-8 max-w-[680px] border-l-2 border-l-gold/40">
              <p className="font-mono text-xs text-gold uppercase tracking-[0.15em] mb-3">
                Our model
              </p>
              <p className="text-text-body leading-relaxed text-base">
                Projects land clients. Retainers build the business. That&apos;s
                our economic model — and it&apos;s also the truth about AI
                adoption. The value compounds over time.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════ WHAT WE DEPLOY — SOLID BG ═══════════════════════════════ */}
      <section className="relative py-32 md:py-44 px-6 bg-bg-primary">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-text-secondary mb-6">
              What We Deploy
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[3.8rem] font-light leading-[1.1] tracking-tight text-white mb-20 max-w-3xl">
              The tools that make it real.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <AnimatedSection delay={100}>
              <div className="border border-border bg-bg-card backdrop-blur-sm p-8 md:p-10 rounded-lg border-t-[3px] border-t-gold/60 hover:border-t-gold transition-colors duration-500 h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="font-mono text-xs text-gold uppercase tracking-[0.15em] mb-4">
                      Claude for Teams
                    </p>
                    <h3 className="text-2xl md:text-3xl text-white font-light">
                      Claude for your whole team
                    </h3>
                  </div>
                  <Image src="/images/claude-icon-v2.webp" alt="Claude by Anthropic" width={100} height={100} className="rounded-xl shrink-0 ml-4" />
                </div>
                <div className="space-y-4 text-text-body leading-relaxed text-base flex-1">
                  <p>
                    Most businesses are still at level one with AI &mdash; asking
                    ChatGPT questions, uploading spreadsheets to see what happens.
                    That&apos;s fine. But it&apos;s not where the value is.
                  </p>
                  <p>
                    Claude Co-Work gives your team shared AI workspaces where they
                    collaborate with AI on real work &mdash; not just chat. We
                    deploy Claude across your organisation, build custom skills,
                    and train your people until they don&apos;t need us.
                  </p>
                </div>
                <a
                  href="/claude"
                  className="inline-flex items-center gap-2 font-mono text-xs text-gold hover:text-white tracking-[0.15em] uppercase mt-6 transition-colors duration-300"
                >
                  Learn more
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="border border-border bg-bg-card backdrop-blur-sm p-8 md:p-10 rounded-lg border-t-[3px] border-t-[#0078D4]/60 hover:border-t-[#0078D4] transition-colors duration-500 h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="font-mono text-xs text-[#0078D4] uppercase tracking-[0.15em] mb-4">
                      Microsoft Copilot
                    </p>
                    <h3 className="text-2xl md:text-3xl text-white font-light">
                      Copilot across your Microsoft 365
                    </h3>
                  </div>
                  <Image src="/images/copilot-icon.webp" alt="Microsoft Copilot" width={100} height={100} className="shrink-0 ml-4" />
                </div>
                <div className="space-y-4 text-text-body leading-relaxed text-base flex-1">
                  <p>
                    Your team already lives in Outlook, Teams, Word, and Excel.
                    Microsoft Copilot brings AI directly into those tools &mdash;
                    summarising meetings, drafting emails, analysing spreadsheets,
                    and building presentations from your actual data.
                  </p>
                  <p>
                    We deploy Copilot properly: configure it for your environment,
                    build custom agents in Copilot Studio, and train your people
                    to use it for real work, not just novelty.
                  </p>
                </div>
                <a
                  href="/copilot"
                  className="inline-flex items-center gap-2 font-mono text-xs text-[#0078D4] hover:text-white tracking-[0.15em] uppercase mt-6 transition-colors duration-300"
                >
                  Learn more
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <AnimatedSection delay={300}>
              <div className="border border-border bg-bg-card backdrop-blur-sm p-8 md:p-10 rounded-lg border-t-[3px] border-t-teal/60 hover:border-t-teal transition-colors duration-500 h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="font-mono text-xs text-teal uppercase tracking-[0.15em] mb-4">
                      OpenClaw
                    </p>
                    <h3 className="text-2xl md:text-3xl text-white font-light">
                      AI orchestration for your agents
                    </h3>
                  </div>
                  <Image src="/images/openclaw-icon.webp" alt="OpenClaw" width={100} height={100} className="shrink-0 ml-4" />
                </div>
                <div className="space-y-4 text-text-body leading-relaxed text-base flex-1">
                  <p>
                    As your AI capability grows, you need somewhere to run it all.
                    OpenClaw is an open-source AI operating system that gives your
                    business a single place to deploy, manage, and orchestrate your
                    AI agents &mdash; on your own infrastructure, under your control.
                  </p>
                  <p>
                    We&apos;re building this. The development is moving fast &mdash;
                    secure, enterprise-grade AI orchestration that puts your business
                    in control. This is the future of how businesses will run AI.
                  </p>
                </div>
                <a
                  href="/openclaw"
                  className="inline-flex items-center gap-2 font-mono text-xs text-teal hover:text-white tracking-[0.15em] uppercase mt-6 transition-colors duration-300"
                >
                  Learn more
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="border border-border bg-bg-card backdrop-blur-sm p-8 md:p-10 rounded-lg border-t-[3px] border-t-[#4CAF50]/60 hover:border-t-[#4CAF50] transition-colors duration-500 h-full flex flex-col">
                <p className="font-mono text-xs text-[#4CAF50] uppercase tracking-[0.15em] mb-4">
                  Bespoke Builds
                </p>
                <h3 className="text-2xl md:text-3xl text-white font-light mb-6">
                  Custom dashboards, tools, and automations
                </h3>
                <div className="space-y-4 text-text-body leading-relaxed text-base flex-1">
                  <p>
                    Sometimes the right solution doesn&apos;t exist yet. We build
                    it. Custom dashboards that pull from your existing systems,
                    internal tools that automate the workflows your team does
                    manually, and integrations that connect things that were never
                    designed to talk to each other.
                  </p>
                  <p>
                    Fixed scope. Fixed price. Working software in weeks, not months.
                  </p>
                </div>
                <a
                  href="/builds"
                  className="inline-flex items-center gap-2 font-mono text-xs text-[#4CAF50] hover:text-white tracking-[0.15em] uppercase mt-6 transition-colors duration-300"
                >
                  Learn more
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={500}>
            <div className="border border-border/50 bg-bg-card/50 backdrop-blur-sm p-6 rounded-lg">
              <p className="text-text-body text-base">
                We also deploy and integrate Google AI, Codex, and other leading
                platforms &mdash; matched to what your business actually needs.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════ WHY NOW — PHOTO BG ═══════════════════════════════ */}
      <section className="relative py-32 md:py-44 px-6 overflow-hidden">
        <Image
          src="/images/why-now.webp"
          alt=""
          fill
          loading="lazy"
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/85" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-text-secondary mb-6">
              Why Now
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[3.8rem] font-light leading-[1.1] tracking-tight text-white mb-12 max-w-3xl">
              The adoption window is open. It won&apos;t stay open forever.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="max-w-[680px] space-y-6 text-text-body leading-[1.8] text-base md:text-lg">
              <p>
                Every major technology wave has an adoption window — a period
                where early movers build an advantage that compounds while the
                market is still figuring things out. Cloud had one. Mobile had
                one. AI is having one right now.
              </p>
              <p>
                The difference is speed. The internet took a decade to reshape
                business. Cloud took five years. AI is moving in months. The
                businesses that deploy now won&apos;t just be more efficient —
                they&apos;ll have fundamentally different capabilities, cost
                structures, and capacity to scale.
              </p>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* ═══════════════════════════════ CONTACT — SOLID BG ═══════════════════════════════ */}
      <section id="contact" className="relative py-32 md:py-44 px-6 bg-bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-20">
            <div>
              <AnimatedSection>
                <p className="font-mono text-xs tracking-[0.3em] uppercase text-text-secondary mb-6">
                  Let&apos;s Talk
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-[3.8rem] font-light leading-[1.1] tracking-tight text-white mb-8">
                  Ready to find out where AI fits in your business?
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <p className="text-text-body leading-[1.8] text-base md:text-lg mb-10 max-w-md">
                  Start with a conversation. No pitch. No obligation. We&apos;ll
                  listen to how your business works and tell you honestly whether
                  we can help — and where.
                </p>
                <p className="text-text-muted text-sm">
                  Or email us at{" "}
                  <a
                    href="mailto:sales@engineai.co.nz"
                    className="text-gold hover:brightness-125 transition-all border-b border-gold/30 hover:border-gold/60"
                  >
                    sales@engineai.co.nz
                  </a>
                </p>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={200}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>

      </main>

      {/* ═══════════════════════════════ FOOTER ═══════════════════════════════ */}
      <footer className="py-12 px-6 border-t border-border bg-bg-primary">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Logo size={40} color="#e8e8e8" />
              <span className="text-2xl font-bold tracking-wide uppercase" style={{ letterSpacing: "0.08em", color: "#e8e8e8" }}>
                Engine AI
              </span>
            </div>
            <p className="text-text-muted text-[13px]">Auckland, New Zealand</p>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 text-[13px] text-text-muted">
            <a
              href="https://engineai.co.nz"
              className="hover:text-white transition-colors"
            >
              engineai.co.nz
            </a>
            <a
              href="mailto:sales@engineai.co.nz"
              className="hover:text-white transition-colors"
            >
              sales@engineai.co.nz
            </a>
            <a
              href="https://www.linkedin.com/in/benduchateau/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Ben du Chateau on LinkedIn"
            >
              LinkedIn (Ben)
            </a>
            <a
              href="https://www.linkedin.com/in/joe-ward-nz/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Joe Ward on LinkedIn"
            >
              LinkedIn (Joe)
            </a>
            <PrivacyModal />
            <span className="text-text-muted/60 font-mono text-[11px]">
              © 2026 Engine AI
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
