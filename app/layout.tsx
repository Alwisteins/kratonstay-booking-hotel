import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "KratonStay – Hotel Nyaman & Strategis di Yogyakarta",
    template: "%s | KratonStay",
  },
  description:
    "KratonStay adalah hotel nyaman dan strategis di Yogyakarta. Cocok untuk liburan maupun perjalanan bisnis dengan fasilitas lengkap dan lokasi terbaik.",
  keywords: [
    "KratonStay",
    "hotel di yogyakarta",
    "penginapan di yogyakarta",
    "hotel dekat malioboro",
    "hotel nyaman jogja",
    "hotel untuk liburan jogja",
  ],
  authors: [{ name: "KratonStay" }],
  creator: "KratonStay",
  publisher: "KratonStay",
  metadataBase: new URL("https://kratonstay.vercel.app"),
  openGraph: {
    title: "KratonStay - Hotel Nyaman & Strategis di Yogyakarta",
    description:
      "Nikmati pengalaman menginap terbaik di Yogyakarta bersama KratonStay. Lokasi strategis, kamar nyaman, dan pelayanan profesional.",
    url: "https://kratonstay.vercel.app",
    siteName: "KratonStay",
    images: [
      {
        url: "https://kratonstay.vercel.app/hero.png",
        width: 1200,
        height: 630,
        alt: "KratonStay Hotel Yogyakarta",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KratonStay - Hotel Nyaman di Yogyakarta",
    description: "Hotel nyaman dan strategis di Yogyakarta untuk liburan dan perjalanan bisnis.",
    images: ["https://kratonstay.vercel.app/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${poppins.variable} ${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
