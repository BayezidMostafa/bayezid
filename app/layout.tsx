// app/layout.tsx

import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Nav from "@/components/common/Navbar/Nav";
import Footer from "@/components/common/Footer/Footer";
import Cursor from "@/components/common/Cursor/Cursor";
import { Toaster } from "react-hot-toast";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bayezid Mostafa",
  description: "Portfolio created by Bayezid Mostafa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          maxWidth: "100vw",
          overflow: "hidden",
        }}
        className={ubuntu.className}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          <Nav />
          {children}
          <Footer />
          <Cursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
