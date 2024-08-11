"use client";

import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Nav from "@/components/common/Navbar/Nav";
import Footer from "@/components/common/Footer/Footer";
import Cursor from "@/components/common/Cursor/Cursor";
import { Toaster } from "react-hot-toast";
import CTA from "@/components/common/CTA/CTA";
import Loader from "@/components/common/Loader/Loader";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

// export const metadata: Metadata = {
//   title: "Bayezid Mostafa",
//   description: "Portfolio created by Bayezid Mostafa",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);
  return (
    <html lang="en">
      <head>
        <title>Bayezid Mostafa</title>
      </head>
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
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div
                key="loader-transition"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.5 }}
              >
                <Loader loading={loading} setLoading={setLoading} />
              </motion.div>
            ) : (
              <>
                <Toaster />
                <Nav />
                {children}
                <div className="fixed bottom-3 right-0 sm:bottom-5 sm:right-2 md:bottom-10 md:right-6 z-10">
                  <CTA />
                </div>
                <Footer />
                <Cursor />
              </>
            )}
          </AnimatePresence>
        </ThemeProvider>
      </body>
    </html>
  );
}
