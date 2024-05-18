import { useEffect, useState } from "react";
import OurProjectsMobile from "@/components/OurProjects/OurProjectsMobile";
import OurProjectsDesktop from "@/components/OurProjects/OurProjectsDesktop";

function OurProjects() {
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setScreenSize(window.innerWidth));
  }, []);

  return screenSize <= 1023 ? <OurProjectsMobile /> : <OurProjectsDesktop />;
}

export default OurProjects;
