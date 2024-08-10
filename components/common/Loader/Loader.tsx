// app/components/Loader.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Text from "@/components/ui/Text";

const words = [
  "Hello.",
  "Welcome to my Portfolio!"
];

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
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => {
        if (prevIndex + 1 === words.length) {
          clearInterval(interval);
          setLoading(false);
          return prevIndex;
        }
        return prevIndex + 1;
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-secondary">
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
          <Text variant="header" className="font-bold text-primary">{words[currentWordIndex]}</Text>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Loader;
