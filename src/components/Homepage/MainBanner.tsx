import { NavLink } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ScrolledText from "@/utils/ScrolledText";
import ParticlesBox from "@/utils/ParticlesBox";

function MainBanner() {
  return (
    <section
      className="bg-mr-main min-h-screen py-20 flex items-center relative"
      data-element="home-main-banner"
      id="main-banner"
    >
      <ParticlesBox />

      <div className="box w-full relative z-10">
        <div className="max-w-3xl ">
          <h1 className="font-heading text-6xl mb-12">
            <div className="flex">
              We
              <div className="text-mr-main-active w-64 h-[70px] relative ml-4 block overflow-hidden">
                <ScrolledText />
              </div>
            </div>
            <div className="text-4xl font-base 3xl:text-6xl">
              digital product
            </div>
          </h1>

          <p className="text-base leading-7 italic 3xl:text-lg 3xl:leading-9">
            We offer a comprehensive suite of services tailored to meet your
            digital needs. From dynamic e-Commerce platforms to cutting-edge Web
            and Mobile Applications, our team is dedicated to bringing your
            vision to life. Partner with us and unlock the full potential of
            your online presence today. Let&#39;s make your dream come true
            together.
          </p>

          <NavLink
            to="/about"
            className="text-2xl inline-flex items-center mt-14 tracking-widest relative 
                      text-mr-main-active group transition-transform duration-500
                      hover:translate-x-7"
          >
            <IoIosArrowForward
              className="absolute top-[5px] -left-[30px] opacity-0 group-hover:opacity-100
                        transition-opacity duration-500 animate-[pulse-left_1s_linear_infinite]"
            />
            Learn more
            <IoIosArrowBack
              className="absolute top-[5px] -right-7 opacity-0 group-hover:opacity-100
                        transition-opacity duration-500 animate-[pulse-right_1s_linear_infinite]"
            />
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default MainBanner;
