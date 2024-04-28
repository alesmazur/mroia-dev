import Slider from "react-slick";
import { clsx } from "clsx";

import Title from "@/components/Ui/Title";
import data from "@/data/homepage_projects";

function OurProjects() {
  const settings = {
    centerPadding: "60px",
    centerMode: true,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };

  return (
    <section className="py-20" data-element="our-projects" id="projects">
      <div className="box">
        <Title>Our projects</Title>

        <Slider {...settings}>
          {data.map((item, i) => (
            <div key={i}>
              <div
                className={clsx(
                  "!grid border border-white/25 bg-black rounded-2xl h-full",
                  "transition-all duration-500 scale-95 will-change-transform",
                  "3xl:grid-cols-2 3xl:items-start",
                )}
              >
                <div className="m-5 rounded-2xl bg-white">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full max-w-96 mx-auto"
                  />
                </div>

                <div className="px-5 pb-5 text-sm 3xl:pt-5 5xl:text-base">
                  <Title className="hidden 3xl:block 3xl:text-left 3xl:!text-4xl 3xl:tracking-wider 3xl:mb-4">
                    {item.name}
                  </Title>
                  <div className="flex flex-wrap gap-3 mb-7">
                    {item.technologies.map((tech, k) => (
                      <span key={k} className="py-1 px-3 rounded bg-amber-500">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="mb-6">{item.description}</p>
                  <a href={item.link}>to project</a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default OurProjects;
