import Text from "@/components/ui/Text";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import React from "react";

const Footer = () => {
  return (
    <div className="border-t border-primary mt-10">
      <div className="py-6 max-w-7xl mx-auto px-3">
        <div className="text-center">
          <Text>© Bayezid Mostafa</Text>
        </div>
      </div>
    </div>
  );
};

export default Footer;
