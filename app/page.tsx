import Image from "next/image";
import Navigation from "./components/Navigation";
import AnimatedSection from "./components/AnimatedSection";
import CountUp from "./components/CountUp";
import ContactForm from "./components/ContactForm";

const principles = [
  {
    title: "Go where the pain is",
    body: "AI is a painkiller, not a vitamin.",
  },
  {
    title: "Ship, then iterate",
    body: "A working agent in production teaches more than six months of planning.",
  },
  {
    title: "Be honest about what AI can't do",
    body: "If a process isn't a good fit, we say so.",
  },
  {
    title: "Augment humans, don't replace them",
    body: "We make a team of 10 perform like 25 — not shrink them to 3.",
  },
];

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
      <Navigation />

      {/* ═══════════════════════════════════ HERO ═══════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/hero.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay + vignette */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.3)_0%,_rgba(0,0,0,0.6)_70%)]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-white/50 mb-10 hero-fade-in hero-delay-1">
            AI Orchestration for NZ Business
          </p>

          <h1 className="text-[clamp(2rem,5.5vw,4.5rem)] font-light leading-[1.12] tracking-tight text-white/60 mb-8 hero-fade-up hero-delay-2">
            The biggest technology shift in a generation is happening right now.{" "}
            <span className="text-white font-normal">
              Most businesses are watching it happen to them.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-14 hero-fade-up hero-delay-3 leading-relaxed">
            Engine AI helps New Zealand businesses discover, build, and deploy AI
            that works — starting where it matters most.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 hero-fade-up hero-delay-4">
            <a
              href="#contact"
              className="px-10 py-3.5 bg-white text-black font-medium text-sm tracking-wide hover:bg-neutral-200 transition-all duration-300"
            >
              Talk to us →
            </a>
            <a
              href="#model"
              className="px-10 py-3.5 border border-white/20 text-white/60 text-sm tracking-wide hover:text-white hover:border-white/40 transition-all duration-300"
            >
              See how we work ↓
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 float">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        </div>
      </section>

      {/* ═══════════════════════════════ THE GAP ═══════════════════════════════ */}
      <section className="relative py-32 md:py-44 px-6 overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/the-problem.webp"
          alt=""
          fill
          loading="lazy"
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.2)_0%,_rgba(0,0,0,0.5)_70%)]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-sm tracking-[0.3em] uppercase text-white/50 mb-6">
              The Gap
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[3.8rem] font-light leading-[1.1] tracking-tight text-text-primary mb-20 max-w-3xl">
              There&apos;s a massive gap between what AI can do and what
              businesses are actually doing with it.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-16 md:gap-20 mb-20">
            <AnimatedSection delay={100}>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-6xl md:text-[5.5rem] font-extralight text-text-primary leading-none">
                  <CountUp end={68} />
                </span>
              </div>
              <p className="font-mono text-sm tracking-[0.2em] uppercase text-white/50 mb-3">
                of NZ SMEs
              </p>
              <p className="text-white/70 leading-relaxed text-base md:text-lg max-w-sm">
                have no plans to even evaluate AI. Not implement —{" "}
                <em>evaluate</em>.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-6xl md:text-[5.5rem] font-extralight text-text-primary leading-none">
                  <CountUp end={75} />
                </span>
              </div>
              <p className="font-mono text-sm tracking-[0.2em] uppercase text-white/50 mb-3">
                of CEOs
              </p>
              <p className="text-white/70 leading-relaxed text-base md:text-lg max-w-sm">
                say AI has had little or no impact on their business, but their
                number one fear is falling behind in it.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={300}>
            <div className="max-w-[680px] space-y-6 text-white/70 leading-[1.8] text-base md:text-lg">
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
            <blockquote className="border-l border-white/30 pl-8 py-2 max-w-[680px]">
              <p className="text-[1.25rem] md:text-[1.35rem] text-white/70 font-light leading-[1.7]">
                &ldquo;The threat isn&apos;t that AI will replace your people.
                The threat is that a competitor who uses AI will outpace a
                business that doesn&apos;t — and you won&apos;t see it coming
                until it&apos;s too late.&rdquo;
              </p>
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════ ABOUT ═══════════════════════════════ */}
      <section id="about" className="relative py-32 md:py-44 px-6 overflow-hidden">
        <Image
          src="/images/who-we-are.webp"
          alt=""
          fill
          loading="lazy"
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.2)_0%,_rgba(0,0,0,0.5)_70%)]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-sm tracking-[0.3em] uppercase text-white/50 mb-6">
              About
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[3.8rem] font-light leading-[1.1] tracking-tight text-text-primary mb-10 max-w-3xl">
              Two operators. Not two consultants.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="max-w-[680px] space-y-6 text-white/70 leading-[1.8] text-base md:text-lg mb-20">
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

          <div className="grid md:grid-cols-2 gap-10">
            <AnimatedSection delay={200}>
              <div className="border border-white/10 bg-black/40 backdrop-blur-sm p-8 md:p-10 hover:border-white/20 transition-colors duration-500">
                <h3 className="text-xl text-text-primary font-light mb-1">
                  Joe Ward
                </h3>
                <p className="font-mono text-sm text-white/40 tracking-[0.15em] mb-5">
                  Co-Founder
                </p>
                <p className="text-white/70 leading-relaxed text-base md:text-lg">
                  15 years as a professional rugby player and coach across NZ,
                  the UK, and Japan. Transitioned into business as NZ/AU Business
                  Manager at EBOS Group, then built and sold his own product
                  distribution company. Ran a landscape and construction business
                  hands-on — recruiting, training, and retaining skilled
                  tradespeople. Now applies that operational lens to AI: he knows
                  what&apos;s bleeding time and money because he&apos;s been the
                  one bleeding it.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="border border-white/10 bg-black/40 backdrop-blur-sm p-8 md:p-10 hover:border-white/20 transition-colors duration-500">
                <h3 className="text-xl text-text-primary font-light mb-1">
                  Ben du Chateau
                </h3>
                <p className="font-mono text-sm text-white/40 tracking-[0.15em] mb-5">
                  Co-Founder
                </p>
                <p className="text-white/70 leading-relaxed text-base md:text-lg">
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

      {/* ═══════════════════════════════ CLIENTS ═══════════════════════════════ */}
      <section id="clients" className="relative py-32 md:py-44 px-6 overflow-hidden">
        <Image
          src="/images/who-we-serve.webp"
          alt=""
          fill
          loading="lazy"
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.2)_0%,_rgba(0,0,0,0.5)_70%)]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-sm tracking-[0.3em] uppercase text-white/50 mb-6">
              Our Clients
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[3.8rem] font-light leading-[1.1] tracking-tight text-text-primary mb-10 max-w-4xl">
              NZ businesses with 10–100 people who know they need to move but
              don&apos;t know where to start.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {clients.map((text, i) => (
              <AnimatedSection key={i} delay={200 + i * 100}>
                <div className="border border-white/10 bg-black/40 backdrop-blur-sm p-8 h-full flex flex-col">
                  <span className="font-mono text-sm text-white/40 mb-4">
                    0{i + 1}
                  </span>
                  <p className="text-white/70 leading-relaxed text-base md:text-lg">
                    {text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={500}>
            <p className="text-white/70 leading-[1.8] text-base md:text-lg max-w-[680px]">
              They don&apos;t need a strategy deck. They need someone to point at
              what&apos;s bleeding time and money — and fix it.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════ HOW WE WORK ═══════════════════════════════ */}
      <section id="model" className="relative py-32 md:py-44 px-6 overflow-hidden">
        <Image
          src="/images/how-we-work.webp"
          alt=""
          fill
          loading="lazy"
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.2)_0%,_rgba(0,0,0,0.5)_70%)]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-sm tracking-[0.3em] uppercase text-white/50 mb-6">
              How We Work
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[3.8rem] font-light leading-[1.1] tracking-tight text-text-primary mb-14 max-w-3xl">
              Discover. Build. Orchestrate. Repeat.
            </h2>
          </AnimatedSection>

          <div className="space-y-0">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 150}>
                <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-12 md:py-16 border-t border-white/10 group">
                  <div>
                    <span className="font-mono text-sm text-white/35 tracking-wider">
                      {step.num}
                    </span>
                    <h3 className="text-4xl md:text-5xl text-white font-light mt-2 group-hover:translate-x-1 transition-transform duration-500">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-white/75 leading-[1.7] text-base md:text-lg md:pt-4 max-w-xl">
                    {step.body}
                  </p>
                </div>
              </AnimatedSection>
            ))}
            <div className="border-t border-white/10" />
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════ PRINCIPLES ═══════════════════════════════ */}
      <section id="principles" className="relative py-32 md:py-44 px-6 overflow-hidden">
        <Image
          src="/images/principles.webp"
          alt=""
          fill
          loading="lazy"
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.2)_0%,_rgba(0,0,0,0.5)_70%)]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-sm tracking-[0.3em] uppercase text-white/50 mb-6">
              What We Believe
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[3.8rem] font-light leading-[1.1] tracking-tight text-text-primary mb-20 max-w-3xl">
              Our principles aren&apos;t aspirational. They&apos;re operational.
            </h2>
          </AnimatedSection>

          <div className="max-w-2xl space-y-0">
            {principles.map((p, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="py-10 border-t border-white/10 group">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-mono text-sm text-white/35 shrink-0">
                      0{i + 1}
                    </span>
                    <h3 className="text-xl text-text-primary font-medium group-hover:translate-x-1 transition-transform duration-500">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-white/70 leading-relaxed text-base md:text-lg pl-10">
                    {p.body}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ WHY NOW ═══════════════════════════════ */}
      <section className="relative py-32 md:py-44 px-6 overflow-hidden">
        <Image
          src="/images/why-now.webp"
          alt=""
          fill
          loading="lazy"
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.2)_0%,_rgba(0,0,0,0.5)_70%)]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-sm tracking-[0.3em] uppercase text-white/50 mb-6">
              Why Now
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[3.8rem] font-light leading-[1.1] tracking-tight text-text-primary mb-12 max-w-3xl">
              The adoption window is open. It won&apos;t stay open forever.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="max-w-[680px] space-y-6 text-white/70 leading-[1.8] text-base md:text-lg">
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

          {/* Timeline compression visual */}
          <AnimatedSection delay={300} className="mt-20">
            <div className="flex items-end gap-1 md:gap-2 max-w-md">
              {[
                { label: "Internet", years: "~10 years" },
                { label: "Cloud", years: "~5 years" },
                { label: "Mobile", years: "~3 years" },
                { label: "AI", years: "Months" },
              ].map((item, i) => (
                <div key={i} className="flex-1 text-center">
                  <p className="font-mono text-[11px] text-white/50 mb-2">
                    {item.label}
                  </p>
                  <div
                    className={`border ${
                      i === 3
                        ? "bg-white/15 border-white/30"
                        : "bg-white/5 border-white/10"
                    }`}
                    style={{ height: `${(4 - i) * 28 + 20}px` }}
                  />
                  <p className="font-mono text-[10px] text-white/40 mt-2">
                    {item.years}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════ CONTACT ═══════════════════════════════ */}
      <section id="contact" className="relative py-32 md:py-44 px-6 overflow-hidden">
        <Image
          src="/images/contact.webp"
          alt=""
          fill
          loading="lazy"
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.2)_0%,_rgba(0,0,0,0.5)_70%)]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-20">
            <div>
              <AnimatedSection>
                <p className="font-mono text-sm tracking-[0.3em] uppercase text-white/50 mb-6">
                  Let&apos;s Talk
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-[3.8rem] font-light leading-[1.1] tracking-tight text-text-primary mb-8">
                  Ready to find out where AI fits in your business?
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <p className="text-white/70 leading-[1.8] text-base md:text-lg mb-10 max-w-md">
                  Start with a conversation. No pitch. No obligation. We&apos;ll
                  listen to how your business works and tell you honestly whether
                  we can help — and where.
                </p>
                <p className="text-text-muted text-sm">
                  Or email us at{" "}
                  <a
                    href="mailto:ben@engineai.co.nz"
                    className="text-text-primary hover:text-text-secondary transition-colors border-b border-white/20 hover:border-white/40"
                  >
                    ben@engineai.co.nz
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

      {/* ═══════════════════════════════ FOOTER ═══════════════════════════════ */}
      <footer className="py-12 px-6 border-t border-white/10 bg-bg-primary">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-mono text-sm tracking-[0.25em] text-text-primary font-semibold uppercase mb-2">
              Engine AI
            </p>
            <p className="text-text-muted text-[13px]">Auckland, New Zealand</p>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 text-[13px] text-text-muted">
            <a
              href="https://engineai.co.nz"
              className="hover:text-text-primary transition-colors"
            >
              engineai.co.nz
            </a>
            <a
              href="mailto:ben@engineai.co.nz"
              className="hover:text-text-primary transition-colors"
            >
              ben@engineai.co.nz
            </a>
            <span className="text-text-muted/40">
              © 2026 Engine AI
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
