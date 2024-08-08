import React, { useState, useEffect } from "react";

export default function useAnimatedNumber(target: number, duration = 1000) {
  const [displayedValue, setDisplayedValue] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const endValue = target;

    const tick = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(1, elapsedTime / duration);
      const currentValue = Math.round(endValue * progress);

      setDisplayedValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    tick();

    // Reset to 0 when the target changes (optional)
    return () => setDisplayedValue(0);
  }, [target, duration]);

  return displayedValue;
}
