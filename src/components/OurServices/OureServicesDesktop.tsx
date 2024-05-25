import { clsx } from "clsx";

import Title from "@/components/Ui/Title";
import ServiceItem from "@/components/OurServices/ServiceItem";
import BgClipper from "@/utils/BgClipper";

import Banner from "@/assets/our-service-banner.webp";
import data from "@/data/homepage_servises";

function OureServicesDesktop() {
  return (
    <section
      className="min-h-[600px] relative py-20 flex items-center justify-center 2xl:min-h-screen"
      data-element="our-services"
      id="services"
    >
      <BgClipper banner={Banner} bgColor="bg-black/50">
        <div className="box">
          <Title>Our servises</Title>

          <div
            className={clsx(
              "flex items-stretch gap-6 pb-5",
              "2xl:grid 2xl:grid-cols-2 5xl:grid-cols-3 2xl:pb-0 2xl:overflow-x-auto",
            )}
          >
            {data.map((service, index) => (
              <ServiceItem key={index} {...service} />
            ))}
          </div>
        </div>
      </BgClipper>
    </section>
  );
}

export default OureServicesDesktop;
