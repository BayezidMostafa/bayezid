import clsx from "clsx";
import React, { ElementType } from "react";

const variants = {
  heading: "text-lg sm:text-xl md:text-2xl font-bold",
  subHeading: "text-base sm:text-xl font-semibold",
  default: "text-base",
  small: "text-sm",
  extraLarge: "text-3xl sm:text-5xl md:text-7xl font-bold",
  header: "text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold",
  subHeader: "text-lg sm:text-2xl md:text-4xl font-bold",
};

const defaultVariant = "default";

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: keyof typeof variants;
  as?: ElementType;
}

const Text: React.FC<TextProps> = ({
  variant = defaultVariant,
  className,
  children,
  as: Component = "div",
  ...props
}) => {
  const variantClasses = variants[variant];
  const classes = clsx(variantClasses, className);

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

export default Text;
