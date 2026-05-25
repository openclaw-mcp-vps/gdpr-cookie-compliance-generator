import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GDPR Cookie Compliance Generator",
  description: "Generate legally compliant cookie banners instantly. Scan your website, categorize cookies, and get embeddable GDPR-compliant consent banners."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a70a4b45-e4bd-4617-9a06-9bdf34b5cd96"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
