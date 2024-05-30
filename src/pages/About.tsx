import { useEffect } from "react";
import { clsx } from "clsx";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import { Helmet } from "react-helmet-async";
import Title from "@/components/Ui/Title";
import BgClipper from "@/utils/BgClipper";

import Banner from "@/assets/about-us-banner.webp";
import data from "@/data/about.us.json";

function About() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Mroia | Why us? Learn more about Mroia.</title>
        <meta
          name="description"
          content="Learn more about Mroia, your trusted partner in Magento 2, WordPress, and e-commerce development, design, and marketing. Discover our commitment to enhancing your online presence with innovative solutions and seamless integrations."
        />
        <link rel="canonical" href="https://dev-mroia.netlify.app/about-us" />
      </Helmet>

      <section data-block="about-us" className="pb-16">
        <div className="h-96 relative pt-20 pb-14 flex items-center mb-24 text">
          <BgClipper banner={Banner} bgColor="bg-black/50">
            <div className="box">
              <Title level="h1" className="!mb-0">
                About Us
              </Title>
            </div>
          </BgClipper>
        </div>

        <div className="box grid grid-cols-[auto_1fr_auto] gap-5 items-start mb-32">
          <FaQuoteLeft className="text-4xl text-mr-main-active/85" />
          <div className="py-5 text-lg italic indent-8 opacity-85 leading-8 tracking-wider">
            In the East Europe the word{" "}
            <b className="text-mr-main-active">&#34;mroia&#34;</b> means a{" "}
            <b className="text-mr-main-active">&#34;dream&#34;</b>. So as soon
            our &#34;ship&#34; had that name, our team here dedicated to make
            dreams of our clients became a true.{" "}
            <span className="underline underline-offset-2">Our goal</span> is be
            perfect as it&#39;s possible but with preserving notes of{" "}
            <b className="text-mr-main-active">&#34;magic&#34;</b>. To do that,
            we using modern planning and design tools and best code practices in
            our work process. So if You{" "}
            <span className="underline underline-offset-2">
              ready for the journey
            </span>{" "}
            to Your dream then let&#39;s go with us, just give as a call or send
            a email.
          </div>
          <FaQuoteRight className="mt-auto text-4xl text-mr-main-active/85" />
        </div>

        <div className="box">
          <Title className="text-mr-main-active text-3xl lg:text-4xl 3xl:text-5xl mb-16">
            Why Us?
          </Title>

          <div className="grid gap-14">
            {data.map((item, index) => (
              <div
                key={index}
                className={clsx(
                  "grid 3xl:grid-cols-[64px_1fr] gap-6 items-start relative",
                  "3xl:before:absolute 3xl:before:top-0.5 3xl:before:bottom-11 3xl:before:left-8",
                  "3xl:before:border-l-2 3xl:before:border-dashed 3xl:before:translate-y-20",
                )}
              >
                <span
                  className={clsx(
                    "absolute text-3xl w-12 h-12",
                    "flex items-center justify-center 3xl:w-16 3xl:h-16 text-mr-main-active",
                    "border-2 border-mr-main-active rounded-full 3xl:text-4xl 3xl:static",
                  )}
                >
                  {index + 1}
                </span>
                <div>
                  <h3
                    className={clsx(
                      "max-w-60 mb-4 -mt-1.5 pl-[72px] font-heading text-2xl",
                      "md:max-w-none md:mt-2 md:mb-7 3xl:text-3xl 3xl:mt-4 3xl:pl-0",
                    )}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm font-light leading-6 tracking-wider italic opacity-85 3xl:text-base 3xl:leading-7">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
