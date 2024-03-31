import { useEffect, useState } from "react";
import { clsx } from "clsx";

function ScrolledText() {
  const [position, setPosition] = useState<number>(0);
  const [showClass, setShowClass] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowClass(true);
      if (position === 0) setPosition(-74);
      if (position === -74) setPosition(-150);
      if (position === -150) {
        setPosition(-226);

        const timeout = setTimeout(() => {
          setShowClass(false);
          setPosition(0);
          clearTimeout(timeout);
        }, 500);
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [position]);

  return (
    <div
      className={clsx(
        "absolute flex flex-col gap-4",
        showClass && "ease-in-out duration-500",
      )}
      style={{ transform: `translateY(${position}px)` }}
    >
      <span>create</span>
      <span>engineer</span>
      <span>scale</span>
      <span>create</span>
    </div>
  );
}

export default ScrolledText;
