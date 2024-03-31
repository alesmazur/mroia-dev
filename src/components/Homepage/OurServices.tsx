import Banner from "@/assets/our-service-banner.webp";
import BgClipper from "@/utils/BgClipper";
import services from "@/data/homepage_servises";

function OurServices() {
  return (
    <div
      className="min-h-screen relative py-20 flex items-center justify-center"
      data-element="our-service-block"
    >
      <BgClipper banner={Banner} bgColor="bg-black/50">
        <div className="box">
          <h2 className="font-heading mb-12 text-center text-4xl lg:text-5xl 3xl:text-6xl">
            Our servises
          </h2>

          <div className="grid gap-6 2xl:grid-cols-2 5xl:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/25 rounded-xl border-2 border-white text-center
                          flex items-center flex-col py-6 px-3 3xl:px-6 3xl:py-8
                          transition-colors duration-300 hover:bg-mr-main-active/20 hover:border-mr-main-active/80"
              >
                <service.icon className="mb-6 w-12 h-12" />
                <h3 className="font-heading text-xl mb-3 tracking-wide lg:text-3xl">
                  {service.title}
                </h3>
                <p className="text-sm lg:text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </BgClipper>
    </div>
  );
}

export default OurServices;
