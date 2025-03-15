import type { Metadata } from "next";
import { ThemeProvider } from "@/theme/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gulkaran Singh | Portfolio",
  description:
    "Information about me, work experience, projects, notes, and more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {/* <ThemeProvider attribute="class" defaultTheme="dark" enableSystem> */}
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
