import { NavLink } from "react-router-dom";
import ScrolledText from "@/utils/ScrolledText";
import ParticlesBox from "@/utils/ParticlesBox";
import LearnMoreLink from "@/utils/LearnMoreLink";

function MainBanner() {
  return (
    <section
      className="bg-mr-main min-h-screen py-20 flex items-center relative"
      data-element="home-main-banner"
      id="main-banner"
    >
      <ParticlesBox />

      <div className="box w-full relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-heading mb-12 text-4xl md:text-6xl">
            <div className="flex">
              We
              <div className="text-mr-main-active w-64 h-11 relative ml-4 block overflow-hidden md:h-[70px]">
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
            className="text-2xl text-mr-main-active mt-14 inline-block"
          >
            <LearnMoreLink />
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default MainBanner;
