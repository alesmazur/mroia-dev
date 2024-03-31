import { clsx } from "clsx";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import projects from "@/data/homepage_projects";

function OurProjects() {
  const [width, setWidth] = useState(window.innerWidth);
  const [animateTitle, setAnimateTitle] = useState("");

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
    };
  }, []);

  return (
    <section
      data-element="our-projects-block"
      className="py-20 px-6 relative 4xl:p-1.5"
    >
      <h2
        className={clsx(
          "font-heading mb-12 text-center text-4xl lg:text-5xl 3xl:text-6xl",
          "4xl:absolute 4xl:top-1/2 4xl:left-1/2 4xl:z-10 4xl:-translate-x-1/2 4xl:-translate-y-1/2",
          "4xl:transition-transform 4xl:duration-500 4xl:pointer-events-none 4xl:mb-0",
          "4xl:border-2 4xl:border-white 4xl:bg-white/25 4xl:px-6 4xl:py-3 4xl:rounded-2xl",
          animateTitle,
        )}
      >
        Our projects
      </h2>

      <div className="grid gap-3 md:gap-1.5 xl:grid-cols-2 4xl:grid-cols-3 6xl:grid-cols-4">
        {projects.map((item, index) => (
          <NavLink
            to="/projects"
            key={index}
            className={clsx(
              "relative group",
              index > 3 && "hidden xl:block",
              index > 5 && "hidden xl:hidden 4xl:block",
            )}
            onMouseEnter={() => {
              switch (true) {
                case width > 895 && width < 1152 && index === 3:
                case width > 895 && width < 1152 && index === 6:
                  setAnimateTitle("!-translate-x-1/4");
                  break;

                case width > 895 && width < 1152 && index === 5:
                case width > 895 && width < 1152 && index === 8:
                  setAnimateTitle("!-translate-x-3/4");
                  break;

                case width > 895 && width < 1152 && index === 4:
                  setAnimateTitle("!translate-y-1/2");
                  break;

                case width > 895 && width < 1152 && index === 7:
                  setAnimateTitle("!-translate-y-[150%]");
                  break;

                case width > 1151 && index === 5:
                  setAnimateTitle("!translate-x-1/4");
                  break;

                case width > 1151 && index === 6:
                  setAnimateTitle("!-translate-x-[125%]");
                  break;

                default: // Do nothing
              }
            }}
            onMouseLeave={() => setAnimateTitle("")}
          >
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              width={650}
              height={520}
            />

            <span
              className="overlay absolute top-0 right-0 bottom-0 left-0 transition-opacity
                        duration-500 bg-black/50 group-hover:opacity-0"
            />
          </NavLink>
        ))}
      </div>
    </section>
  );
}

export default OurProjects;
