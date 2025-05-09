import { useCallback, useEffect, useRef, useState } from "react";

export const useHover = <T extends HTMLElement>() => {
  const [hovered, setHovered] = useState(false);

  const ref = useRef<T>(null);

  const handleMouseEnter = useCallback(() => setHovered(true), []);
  const handleMouseLeave = useCallback(() => setHovered(false), []);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    node.addEventListener("mouseenter", handleMouseEnter);
    node.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      node.removeEventListener("mouseenter", handleMouseEnter);
      node.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseEnter, handleMouseLeave]);

  return {
    hovered,
    ref,
  };
};
