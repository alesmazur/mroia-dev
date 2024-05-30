import { useEffect } from "react";
import { clsx } from "clsx";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Helmet } from "react-helmet-async";

function NotFound() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Moria | Page not found</title>
        <meta
          name="description"
          content="We're sorry, but something went wrong. The Mroia team is doing everything possible to fix it.We are providing high-class digital services and software development for customers businesses all around the world. We specialized in  software development, web design  and digital marketing."
        />
        <link rel="canonical" href="https://dev-mroia.netlify.app/" />
      </Helmet>

      <section
        data-element="404"
        className={clsx(
          "flex flex-col justify-center flex-grow mx-auto py-12 px-5 max-w-4xl w-full",
          "min-h-[calc(100vh-60px)] md:px-7 md:py-28",
        )}
      >
        <div className="grid text-center">
          <h2 className="flex gap-1 justify-center mb-3 font-semibold text-main-darker text-7xl animate-bounce md:text-9xl">
            <span className="text-mr-main-active">4</span>
            <span className="text-stone-200">0</span>
            <span className="text-mr-main-active">4</span>
          </h2>

          <div className="mb-5 text-2xl font-semibold tracking-wide opacity-80">
            The page you tried to reach does not seem to exist.
          </div>
          <div className="mb-10 tracking-wide opacity-80 leading-8">
            This is usually the result of a broken or outdated link. We
            apologize for any inconvenience. Use the search bar at the top of
            the page to search for your products!
          </div>

          <div>
            <span onClick={goBack} aria-hidden>
              <span
                className={clsx(
                  "relative inline-flex items-center tracking-widest text-2xl",
                  "group cursor-pointer transition-colors duration-300 hover:text-mr-main-active",
                )}
              >
                <IoIosArrowForward
                  className={clsx(
                    "absolute top-[5px] -left-[30px] opacity-0 group-hover:opacity-100",
                    "transition-opacity duration-500 animate-[pulse-left_1s_linear_infinite]",
                  )}
                />
                Go back
                <IoIosArrowBack
                  className={clsx(
                    "absolute top-[5px] -right-7 opacity-0 group-hover:opacity-100",
                    "transition-opacity duration-500 animate-[pulse-right_1s_linear_infinite]",
                  )}
                />
              </span>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;
