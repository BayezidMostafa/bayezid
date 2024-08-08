import { useState, useEffect } from "react";

interface ScrollPosition {
  scrollY: number;
}

function useScrollPosition(): ScrollPosition {
  const [scrollPos, setScrollPos] = useState<ScrollPosition>({ scrollY: 0 });

  useEffect(() => {
    function handleScroll() {
      setScrollPos({ scrollY: window.scrollY });
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollPos;
}

export default useScrollPosition;
