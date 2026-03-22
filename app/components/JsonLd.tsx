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
    sameAs: ["https://github.com/agent-maestros"],
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
      "Microsoft Copilot",
      "Claude AI",
      "AI Orchestration",
      "Business Automation",
      "Machine Learning",
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
            name: "Microsoft Copilot Deployment",
            description:
              "Custom Copilot Studio agents within Microsoft 365 environments with proper configuration and team training.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Claude for Teams",
            description:
              "Deploying Anthropic Claude across organisations with custom skills, shared workspaces, and autonomous task completion.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bespoke Builds",
            description:
              "Custom dashboards, internal tools, and workflow automations. Fixed scope, fixed price, working software in weeks.",
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
