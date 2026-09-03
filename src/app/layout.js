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

export const metadata = {
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
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
