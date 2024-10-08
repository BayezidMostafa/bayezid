"use client";

import React from "react";
import { motion } from "framer-motion";

const ContactSVG = ({ ...props }) => {
  return (
    <div className="svg-container flex justify-center">
      <motion.svg
        {...props}
        width="300px"
        height="300px"
        viewBox="0 0 1024 1024"
        className="icon"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate="visible"
      >
        <motion.path
          d="M859.4 365.7c-8.9 0-17.5 1.3-25.7 3.7-32-148.2-164.1-259.7-321.7-259.7S222.2 221.2 190.3 369.4c-8.2-2.4-16.8-3.7-25.7-3.7-50.4 0-91.4 41-91.4 91.4v109.7c0 50.4 41 91.4 91.4 91.4s91.4-41 91.4-91.4V438.8c0-141.2 114.8-256 256-256s256 114.8 256 256v109.7c0 92.1-48.9 175.4-127.1 221-16.6-23.1-43.7-38.1-74.2-38.1H457c-50.4 0-91.4 41-91.4 91.4 0 50.4 41 91.4 91.4 91.4h109.7c42.9 0 79-29.8 88.8-69.7 81.6-39.6 141.8-109.7 169.2-193.1 10.7 4.4 22.4 6.8 34.7 6.8 50.4 0 91.4-41 91.4-91.4V457.1c0.1-50.4-41-91.4-91.4-91.4zM182.9 566.9c0 10.1-8.2 18.3-18.3 18.3s-18.3-8.2-18.3-18.3V457.1c0-10.1 8.2-18.3 18.3-18.3s18.3 8.2 18.3 18.3v109.8z m383.8 274.3H457c-10.1 0-18.3-8.2-18.3-18.3 0-10.1 8.2-18.3 18.3-18.3h109.7c10.1 0 18.3 8.2 18.3 18.3 0 10.1-8.2 18.3-18.3 18.3z m311-274.3c0 10.1-8.2 18.3-18.3 18.3s-18.3-8.2-18.3-18.3V457.2c0-10.1 8.2-18.3 18.3-18.3s18.3 8.2 18.3 18.3v109.7z"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: {
              pathLength: 1,
              opacity: 1,
              transition: {
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              },
            },
          }}
        />
        <motion.path
          d="M512 658.3c80.7 0 146.3-65.6 146.3-146.3h-73.1c0 40.3-32.8 73.1-73.1 73.1S439 552.3 439 512h-73.1c-0.2 80.7 65.4 146.3 146.1 146.3z"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: {
              pathLength: 1,
              opacity: 1,
              transition: {
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              },
            },
          }}
        />
      </motion.svg>
    </div>
  );
};

export default ContactSVG;
