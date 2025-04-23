import type { Metadata } from "next";
import "./globals.css";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import Container from "@/components/container";
import NavBar from "@/components/navbar/navbar";

export const metadata: Metadata = {
  title: "Leo Constantin | Full Stack Developer",
  description: "Personal website of Leo Constantin , Full stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <Container>{children}</Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
