import { useEffect, useState } from "react";
import { clsx } from "clsx";

function ScrolledText() {
  const [position, setPosition] = useState<number>(0);
  const [showClass, setShowClass] = useState<boolean>(true);
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
      setPosition(0);
    });

    const interval = setInterval(() => {
      setShowClass(true);

      const pos1 = screenSize <= 448 ? -55 : -74;
      const pos2 = screenSize <= 448 ? -111 : -150;
      const pos3 = screenSize <= 448 ? -167 : -226;

      if (position === 0) setPosition(pos1);
      if (position === pos1) setPosition(pos2);
      if (position === pos2) {
        setPosition(pos3);

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
