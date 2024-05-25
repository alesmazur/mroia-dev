import { useEffect, useState } from "react";
import WorkStepMobile from "@/components/WorkStep/WorkStepMobile";
import WorkStepDesktop from "@/components/WorkStep/WorkStepDesktop";

function OurServices() {
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setScreenSize(window.innerWidth));
  }, []);

  return screenSize <= 767 ? <WorkStepMobile /> : <WorkStepDesktop />;
}

export default OurServices;
