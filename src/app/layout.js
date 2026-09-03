import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shams Law Chamber | Barristers & Advocates — Karachi, Hyderabad, Sukkur",
    template: "%s | Shams Law Chamber",
  },
  description:
    "Shams Law Chamber is a full-service law firm established in 2002 and registered with the Sindh Bar Council (No. 663/BC), with offices in Karachi, Hyderabad and Sukkur. Litigation, corporate advisory, dispute resolution and regulatory compliance across 16 areas of law.",
  keywords: [
    "Shams Law Chamber",
    "Lawyer in Karachi",
    "Law Firm Sindh",
    "Advocate High Court Sindh",
    "Corporate Lawyer Pakistan",
    "Criminal Lawyer Karachi",
    "Family Lawyer Karachi",
    "Jahangir Shams",
    "Fayazuddin Rajper",
  ],
  // icon.png / apple-icon.png / opengraph-image.png / twitter-image.png in
  // src/app are picked up automatically by Next's file conventions.
  applicationName: "Shams Law Chamber",
  authors: [{ name: "Shams Law Chamber" }],
  creator: "Shams Law Chamber",
  publisher: "Shams Law Chamber",
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: "Shams Law Chamber",
    title: "Shams Law Chamber | Barristers & Advocates",
    description:
      "A full-service law firm established in 2002 and registered with the Sindh Bar Council (No. 663/BC), with offices in Karachi, Hyderabad and Sukkur.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shams Law Chamber | Barristers & Advocates",
    description:
      "Litigation, corporate advisory, dispute resolution and regulatory compliance across Sindh since 2002.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
