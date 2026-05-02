import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harsh Gupta | Interactive Developer & UI/UX Designer",
  description: "Portfolio of Harsh Gupta, a specialized Frontend Developer and UI/UX Designer creating high-performance, interactive web experiences.",
  icons: {
    icon: "/icon.png",
  },
};

import CustomCursor from "@/components/CustomCursor/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
