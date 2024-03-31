import { useEffect, useRef, useState } from "react";

function ScrollSnap() {
  const block1 = useRef(null);
  const block2 = useRef(null);
  const block3 = useRef(null);

  const [activeBlock, setActiveBlock] = useState(block1);
  const [isScrollAvailable, setIsScrollAvailable] = useState(true);

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();

      if (event.deltaY > 0 && isScrollAvailable) {
        setIsScrollAvailable(false);
        console.log("down", activeBlock, isScrollAvailable);

        if (activeBlock.current === block1.current) {
          console.log("block2");
          block2.current?.scrollIntoView({ behavior: "smooth" });
          setActiveBlock((prevActiveBlock) =>
            prevActiveBlock === block1 ? block2 : prevActiveBlock,
          );
        }

        if (activeBlock.current === block2.current) {
          console.log("block3");
          block3.current?.scrollIntoView({ behavior: "smooth" });
          setActiveBlock((prevActiveBlock) =>
            prevActiveBlock === block2 ? block3 : prevActiveBlock,
          );
        }
      }

      if (event.deltaY < 0 && isScrollAvailable) {
        setIsScrollAvailable(false);
        console.log("up");

        if (activeBlock.current === block3.current) {
          console.log("block2");
          block2.current?.scrollIntoView({ behavior: "smooth" });
          setActiveBlock((prevActiveBlock) =>
            prevActiveBlock === block3 ? block2 : prevActiveBlock,
          );
        }

        if (activeBlock.current === block2.current) {
          console.log("block3");
          block1.current?.scrollIntoView({ behavior: "smooth" });
          setActiveBlock((prevActiveBlock) =>
            prevActiveBlock === block2 ? block1 : prevActiveBlock,
          );
        }
      }

      const timeout = setTimeout(() => {
        setIsScrollAvailable(true);
        clearTimeout(timeout);
      }, 1500);
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [activeBlock, isScrollAvailable]);

  return (
    <>
      <div className="bg-red-400 min-h-screen" ref={block1} />
      <div className="bg-blu-400 min-h-screen" ref={block2} />
      <div className="bg-green-400 min-h-screen" ref={block3} />
    </>
  );
}

export default ScrollSnap;
