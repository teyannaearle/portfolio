import { useState, useEffect } from "react";

export function WatchScroll() {
  const [scrolledToBottom, setScrolledToBottom] = useState(false)
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [position, setPosition] = useState(
    document.body.getBoundingClientRect()
  );

  const [scrollDirection, setScrollDirection] = useState();

  const handleScroll = () => {
    const bottom = Math.ceil(window.innerHeight + window.scrollY)  >= document.documentElement.scrollHeight

    setPosition(document.body.getBoundingClientRect());
    setScrollDirection(lastScrollTop > -position.top ? "down" : "up");
    setLastScrollTop(-position.top);
    setScrolledToBottom(bottom)
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return {
    scrollDirection,
    scrolledToBottom
  };
}