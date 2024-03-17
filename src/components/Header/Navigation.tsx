import { useEffect, useState } from "react";
import NavigationMobile from "@/components/Header/Navigation/NavigationMobile";
import NavigationDesktop from "@/components/Header/Navigation/NavigationDesktop";

function Navigation() {
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setScreenSize(window.innerWidth));
  }, []);

  return screenSize <= 895 ? <NavigationMobile /> : <NavigationDesktop />;
}

export default Navigation;
