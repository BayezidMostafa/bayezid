"use client";

import { useEffect, useState } from "react";
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
import { AnimatePresence, motion } from "framer-motion";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Inject Tawk.to script dynamically
    const tawkScript = document.createElement("script");
    tawkScript.async = true;
    tawkScript.src = "https://embed.tawk.to/66d7ea3e50c10f7a00a3c04c/1i6tmm17u";
    tawkScript.charset = "UTF-8";
    tawkScript.setAttribute("crossorigin", "*");
    const scriptTag = document.getElementsByTagName("script")[0];
    scriptTag.parentNode?.insertBefore(tawkScript, scriptTag);

    return () => {
      // Cleanup the script if the component unmounts
      tawkScript.remove();
    };
  }, []);

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
                <div className="hidden sm:block">
                  <Cursor />
                </div>
              </>
            )}
          </AnimatePresence>
        </ThemeProvider>
      </body>
    </html>
  );
}
