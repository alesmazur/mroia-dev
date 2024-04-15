import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";
import { type ISourceOptions } from "@tsparticles/engine";

function ParticlesBox() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: false,
      detectRetina: true,
      fpsLimit: 120,

      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
        },
      },

      particles: {
        color: {
          value: "#fff",
        },
        links: {
          color: "#fff",
          distance: 130,
          enable: true,
          opacity: 0.25,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.2,
        },
        number: {
          density: {
            enable: true,
          },
          value: 130,
          limit: {
            mode: "wait",
            value: 250,
          },
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
    }),
    [],
  );

  return (
    init && (
      <Particles
        options={options}
        className="absolute top-0 right-0 bottom-0 left-0"
      />
    )
  );
}

export default ParticlesBox;
