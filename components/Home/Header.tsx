"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Text from "../ui/Text";
import { Button } from "../ui/button";
import { fadeIn, textVariant, zoomIn } from "@/lib/useAnimation";

const Header = () => {
  const goDownMotion: Variants = {
    initial: { y: -10, opacity: 0 },
    animate: {
      y: 10,
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1.5,
      },
    },
  };

  const sliderVariants: Variants = {
    initial: {
      x: "-100%",
    },
    animate: {
      x: ["100%", "-100%", "100%"],
      transition: {
        x: {
          duration: 50,
          ease: "linear",
          repeat: Infinity,
        },
      },
    },
  };

  const ButtonVariant1: Variants = {
    initial: {
      x: "-100%",
      y: "50%",
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        x: {
          duration: 0.6,
          type: "tween",
          ease: "linear",
        },
      },
    },
  };

  const ButtonVariant2: Variants = {
    initial: {
      x: "100%",
      y: "50%",
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        x: {
          duration: 0.6,
          type: "tween",
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="h-[100vh] relative flex items-center justify-center max-w-screen overflow-hidden">
      <div className="flex flex-col gap-2 w-full text-center sm:text-start max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeIn("left", "tween", 0.002, 0.5)}
        >
          <Text variant="subHeading">Hi there! I&apos;m</Text>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeIn("up", "tween", 0.002, 0.5)}
        >
          <Text variant="extraLarge">Bayezid Mostafa</Text>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeIn("left", "tween", 0.3, 0.5)}
        >
          <Text variant="subHeader">
            I&apos;m a front-end developer dedicated to building seamless and
            visually stunning websites
          </Text>
        </motion.div>
        <div className="mt-6 flex gap-4 justify-center sm:justify-start">
          <a href="#about">
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fadeIn("up", "spring", 0.3, 0.5)}
            >
              <Button variant={"outline"} size={"lg"}>
                Learn More
              </Button>
            </motion.div>
          </a>
          <a href="#contact">
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fadeIn("up", "spring", 0.4, 0.5)}
            >
              <Button variant={"destructive"} size={"lg"}>
                Contact Me
              </Button>
            </motion.div>
          </a>
        </div>
        <a href="#about">
          <div className="flex justify-center">
            <motion.div
              className="absolute bottom-10 transform cursor-pointer z-20"
              initial="initial"
              animate="animate"
              variants={goDownMotion}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </motion.div>
          </div>
        </a>
        {/* Welcome text */}
      </div>
      <motion.div
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        className="absolute bottom-20 md:bottom-32 left-0 right-0 mx-auto text-center z-10"
      >
        <Text className="text-8xl md:text-[180px] lg:text-[200px] xl:text-[220px] 2xl:text-[250px] font-bold opacity-5">
          Welcome!
        </Text>
      </motion.div>
    </div>
  );
};

export default Header;
