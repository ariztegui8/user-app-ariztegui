import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Tabs from "@/components/Tabs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "User",
  description: "Site for users",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Tabs />
        {children}
        </body>
    </html>
  );
}
