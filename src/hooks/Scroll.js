import { useState, useEffect } from "react";

export function Scroll() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [position, setPosition] = useState(
    document.body.getBoundingClientRect()
  );

  const [scrollDirection, setScrollDirection] = useState();

  const listener = e => {
    setPosition(document.body.getBoundingClientRect());
    setScrollDirection(lastScrollTop > -position.top ? "down" : "up");
    setLastScrollTop(-position.top);
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return {
    scrollDirection
  };
}