import Image from "next/image";
import Navigation from "./components/Navigation";
import AnimatedSection from "./components/AnimatedSection";
import CountUp from "./components/CountUp";
import ContactForm from "./components/ContactForm";

const principles = [
  {
    title: "Go where the pain is",
    body: "We look for where the business is bleeding — time, money, quality, sanity. AI is a painkiller, not a vitamin.",
  },
  {
    title: "Ship, then iterate",
    body: "A working agent in production teaches you more than six months of planning. We deploy early, measure ruthlessly, and improve in motion.",
  },
  {
    title: "Be honest about what AI can't do",
    body: "Our credibility is built on what we don't recommend as much as what we do. If a process isn't a good fit for AI, we say so.",
  },
  {
    title: "Augment humans, don't replace them",
    body: "We build AI that makes a team of 10 perform like a team of 25, not AI that turns a team of 10 into a team of 3.",
  },
  {
    title: "Build the relationship, not the dependency",
    body: "We don't build black boxes. We build systems the client understands, document everything, and train the team to own what we've built.",
  },
  {
    title: "Senior people on every engagement",
    body: "Two-person boutique means no bench. No juniors learning on your dime. When you engage Engine AI, you get the founders. Every call. Every build.",
  },
  {
    title: "Prove it with our own work",
    body: "We don't recommend tools we haven't used. Every methodology we bring to a client has been tested on our own projects first.",
  },
];

