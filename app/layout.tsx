import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CollabMind — Creator Collaboration Intelligence",
  description: "Find the right creator partners, manage outreach and learn from every outcome.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
