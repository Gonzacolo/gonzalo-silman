export const site = {
  name: "Gonzalo Silman",
  title: "Gonzalo Silman",
  description:
    "Economist turned founder. I build the roles I want when they don't exist yet.",
  location: "Buenos Aires / San Francisco",
  email: "gonzalosilman@gmail.com",
  social: {
    x: "https://x.com/0xGonzacolo",
    linkedin: "https://www.linkedin.com/in/gonzalosilman",
    instagram: "https://www.instagram.com/gonzalosilman/",
    tiktok: "https://www.tiktok.com/@gonzalosilman",
  },
} as const;

export const homeNav = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#investments", label: "Investments" },
  { href: "#writing", label: "Writing" },
] as const;

export const about = {
  paragraphs: [
    "I studied economics at Universidad Torcuato Di Tella to understand why Argentina keeps breaking. Tech wasn't hiring economists with no experience, so I co-founded one.",
    "For almost five years I ran WakeUp Labs as Co-Founder & COO: 30+ people hired, $4M+ in all-time revenue, deals over $200k, and clients like Coinbase, Arbitrum and The Coca-Cola Company. I led the commercial motion end to end, from first call to delivery.",
    "What I'm good at: taking complex problems, making them simple, and validating ideas with the least effort possible. Give me the hardest task and I'll take it from zero to something.",
  ],
  lookingFor:
    "Wrapping up my exploration chapter in San Francisco, meeting founders until October 10. Next up: joining or building something bigger, selling B2B or B2C, and living hypergrowth firsthand.",
  bullets: [
    "Guest Faculty at UTDT for the New Business Development capstone",
    "Languages: Spanish, English, German, Portuguese",
  ],
} as const;

export type Project = {
  slug: string;
  name: string;
  subtitle: string;
  body: string;
  tag: string;
  href: string | null;
  image: string | null;
};

export const projects: readonly Project[] = [
  {
    slug: "biodec",
    name: "Biodec SRL",
    subtitle: "AI-ready ERP for a medical supplies company",
    body: "Replaced a 20+ year old legacy system at a ~60-person medical device importer. Rolled out slice by slice (stock, then purchase orders). Now processes ~40-45% of company revenue, built with a two-person team and AI coding tools. Leadership queries the database in plain language.",
    tag: "Operator / Builder · 2025-2026",
    href: null,
    image: null,
  },
  {
    slug: "wakeup-labs",
    name: "WakeUp Labs",
    subtitle: "Co-Founder & COO",
    body: "Software studio building production systems for crypto and fintech. Grew it to 30+ people and $4M+ all-time revenue, selling to the US, Europe and Israel. Still a shareholder.",
    tag: "Co-Founder · 2022-2026",
    href: "https://www.wakeuplabs.io",
    image: "https://www.wakeuplabs.io/images/og-default.png",
  },
  {
    slug: "coinflip",
    name: "Coinflip",
    subtitle: "An on-chain coin flip",
    body: "Pick Bitcoin or Ether, flip, settle on-chain. Verifiable randomness via Chainlink VRF on Arbitrum. Currently in testnet.",
    tag: "Side project · 2026",
    href: "https://www.coinflipgame.xyz",
    image: null,
  },
] as const;

export const featuredProjectSlugs = ["biodec", "wakeup-labs"] as const;

export const featuredProjects = featuredProjectSlugs.map(
  (slug) => projects.find((p) => p.slug === slug)!,
);

export const investments = [
  {
    name: "HYVE",
    body: "HYROX and hybrid training club in Buenos Aires (Recoleta and Núñez).",
    href: "https://hyve.com.ar/",
    image: "https://hyve.com.ar/media/og-hyve.jpg",
  },
  {
    name: "Beato",
    body: "Pizzeria in Córdoba, Argentina.",
    href: "https://www.instagram.com/beato_cba/",
    image: null as string | null,
  },
  {
    name: "GringoEstate",
    body: "Real estate without the tie. Sales, short-term rentals and advisory in Buenos Aires.",
    href: "https://www.gringo.estate/",
    image: "https://www.gringo.estate/images/gringoestate-og-image.jpg",
  },
] as const;

export const writing = [
  {
    title: "Why prediction markets need privacy",
    blurb:
      "On front-running, information aggregation and why the best forecasts need private positions.",
    source: "LinkedIn",
    href: "https://www.linkedin.com/pulse/prediction-markets-privacy-gonzalo-silman-wbfof/",
  },
  {
    title: "Presente y futuro de los NFTs (ES)",
    blurb:
      "My first article: where the NFT market stood in 2022 and which use cases would move it forward.",
    source: "X",
    href: "https://x.com/0xGonzacolo/status/1507902381165588481",
  },
] as const;

export const footerLinks = [
  { href: site.social.x, label: "X" },
  { href: site.social.linkedin, label: "LinkedIn" },
  { href: site.social.instagram, label: "Instagram" },
  { href: site.social.tiktok, label: "TikTok" },
  { href: `mailto:${site.email}`, label: "Email" },
] as const;
