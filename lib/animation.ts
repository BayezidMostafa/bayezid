export const navVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: -100, transition: { duration: 0.5 } },
};
export const sidebarButtonVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, x: 100, transition: { duration: 0.5 } },
};

export const sidebarVariants = {
  open: {
    clipPath: `ellipse(150% 150% at 100% 0%)`, // Start from top right, extend to bottom left
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.5,
    },
  },
  closed: {
    clipPath: "ellipse(0% 0% at 100% 0%)", // Start from top right
    opacity: 0,
    x: "100%",
    transition: {
      delay: 0.2,
      type: "tween",
      ease: "easeIn",
      duration: 0.5,
    },
  },
};
