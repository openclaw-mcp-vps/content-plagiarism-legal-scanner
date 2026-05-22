import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CopyGuard – Scan Content for Copyright Violations",
  description: "Scan blog posts and social media content against copyright databases before publishing. Get violation reports and safe alternatives instantly."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="03eb68d5-cc8b-4449-9bfa-f8f9febfa76d"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
