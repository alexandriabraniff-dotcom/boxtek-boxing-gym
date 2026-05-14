import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const bebas = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boxtek Boxing Gym | Edwardstown, Adelaide SA",
  description:
    "Adelaide's premier boxing gym. Train with AIBA-accredited coaches in a world-class facility at 3 Lagunta Ave, Edwardstown SA. Classes for all levels — beginner to elite.",
  keywords: [
    "boxing gym Adelaide",
    "boxing classes Edwardstown",
    "Boxtek Boxing Gym",
    "boxing training SA",
    "Adelaide boxing",
    "fitness boxing Adelaide",
  ],
  openGraph: {
    title: "Boxtek Boxing Gym",
    description: "Adelaide's premier boxing gym. Train like a champion.",
    url: "https://boxtekboxinggym.com.au",
    siteName: "Boxtek Boxing Gym",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 400,
        height: 400,
        alt: "Boxtek Boxing Gym",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-white">
        {/* Creator banner */}
        <div className="bg-[#F5B800] text-[#0A0A0A] text-center text-xs py-2 px-4 font-semibold">
          Website created by <strong>Alexandria Braniff</strong> &mdash;{" "}
          <a href="mailto:alexandriabraniff@gmail.com" className="underline hover:opacity-70">
            alexandriabraniff@gmail.com
          </a>
        </div>

        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
