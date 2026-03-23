export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://engineai.co.nz/#organization",
    name: "Engine AI",
    legalName: "Engine AI Consulting Limited",
    url: "https://engineai.co.nz",
    logo: "https://engineai.co.nz/favicon.svg",
    description:
      "New Zealand AI consultancy helping businesses discover, build, and deploy AI agents for real operational problems. Agent-as-a-Service model with Sprint Build Cards.",
    foundingDate: "2025",
    areaServed: {
      "@type": "Country",
      name: "New Zealand",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Auckland",
      addressCountry: "NZ",
    },
    sameAs: ["https://github.com/engineai-nz"],
    founder: [
      {
        "@type": "Person",
        name: "Ben du Chateau",
        jobTitle: "Engineering Lead",
      },
      {
        "@type": "Person",
        name: "Joe Ward",
        jobTitle: "Project Lead",
      },
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "AI Agents",
      "AI Consulting",
      "Claude Co-Work",
      "Claude Code",
      "Claude Chat",
      "Claude for Teams",
      "Anthropic Claude",
      "Microsoft Copilot",
      "Copilot Studio",
      "Microsoft 365 Copilot",
      "OpenClaw",
      "AI Orchestration",
      "AI Agent Deployment",
      "Business Automation",
      "Workflow Automation",
      "Custom Dashboard Development",
      "Sprint Build Cards",
      "Agent-as-a-Service",
      "Next.js",
      "Supabase",
      "TypeScript",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Discovery",
            description:
              "Structured assessment of business operations to identify where AI creates measurable value and what to prioritise first.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Agent Development",
            description:
              "Building and deploying production AI agents into existing business systems using Sprint Build Cards.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Microsoft Copilot and Copilot Studio Deployment",
            description:
              "Deploying Microsoft 365 Copilot and building custom Copilot Studio agents. Configuration, security, governance, and team training for M365 environments.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Claude for Teams — Co-Work, Chat, and Code",
            description:
              "Deploying Anthropic Claude across organisations. Claude Co-Work for autonomous task completion, Claude Chat for daily use, Claude Code for developers, plus custom skills and shared workspaces.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "OpenClaw AI Orchestration",
            description:
              "Open-source AI operating system for deploying, managing, and orchestrating AI agents on your own infrastructure. Self-hosted, single gateway, enterprise-grade security.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bespoke Builds — Sprint Build Cards",
            description:
              "Custom dashboards, internal tools, and workflow automations. Fixed scope, fixed price via Sprint Build Cards. Working software in weeks.",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://engineai.co.nz/#website",
    name: "Engine AI",
    url: "https://engineai.co.nz",
    publisher: {
      "@id": "https://engineai.co.nz/#organization",
    },
    inLanguage: "en-NZ",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
