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
  { href: "#mentions", label: "Mentions" },
] as const;

export const brands = {
  utdt: "https://www.utdt.edu/",
  wakeup: "https://www.wakeuplabs.io/",
  coinbase: "https://www.coinbase.com/",
  arbitrum: "https://arbitrum.io/",
  cocaCola: "https://www.coca-cola.com/",
} as const;

export const about = {
  lookingFor:
    "Wrapping up my exploration period in San Francisco. Ready to build something huge with friends, joining an amazing team or on my own. Exploring growth hacking mechanisms.",
  bullets: [
    "UTDT professor for the New Business Development class",
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
  imageFit?: "cover" | "contain";
};

export const projects: readonly Project[] = [
  {
    slug: "biodec",
    name: "Biodec SRL",
    subtitle: "AI-ready ERP for a medical supplies company",
    body: "Replaced a 20+ year old legacy system at a ~60-person medical device importer. Rolled out slice by slice (stock, then purchase orders). Now processes ~40-45% of company revenue, built with a two-person team and AI coding tools. Leadership queries the database in plain language.",
    tag: "Operator / Builder · 2025-2026",
    href: "https://www.biodec.com.ar/",
    image: "/images/biodec.png",
    imageFit: "contain",
  },
  {
    slug: "wakeup-labs",
    name: "WakeUp Labs",
    subtitle: "Founder",
    body: "Software studio building production systems for crypto and fintech. Grew it to 25+ people, selling to the US, Europe and Israel. Still a shareholder.",
    tag: "Founder · 2022-2026",
    href: "https://www.wakeuplabs.io",
    image: "https://www.wakeuplabs.io/images/og-default.png",
  },
  {
    slug: "predict-it",
    name: "Predict It!",
    subtitle: "ETHGlobal Cannes 2026 hackathon winner",
    body: "Won Best Prediction Market Built on Arc Network (Circle) at ETHGlobal Cannes. Built solo in 48 hours: a Messi penalty prediction game with on-chain escrow and USDC settlement on Arc. Frontend, smart contracts, product, and pitch.",
    tag: "Hackathon · 2026",
    href: "https://predict-it-one.vercel.app/",
    image: "/images/predict-it.png",
  },
  {
    slug: "coinflip",
    name: "Coinflip",
    subtitle: "An on-chain coin flip",
    body: "An on-chain coin flip. Pick Bitcoin or Ether, flip, settle on-chain with verifiable randomness (Chainlink VRF on Arbitrum). Live at coinflipgame.xyz.",
    tag: "Side project · 2026",
    href: "https://www.coinflipgame.xyz",
    image: "/images/coinflip.png",
  },
] as const;

export const featuredProjectSlugs = ["biodec", "wakeup-labs"] as const;

export const featuredProjects = featuredProjectSlugs.map(
  (slug) => projects.find((p) => p.slug === slug)!,
);

export type Investment = {
  name: string;
  body: string;
  href: string;
  image: string | null;
};

export const investments: readonly Investment[] = [
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
    image: "/images/beato.jpg",
  },
  {
    name: "GringoEstate",
    body: "Real estate without the tie. Sales, short-term rentals and advisory in Buenos Aires.",
    href: "https://www.gringo.estate/",
    image: "/images/gringoestate.jpg",
  },
];

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

export const mentions = [
  {
    title: "Criptomonedas y testamentos",
    href: "https://tn.com.ar/tecno/novedades/2022/06/19/criptomonedas-y-testamentos-como-se-heredan-los-bienes-digitales/",
  },
  {
    title: "Play-to-earn",
    href: "https://tn.com.ar/tecno/juegos/2021/08/27/todo-sobre-la-movida-play-to-earn-los-videojuegos-que-recompensan-al-usuario-con-criptoactivos/",
  },
  {
    title: "Bitcoin en El Salvador",
    href: "https://politologosalwhisky.com/2021/10/14/la-adopcion-de-bitcoin-en-el-salvador-el-dia-en-que-bitcoin-paso-de-puro-verso-a-cancion-de-masas/",
  },
  {
    title: "DAO Stack Essentials",
    href: "https://www.youtube.com/watch?v=67acXiQyowE",
  },
  {
    title: "NFTs, POAP y Social Web3",
    href: "https://www.youtube.com/watch?v=mT2KhJ63lVo",
  },
  {
    title: "Ep. 4 · WakeUp Labs",
    href: "https://www.youtube.com/watch?v=GQHkUH1fn40",
  },
  {
    title: "Semana Solana",
    href: "https://www.youtube.com/watch?v=xKSnMaHBqVo",
  },
  {
    title: "Ethereum hoy",
    href: "https://www.youtube.com/watch?v=I32_sRktNKY",
  },
  {
    title: "CryptoHub Space #3",
    href: "https://www.youtube.com/watch?v=kLf5RHCVtok",
  },
] as const;

export const footerLinks = [
  { href: site.social.x, label: "X" },
  { href: site.social.linkedin, label: "LinkedIn" },
  { href: site.social.instagram, label: "Instagram" },
  { href: site.social.tiktok, label: "TikTok" },
  { href: `mailto:${site.email}`, label: "Email" },
] as const;
