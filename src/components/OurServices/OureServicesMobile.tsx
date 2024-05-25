import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import Title from "@/components/Ui/Title";
import ServiceItem from "@/components/OurServices/ServiceItem";
import BgClipper from "@/utils/BgClipper";

import Banner from "@/assets/our-service-banner.webp";
import data from "@/data/homepage_servises";

function OureServicesMobile() {
  return (
    <section
      className="relative py-20 flex items-center justify-center"
      data-element="our-services"
      id="services"
    >
      <BgClipper banner={Banner} bgColor="bg-black/50">
        <div className="box !px-3">
          <Title>Our servises</Title>

          <Swiper
            speed={1000}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="pb-16"
          >
            {data.map((service, index) => (
              <SwiperSlide key={index} className="p-3">
                <ServiceItem {...service} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </BgClipper>
    </section>
  );
}

export default OureServicesMobile;
