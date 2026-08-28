import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Sofia_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
});
const sofiaSans = Sofia_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sofia-sans"
})

export const metadata: Metadata = {
  title: "Eveez — Mobility for Livelihoods",
  description:
    "Eveez is an electric mobility platform enabling riders, entrepreneurs and businesses across India.",
  generator: "Eveez Mobility",
};
export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#F47621",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body
        className={`${sofiaSans.variable} ${ibmPlexMono.variable} antialiased`}
      >
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
