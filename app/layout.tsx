import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Hold The Line 2026 — Black Voter Protection Playbook",
  description:
    "An AI-powered companion to The Black Voter Protection Playbook 2026. Free tools for voters, organizers, and campaigns defending the right to vote after Louisiana v. Callais.",
  openGraph: {
    title: "Hold The Line 2026",
    description:
      "Free AI-powered tools to defend Black voter access in the 2026 midterms.",
    url: "https://holdtheline2026.org",
    siteName: "Hold The Line 2026",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hold The Line 2026",
    description:
      "Free AI-powered tools to defend Black voter access in the 2026 midterms.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
