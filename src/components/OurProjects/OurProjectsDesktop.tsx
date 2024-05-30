import { useState } from "react";
import { clsx } from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Controller } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";
import LearnMoreLink from "@/utils/LearnMoreLink";
import data from "@/data/homepage_projects";

function OurProjectsDesktop() {
  const [leftSlider, setLeftSlider] = useState<SwiperType | null>(null);
  const [rightSlider, setRightSlider] = useState<SwiperType | null>(null);

  function changeSlides(first: SwiperType, second: SwiperType) {
    const len = first.slides.length - 1;
    const active = first.activeIndex;

    second.slideTo(len - active, 800, false);
  }

  return (
    <section
      className="grid grid-cols-2 min-h-screen"
      data-element="our-projects"
      id="projects"
    >
      <Swiper
        direction="vertical"
        speed={800}
        modules={[Controller]}
        controller={{ control: leftSlider }}
        className="min-h-[900px] h-screen w-full"
        onSlideChange={(swiper: SwiperType) =>
          changeSlides(swiper, rightSlider as SwiperType)
        }
        onSwiper={(swiper: SwiperType) => setLeftSlider(swiper)}
      >
        {data.map((project, index) => (
          <SwiperSlide key={index}>
            <div
              className={clsx(
                "h-full grid items-center justify-center",
                project.bgColor,
              )}
            >
              <img
                src={project.image}
                alt={project.name}
                width={700}
                height={700}
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        direction="vertical"
        pagination={{
          clickable: true,
        }}
        speed={800}
        modules={[Pagination, Controller]}
        controller={{ control: rightSlider }}
        className="min-h-[900px] h-screen w-full"
        onSlideChange={(swiper: SwiperType) =>
          changeSlides(swiper, leftSlider as SwiperType)
        }
        onSwiper={(swiper: SwiperType) => {
          setRightSlider(swiper);

          const timeout = setTimeout(() => {
            swiper.slideTo(swiper.slides.length - 1, 0, false);
            clearTimeout(timeout);
          }, 100);
        }}
      >
        {data.reverse().map((project, index) => (
          <SwiperSlide key={index}>
            <div className="grid pl-10 py-16 pr-14 h-full">
              <div className="flex flex-col">
                <h2
                  className={clsx(
                    "mb-6 pb-4 border-b border-white/50",
                    "font-heading tracking-wide text-3xl",
                    "7xl:text-4xl",
                  )}
                >
                  {project.name}
                </h2>

                <div
                  className={clsx(
                    "text-sm leading-7 tracking-wider italic opacity-90 mb-20",
                    "7xl:text-base 7xl:leading-8",
                  )}
                >
                  {project.description}
                </div>

                <div className="mb-20">
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

export default OurProjectsDesktop;
