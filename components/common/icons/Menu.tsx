import React from 'react';
import { motion } from 'framer-motion';

interface MenuProps {
  isSidebarOpen: boolean;
  [key: string]: any;
}

const Menu: React.FC<MenuProps> = ({ isSidebarOpen, ...props }) => {
  // Define variants for the lines in the SVG
  const line1Variants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: 45, translateY: 6 },
  };
  const line2Variants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };
  const line3Variants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: -45, translateY: -6 },
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-align-justify"
      initial={false}
      animate={isSidebarOpen ? 'open' : 'closed'}
      {...props}
    >
      <motion.line 
        x1="3" x2="21" y1="6" y2="6" 
        variants={line1Variants}
      />
      <motion.line 
        x1="3" x2="21" y1="12" y2="12" 
        variants={line2Variants}
      />
      <motion.line 
        x1="3" x2="21" y1="18" y2="18" 
        variants={line3Variants}
      />
    </motion.svg>
  );
};

export default Menu;
