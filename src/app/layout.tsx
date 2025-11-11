import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shubhanga C S - Portfolio",
  description: "Designer and Developer helping brands craft impactful digital experiences that merge creativity with technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
