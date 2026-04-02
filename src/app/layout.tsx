import type React from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "../context/ThemeContext";
import { Toaster } from "../components/ui/toaster";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Vinay Choudhary",
  description: "Personal portfolio website showcasing my projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
