import RoomsPageClient from "@/components/rooms/RoomsPageClient";

export const metadata = {
  title: "Rooms & Suites | The Verdant Haven Luxury Boutique Hotel",
  description:
    "Explore our collection of eighteen secluded suites and villas in Coorg. Featuring private garden verandas, freestanding brass soaking tubs, fireplaces, and panoramic mountain views.",
  keywords: [
    "hotel rooms Coorg",
    "luxury suites",
    "boutique hotel accommodation",
    "heritage villas",
    "private plunge pool suite",
    "family suites",
  ],
  openGraph: {
    title: "Rooms & Suites | The Verdant Haven Luxury Boutique Hotel",
    description:
      "Thoughtfully designed spaces where comfort, calm, and considered details come together. Discover our private suites and villas.",
    type: "website",
  },
};

export default function RoomsPage() {
  return <RoomsPageClient />;
}
