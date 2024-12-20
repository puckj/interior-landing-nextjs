import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AOSInit from "@/components/AOSInit";

const dmSerif = localFont({
  src: "./fonts/dm-serif.ttf",
  variable: "--font-dm-serif",
  weight: "400",
});
const jost = localFont({
  src: "./fonts/jost.ttf",
  variable: "--font-jost",
  weight: "400 700",
});

export const metadata: Metadata = {
  title: "Interno Interior",
  description: "Stylish and modern interior design solutions for every space.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit />
      <body
        className={`${dmSerif.variable} ${jost.variable} antialiased bg-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
