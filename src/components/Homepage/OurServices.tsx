import Title from "@/components/Ui/Title";
import ServiceItem from "@/components/Ui/Service/ServiceItem";
import BgClipper from "@/utils/BgClipper";

import Banner from "@/assets/our-service-banner.webp";
import data from "@/data/homepage_servises";

function OurServices() {
  return (
    <section
      className="min-h-screen relative py-20 flex items-center justify-center"
      data-element="our-services"
      id="services"
    >
      <BgClipper banner={Banner} bgColor="bg-black/50">
        <div className="box">
          <Title>Our servises</Title>

          <div className="grid gap-6 2xl:grid-cols-2 5xl:grid-cols-3">
            {data.map((service, index) => (
              <ServiceItem key={index} {...service} />
            ))}
          </div>
        </div>
      </BgClipper>
    </section>
  );
}

export default OurServices;
