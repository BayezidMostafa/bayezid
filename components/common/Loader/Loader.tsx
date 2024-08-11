// app/components/Loader.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Text from "@/components/ui/Text";

const words = ["Hello.", "Welcome to my Portfolio!"];

const wordVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

interface LoaderProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ setLoading, loading }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    if (currentWordIndex < words.length - 1) {
      const interval = setInterval(() => {
        setCurrentWordIndex((prevIndex) => prevIndex + 1);
      }, 1000);

      return () => clearInterval(interval);
    } else {
      // If the last word is being displayed, hold it for 2-3 seconds
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 3000); // 3000ms = 3 seconds

      return () => clearTimeout(timeout);
    }
  }, [currentWordIndex, setLoading]);

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-white dark:bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentWordIndex}
          variants={wordVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="absolute"
        >
          <Text variant="header" className="font-bold text-primary uppercase">
            {words[currentWordIndex]}
          </Text>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Loader;
