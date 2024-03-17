import { FaAccessibleIcon } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import servicesInfo from "@/data/homepage.services.json";

function Services() {
  return (
    <div data-element="services" className="w-full">
      <h2 className="font-heading text-5xl text-center mb-14 tracking-widest">
        Our services
      </h2>

      <div
        className="grid gap-3 2xl:grid-cols-2 4xl:grid-cols-3 4xl:gap-5 
                   6xl:flex 6xl:flex-wrap 6xl:justify-center mb-14"
      >
        {servicesInfo.map((service, index) => (
          <div
            key={index}
            className="6xl:w-[23%]"
            style={{ perspective: "1000px", perspectiveOrigin: "50% 50%" }}
          >
            <div
              className="text-center relative origin-bottom transition-transform duration-500 hover-rotate-x-90 group"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                data-element="front"
                className="border-2 border-black rounded-lg p-4 bg-white text-violet-800 min-h-44"
              >
                <FaAccessibleIcon />
                <h3 className="font-heading text-xl">{service.title}</h3>
              </div>

              <div
                data-element="bottom"
                className="absolute top-0 right-0 left-0 bottom-0 origin-bottom rotate-x-275 transition-transform duration-500
                         border-2 border-black rounded-lg p-4 bg-green-400 text-violet-800 group-hover:rotate-x-270"
              >
                {service.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3 justify-center flex-wrap">
        <NavLink
          to="/contact-us"
          className="inline-block px-6 py-2.5 rounded-lg font-medium w-full bg-violet-700
                     transition-colors duration-300 hover:bg-violet-800 text-center
                     md:w-auto"
        >
          Get a quote
        </NavLink>

        <NavLink
          to="/services"
          className="inline-block px-6 py-2.5 rounded-lg font-medium w-full bg-violet-700
                     transition-colors duration-300 hover:bg-violet-800 text-center
                     md:w-auto"
        >
          Learn more
        </NavLink>
      </div>
    </div>
  );
}

export default Services;
