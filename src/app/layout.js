import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "The Verdant Haven | Luxury Heritage Sanctuary & Boutique Hotel",
  description:
    "Experience understated luxury and timeless serenity at The Verdant Haven. Nestled in tranquil highland landscapes with refined suites, farm-to-table dining, and holistic wellness.",
  keywords: [
    "luxury hotel",
    "boutique resort",
    "heritage hotel",
    "wellness retreat",
    "fine dining",
  ],
  openGraph: {
    title: "The Verdant Haven | Luxury Heritage Sanctuary & Boutique Hotel",
    description:
      "Where every stay becomes a story. Discover an intimate sanctuary crafted for slow living, thoughtful hospitality, and quiet elegance.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#F8F6F0] text-[#292B27] font-sans antialiased selection:bg-[#78866B]/20 selection:text-[#292B27]">
        {children}
      </body>
    </html>
  );
}
