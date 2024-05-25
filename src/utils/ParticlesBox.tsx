import { useEffect } from "react";
import particlesConfig from "@/data/particles.config.json";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let particlesJS: any;

function ParticlesBox() {
  useEffect(() => {
    particlesJS("particles-js", particlesConfig);
  }, []);

  return (
    <div id="particles-js" className="absolute top-0 right-0 bottom-0 left-0" />
  );
}

export default ParticlesBox;