const steps = [
  {
    num: "01",
    title: "Discover",
    body: "A deep, structured assessment of how your business actually operates, where AI creates measurable value, and what to do first. Process mapping, stakeholder interviews, systems audits, and a prioritised roadmap backed by ROI estimates. Not a survey. Not a workshop.",
  },
  {
    num: "02",
    title: "Build",
    body: "We deploy the highest-impact opportunities as working AI agents integrated into your existing systems. Not demos. Not proofs of concept. Production systems that do real work from day one.",
  },
  {
    num: "03",
    title: "Orchestrate",
    body: "We stay on as an ongoing partner to monitor, tune, expand, and evolve. AI isn't a project you finish. It's a capability you compound. Every month, the agents get better, new opportunities emerge, and the gap between you and your competitors widens.",
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
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65" />
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.4)_70%)]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-text-muted mb-10 hero-fade-in hero-delay-1">
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
      <section className="relative py-24 md:py-36 px-6 overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/the-problem.webp"
          alt=""
          fill
          loading="lazy"
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-text-muted mb-6">
              The Gap
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[3.2rem] font-light leading-[1.15] tracking-tight text-text-primary mb-20 max-w-3xl">
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
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-text-muted mb-3">
                of NZ SMEs
              </p>
              <p className="text-text-secondary leading-relaxed max-w-sm">
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
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-text-muted mb-3">
                of CEOs
              </p>
              <p className="text-text-secondary leading-relaxed max-w-sm">
                say AI has had little or no impact on their business, but their
                number one fear is falling behind in it.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={300}>
            <div className="max-w-[680px] space-y-6 text-text-secondary leading-[1.8]">
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
              <p className="text-[1.15rem] md:text-xl text-white/80 font-light leading-relaxed">
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
      <section id="about" className="relative py-24 md:py-36 px-6 overflow-hidden">
        <Image
          src="/images/who-we-are.webp"
          alt=""
          fill
          loading="lazy"
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-text-muted mb-6">
              About
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[3.2rem] font-light leading-[1.15] tracking-tight text-text-primary mb-10 max-w-3xl">
              Two operators. Not two consultants.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="max-w-[680px] space-y-6 text-text-secondary leading-[1.8] mb-20">
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
                And we build. Not advise — <em className="text-white/80">build</em>.
                Over 2,000 hours of hands-on AI development. A production AI
                platform shipped for a New Zealand recruitment firm — three AI
                co-pilot roles, client portals, job board integration. 22 weeks
                from blank canvas to live users.
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
              <div className="border border-white/10 bg-black/40 backdrop-blur-sm p-8 md:p-10 hover:border-white/20 transition-colors duration-500">
                <h3 className="text-xl text-text-primary font-light mb-1">
                  Ben du Chateau
                </h3>
                <p className="font-mono text-[11px] text-text-muted tracking-[0.15em] mb-5">
                  Co-Founder
                </p>
                <p className="text-text-secondary leading-relaxed text-[15px]">
                  20+ years enterprise technology. Account Director at one of
                  NZ&apos;s largest telcos. Builds AI agents, automation systems,
                  and production platforms. Obsessed with turning complex
                  technology into practical business outcomes.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="border border-white/10 bg-black/40 backdrop-blur-sm p-8 md:p-10 hover:border-white/20 transition-colors duration-500">
                <h3 className="text-xl text-text-primary font-light mb-1">
                  Joe Ward
                </h3>
                <p className="font-mono text-[11px] text-text-muted tracking-[0.15em] mb-5">
                  Co-Founder
                </p>
                <p className="text-text-secondary leading-relaxed text-[15px]">
                  20+ years enterprise &amp; government technology. Deep
                  expertise in solution architecture and stakeholder management.
                  Turns strategic vision into executable delivery plans.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ CLIENTS ═══════════════════════════════ */}
      <section id="clients" className="relative py-24 md:py-36 px-6 overflow-hidden">
        <Image
          src="/images/who-we-serve.webp"
          alt=""
          fill
          loading="lazy"
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-text-muted mb-6">
              Our Clients
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[3.2rem] font-light leading-[1.15] tracking-tight text-text-primary mb-10 max-w-4xl">
              NZ businesses with 10–100 people who know they need to move but
              don&apos;t know where to start.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <p className="text-text-secondary leading-[1.8] max-w-[680px] mb-14">
              Our clients aren&apos;t Fortune 500 companies with innovation labs
              and unlimited budgets. They&apos;re:
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-4 mb-20">
            {clients.map((text, i) => (
              <AnimatedSection key={i} delay={200 + i * 100}>
                <div className="border border-white/10 bg-black/40 backdrop-blur-sm p-8 h-full flex flex-col">
                  <span className="font-mono text-[11px] text-text-muted/50 mb-4">
                    0{i + 1}
                  </span>
                  <p className="text-text-secondary leading-relaxed text-[15px]">
                    {text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={500}>
            <p className="text-text-secondary leading-[1.8] max-w-[680px]">
              These businesses have real problems AI can solve right now. They
              don&apos;t need a strategy deck. They need someone to come in, look
              at how they work, point at the three things bleeding time and
              money, and fix them. Then come back next month and fix three more.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════ HOW WE WORK ═══════════════════════════════ */}
      <section id="model" className="relative py-24 md:py-36 px-6 overflow-hidden">
        <Image
          src="/images/how-we-work.webp"
          alt=""
          fill
          loading="lazy"
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-text-muted mb-6">
              The Model
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[3.2rem] font-light leading-[1.15] tracking-tight text-text-primary mb-20 max-w-3xl">
              Discover. Build. Orchestrate. Repeat.
            </h2>
          </AnimatedSection>

          <div className="space-y-0">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 150}>
                <div className="grid md:grid-cols-[120px_1fr] gap-6 md:gap-12 py-12 border-t border-white/10 group">
                  <div>
                    <span className="font-mono text-[11px] text-text-muted/40 tracking-wider">
                      {step.num}
                    </span>
                    <h3 className="text-2xl md:text-3xl text-text-primary font-light mt-2 group-hover:translate-x-1 transition-transform duration-500">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-text-secondary leading-[1.8] text-[15px] md:pt-6 max-w-xl">
                    {step.body}
                  </p>
                </div>
              </AnimatedSection>
            ))}
            <div className="border-t border-white/10" />
          </div>

          <AnimatedSection delay={500} className="mt-16">
            <div className="border-l border-white/20 pl-8 max-w-[680px]">
              <p className="text-text-secondary leading-[1.8]">
                Projects land clients. Retainers build the business. That&apos;s
                our economic model — and it&apos;s also the truth about AI
                adoption. The value compounds over time.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════ PRINCIPLES ═══════════════════════════════ */}
      <section id="principles" className="relative py-24 md:py-36 px-6 overflow-hidden">
        <Image
          src="/images/principles.webp"
          alt=""
          fill
          loading="lazy"
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-text-muted mb-6">
              What We Believe
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[3.2rem] font-light leading-[1.15] tracking-tight text-text-primary mb-20 max-w-3xl">
              Our principles aren&apos;t aspirational. They&apos;re operational.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-x-6 gap-y-0">
            {principles.map((p, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="py-8 border-t border-white/10 group">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-mono text-[11px] text-text-muted/40 shrink-0">
                      0{i + 1}
                    </span>
                    <h3 className="text-[17px] text-text-primary font-normal group-hover:translate-x-1 transition-transform duration-500">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-text-secondary leading-relaxed text-[14px] pl-10">
                    {p.body}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ WHY NOW ═══════════════════════════════ */}
      <section className="relative py-24 md:py-36 px-6 overflow-hidden">
        <Image
          src="/images/why-now.webp"
          alt=""
          fill
          loading="lazy"
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimatedSection>
            <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-text-muted mb-6">
              Why Now
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[3.2rem] font-light leading-[1.15] tracking-tight text-text-primary mb-12 max-w-3xl">
              The adoption window is open. It won&apos;t stay open forever.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="max-w-[680px] space-y-6 text-text-secondary leading-[1.8]">
              <p>
                Every major technology wave has an adoption window — a period
                where early movers build an advantage that compounds while the
                market is still figuring things out. Cloud had one. Mobile had
                one. AI is having one right now.
              </p>
              <p>
                The difference is speed. The internet took a decade to reshape
                business. Cloud took five years. AI is moving in months. The
                businesses that start deploying now won&apos;t just be more
                efficient in a year — they&apos;ll have fundamentally different
                capabilities. Different cost structures. Different customer
                experiences. Different capacity to scale.
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
                  <p className="font-mono text-[10px] text-white/40 mb-2">
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
                  <p className="font-mono text-[9px] text-white/30 mt-2">
                    {item.years}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════ CONTACT ═══════════════════════════════ */}
      <section id="contact" className="relative py-24 md:py-36 px-6 overflow-hidden">
        <Image
          src="/images/contact.webp"
          alt=""
          fill
          loading="lazy"
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-20">
            <div>
              <AnimatedSection>
                <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-text-muted mb-6">
                  Let&apos;s Talk
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-[3.2rem] font-light leading-[1.15] tracking-tight text-text-primary mb-8">
                  Ready to find out where AI fits in your business?
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <p className="text-text-secondary leading-[1.8] mb-10 max-w-md">
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
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
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
