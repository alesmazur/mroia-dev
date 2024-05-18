import { useEffect } from "react";
import Title from "@/components/Ui/Title";
import BgClipper from "@/utils/BgClipper";

import Banner from "@/assets/about-us-banner.webp";

function About() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section data-block="about-us">
      <div className="h-96 relative pt-20 pb-14 flex items-center mb-16">
        <BgClipper banner={Banner} bgColor="bg-black/50">
          <div className="box">
            <Title level="h1" className="!mb-0">
              About Us
            </Title>
          </div>
        </BgClipper>
      </div>

      <div className="box grid gap-10 text-xl mb-10">
        <div className="rounded-2xl border-2 border-white/50 p-6 bg-white/10 max-w-5xl">
          <p>
            In the East Europe the word{" "}
            <span className="text-mr-main-active">&#34;mroia&#34;</span> means a{" "}
            <span className="text-mr-main-active">&#34;dream&#34;</span>.
          </p>
          <p>
            So as soon our{" "}
            <span className="text-mr-main-active">&#34;ship&#34;</span> had that
            name, our team here dedicated to make dreams of our clients became a
            true.
          </p>
          <p>
            Our goal is be perfect as it’s possible but with preserving notes of{" "}
            <span className="text-mr-main-active">&#34;magic&#34;</span>.
          </p>
          <p>
            To do that, we using modern planning and design tools and best code
            practices in our work process.
          </p>
          <p>
            So if <span className="text-mr-main-active">You ready</span> for the
            journey to <span className="text-mr-main-active">Your dream</span>{" "}
            then let&#39;s go with us, just give as a call or send a email.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-white/50 p-6 bg-white/10 max-w-5xl ml-auto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae sint
          possimus libero vero alias suscipit ipsum cum aut aspernatur dolores.
          Reiciendis consequuntur at esse repellendus eligendi optio ut nobis
          officia? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Quae sint possimus libero vero alias suscipit ipsum cum aut aspernatur
          dolores. Reiciendis consequuntur at esse repellendus eligendi optio ut
          nobis officia? Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Quae sint possimus libero vero alias suscipit ipsum cum aut
          aspernatur dolores. Reiciendis consequuntur at esse repellendus
          eligendi optio ut nobis officia?
        </div>

        <div className="rounded-2xl border-2 border-white/50 p-6 bg-white/10 max-w-5xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae sint
          possimus libero vero alias suscipit ipsum cum aut aspernatur dolores.
          Reiciendis consequuntur at esse repellendus eligendi optio ut nobis
          officia? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Quae sint possimus libero vero alias suscipit ipsum cum aut aspernatur
          dolores. Reiciendis consequuntur at esse repellendus eligendi optio ut
          nobis officia? Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Quae sint possimus libero vero alias suscipit ipsum cum aut
          aspernatur dolores. Reiciendis consequuntur at esse repellendus
          eligendi optio ut nobis officia?
        </div>
      </div>
    </section>
  );
}

export default About;
