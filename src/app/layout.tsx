import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SPACING } from "@/constants/spacing";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Sriharsha Gade - AI Product Engineer", template: "%s | Sriharsha Gade" },
  description: "Portfolio of Sriharsha Gade, an AI engineer and product builder creating production-ready AI products.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className="dark" lang="en">
      <body>
        <Navbar />
        <div className={`${SPACING.navbar.mobile} ${SPACING.navbar.desktop}`}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
