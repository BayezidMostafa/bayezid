// components/ui/CTAButton.tsx
"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { AnimatePresence, motion } from "framer-motion";
import { social_links } from "@/lib/constants";

// Define animation variants for the parent and children
const containerVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3,
    },
  },
};

const CTA = () => {
  const [open, setOpen] = useState(false);

  const handleExpand = () => {
    setOpen(!open);
  };

  return (
    <div className="flex flex-col items-center w-16">
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            key="cta-open"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
            className="flex flex-col justify-center items-center gap-5 py-5"
          >
            {social_links?.map((s, i) => {
              const IconComponent = s.Icon;
              return (
                <motion.a
                  target="_blank"
                  key={i}
                  href={s?.link}
                  className="w-full flex justify-center mt-2"
                  variants={childVariants}  
                >
                  <IconComponent />
                </motion.a>
              );
            })}
            <motion.span variants={childVariants}>
              <ThemeToggle />
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
          x: 100,
          y: 100,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 0.8,
          type: "tween",
          stiffness: 300,
        }}
        onClick={handleExpand}
        className=""
      >
        {!open ? (
          <Plus className="text-primary w-9 h-9 rounded-full hover:rotate-180 transition-all duration-500" />
        ) : (
          <Minus className="text-primary w-9 h-9 rounded-full hover:rotate-180 transition-all duration-500" />
        )}
      </motion.div>
    </div>
  );
};

export default CTA;
