"use client";

/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import Text from "../../ui/Text";
import Link from "next/link";
import useScrollPosition from "@/lib/observer";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Menu } from "../icons";
import { navVariants, sidebarVariants } from "@/lib/animation";
import Sidebar from "../Sidebar/Sidebar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavProps {
  children?: React.ReactNode;
}

interface NavLinksI {
  href: string;
  label: string;
}

export const NavLinks: NavLinksI[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/projects",
    label: "Projects",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

interface SideButtonProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

const SideButton: React.FC<SideButtonProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const setTransform = (event: MouseEvent, item: EventTarget & HTMLElement) => {
    const bounds = item.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;
    const deltaX = event.clientX - centerX;
    const deltaY = event.clientY - centerY;
    // Adjust the divisor here to increase or decrease the magnetic area
    const divisor = 1; // Decrease this value to increase the magnetic effect area
    x.set(deltaX / divisor);
    y.set(deltaY / divisor);
  };

  return (
    <div className="sidebar-slow">
      <motion.div
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        style={{ x, y, userSelect: "none" }}
        onPointerMove={(e) =>
          setTransform(e as unknown as MouseEvent, e.currentTarget)
        }
        onPointerLeave={() => {
          x.set(0);
          y.set(0);
        }}
        whileTap={{ scale: 1 }}
        className={`fixed right-5 top-5 z-50 bg-secondary rounded-full p-4 cursor-pointer shadow-md`}
        whileHover={{ scale: 1.1 }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        dragElastic={0.3}
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, y: "-100%" }}
        transition={{
          duration: 0.5,
        }}
      >
        <Menu isSidebarOpen={isSidebarOpen} />
      </motion.div>
    </div>
  );
};

const Nav: React.FC<NavProps> = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { scrollY } = useScrollPosition();
  useEffect(() => {
    if (scrollY > 250 && isVisible) {
      setIsVisible(false);
    } else if (scrollY <= 250 && !isVisible) {
      setIsVisible(true);
    }
  }, [scrollY, isVisible]);

  const toggleBodyScroll = (shouldScroll: boolean) => {
    if (shouldScroll) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  useEffect(() => {
    toggleBodyScroll(!isSidebarOpen);
    return () => {
      toggleBodyScroll(true);
    };
  }, [isSidebarOpen]);

  const MotionLink = motion(Link);
  const mapRange = (
    inputLower: number,
    inputUpper: number,
    outputLower: number,
    outputUpper: number
  ) => {
    const INPUT_RANGE = inputUpper - inputLower;
    const OUTPUT_RANGE = outputUpper - outputLower;

    return (value: number) =>
      outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0);
  };

  const setTransform = (
    item: HTMLElement & EventTarget,
    event: React.PointerEvent,
    x: MotionValue,
    y: MotionValue
  ) => {
    const bounds = item.getBoundingClientRect();
    const relativeX = event.clientX - bounds.left;
    const relativeY = event.clientY - bounds.top;
    const xRange = mapRange(0, bounds.width, -1, 1)(relativeX);
    const yRange = mapRange(0, bounds.height, -1, 1)(relativeY);
    x.set(xRange * 15);
    y.set(yRange * 15);
    console.log(xRange);
  };

  return (
    <main>
      <motion.nav
        className={`max-w-7xl mx-auto fixed right-0 left-0 z-30`}
        animate={isVisible ? "visible" : "hidden"}
        initial="hidden"
        variants={navVariants}
      >
        <section className="py-5 px-3 flex items-center justify-between relative slowMotion">
          <div>
            <Text className="hidden md:block" variant="heading" as="h1">
              <Link href="/">Bayezid Mostafa</Link>
            </Text>
            <Text className="block md:hidden" variant="heading" as="h1">
              <Link href="/">BM</Link>
            </Text>
          </div>
          <ul className="flex items-center gap-4 sm:gap-8">
            {NavLinks?.map((l, i) => {
              const x = useMotionValue(0);
              const y = useMotionValue(0);
              const textX = useTransform(x, (latest) => latest * 0.5);
              const textY = useTransform(y, (latest) => latest * 0.5);
              return (
                <motion.li
                  onPointerMove={(event) => {
                    const item = event.currentTarget;
                    setTransform(item, event, x, y);
                  }}
                  key={l?.href}
                  onPointerLeave={(event) => {
                    x.set(0);
                    y.set(0);
                  }}
                  style={{ x, y }}
                >
                  <MotionLink
                    href={l?.href}
                    className={cn(
                      "sm:text-lg font-semibold custom-underline relative transition-all duration-500 ease-out rounded-md",
                      pathname === l?.href ? "" : ""
                    )}
                  >
                    <motion.span
                      className="text-primary z-10 relative"
                      style={{ x: textX, y: textY }}
                    >
                      {l?.label}
                    </motion.span>
                    {pathname === l?.href ? (
                      <motion.div
                        transition={{ type: "spring" }}
                        layoutId="underline"
                        className="absolute w-full h-[5px] rounded-md left-0 -bottom-[5px] bg-secondary"
                      ></motion.div>
                    ) : null}
                  </MotionLink>
                </motion.li>
              );
            })}
          </ul>
        </section>
      </motion.nav>
      {/* Side button */}
      <AnimatePresence>
        {!isVisible && (
          <SideButton
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isSidebarOpen && (
          <Sidebar NavLinks={NavLinks} setIsSidebarOpen={setIsSidebarOpen} />
        )}
      </AnimatePresence>
    </main>
  );
};

export default Nav;
