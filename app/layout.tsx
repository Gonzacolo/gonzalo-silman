import type { Metadata } from "next";
import { DM_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gonzalo Silman",
  description:
    "Economist turned founder. I build the roles I want when they don't exist yet.",
  openGraph: {
    title: "Gonzalo Silman",
    description:
      "Economist turned founder. I build the roles I want when they don't exist yet.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Gonzalo Silman",
    description:
      "Economist turned founder. I build the roles I want when they don't exist yet.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
