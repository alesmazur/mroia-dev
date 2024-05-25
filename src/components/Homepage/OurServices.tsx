import { useEffect, useState } from "react";
import OureServicesMobile from "@/components/OurServices/OureServicesMobile";
import OureServicesDesktop from "@/components/OurServices/OureServicesDesktop";

function OurServices() {
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setScreenSize(window.innerWidth));
  }, []);

  return screenSize <= 671 ? <OureServicesMobile /> : <OureServicesDesktop />;
}

export default OurServices;
