import { NavLinksI } from "@/lib/interface";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sidebarVariants } from "@/lib/animation";
import { ThemeToggle } from "@/components/ui/theme-toggle";

interface SidebarProps {
  NavLinks: NavLinksI[];
  setIsSidebarOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ NavLinks, setIsSidebarOpen }) => {
  return (
    <motion.aside
      key="sidebar"
      className="fixed inset-0 bg-secondary z-40 flex justify-center items-center"
      variants={sidebarVariants}
      initial="closed"
      animate="open"
      exit="closed"
    >
      <div className="p-5 flex flex-col items-center justify-center gap-5">
        {NavLinks.map((link, index) => (
          <motion.div key={index} className="">
            <Link
              onClick={() => setIsSidebarOpen(false)}
              href={link.href}
              className="text-4xl font-semibold text-primary custom-underline"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
        <ThemeToggle />
      </div>
    </motion.aside>
  );
};

export default Sidebar;
