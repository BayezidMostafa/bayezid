import Text from "@/components/ui/Text";
import { CommonHeaderProps } from "@/lib/interface";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "@/lib/useAnimation";

const CommonHeader = ({ heading, subHeading }: CommonHeaderProps) => {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeIn("left", "tween", 0.1, 0.4)}
      >
        <Text variant="header">{heading}</Text>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeIn("right", "tween", 0.1, 0.4)}
      >
        <Text variant="subHeading">{subHeading}</Text>
      </motion.div>
    </div>
  );
};

export default CommonHeader;
