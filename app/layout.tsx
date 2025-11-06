import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Incredible India | Tourism Pitch Deck",
  description: "Interactive pitch deck showcasing the future of Indian tourism."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white antialiased">{children}</body>
    </html>
  );
}
