import { clsx } from "clsx";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";
import LearnMoreLink from "@/utils/LearnMoreLink";
import data from "@/data/homepage_projects";

function OurProjectsMobile() {
  const [slider, setSlider] = useState<SwiperType | null>(null);

  function autoPlay() {
    if (slider) {
      const length = slider.slides.length - 1;
      const current = slider.activeIndex;

      if (current === length) {
        slider.slideTo(0, 1200, false);
      } else {
        slider.slideTo(current + 1, 1200, false);
      }
    }
  }

  useEffect(() => {
    const interval = setInterval(() => autoPlay(), 6000);
    return () => clearInterval(interval);
  }, [slider]);

  return (
    <section
      className="grid overflow-hidden"
      data-element="our-projects"
      id="projects"
    >
      <Swiper
        speed={1200}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        onSwiper={(swiper: SwiperType) => setSlider(swiper)}
        className="w-screen"
      >
        {data.reverse().map((project, index) => (
          <SwiperSlide key={index}>
            <div className={clsx("grid items-center justify-center pb-7")}>
              <div className={clsx(project.bgColor)}>
                <img
                  src={project.image}
                  alt={project.name}
                  width={400}
                  height={400}
                  loading="lazy"
                  className="w-full max-w-xl mx-auto"
                />
              </div>

              <div className="flex flex-col px-7 py-10">
                <h2
                  className={clsx(
                    "mb-5 pb-3 border-b border-white/50",
                    "font-heading tracking-wide text-2xl",
                  )}
                >
                  {project.name}
                </h2>

                <div
                  className={clsx(
                    "text-sm leading-6 tracking-wider italic opacity-90 mb-14",
                  )}
                >
                  {project.description}
                </div>

                <div className="mb-16">
                  <h3
                    className={clsx(
                      "font-heading tracking-wider text-xl text-mr-main-active",
                      "border-b border-white/50 mb-6 pb-2.5",
                      "7xl:text-2xl",
                    )}
                  >
                    Technologies:
                  </h3>
                  <div className="flex gap-4 flex-wrap text-sm">
                    {project.technologies.map((tech, key) => (
                      <span
                        key={key}
                        className={clsx(
                          "border border-mr-main-active/75 rounded px-4 pt-1 pb-1.5 bg-mr-main-active/10",
                          "7xl:text-base",
                        )}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto text-xl">
                  <a
                    href={project.link}
                    aria-label="learn more link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LearnMoreLink seoText={project.seoText} />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default OurProjectsMobile;
