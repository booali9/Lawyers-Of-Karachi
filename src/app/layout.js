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
  title: "Karachi Legal House | Professional Law Firm in Pakistan",
  description: "Karachi Legal House is a premier law firm in Pakistan offering expert legal services in Criminal Law, Family Law, Corporate Law, and more. Get a free case evaluation today.",
  keywords: ["Lawyer in Karachi", "Law Firm Pakistan", "Legal Services", "Criminal Lawyer", "Family Lawyer", "Karachi Legal House"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
