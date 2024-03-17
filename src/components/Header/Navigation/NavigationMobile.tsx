import { NavLink } from "react-router-dom";
import { clsx } from "clsx";
import { useState } from "react";
import links from "@/data/header.navigation.json";

function NavigationMobile() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <div
        data-element="mobile-navigation-burger"
        onClick={() => setShow(!show)}
        aria-hidden
        className="relative z-10 flex flex-col items-center gap-1.5 cursor-pointer"
      >
        <span
          className={clsx(
            "h-0.5 w-5 bg-white transition-all duration-300 origin-left",
            show && "rotate-45 -translate-x-px -translate-y-1 bg-violet-900",
          )}
        />
        <span
          className={clsx(
            "h-0.5 w-8 bg-white transition-all duration-300 origin-center",
            show && "-rotate-45 bg-violet-900",
          )}
        />
        <span
          className={clsx(
            "h-0.5 w-5 bg-white transition-all duration-300 origin-right",
            show && "rotate-45 translate-x-[3px] translate-y-1 bg-violet-900",
          )}
        />
      </div>

      <nav
        data-element="mobile-navigation"
        className={clsx(
          "fixed top-0 right-0 bottom-0 left-0 grid text-3xl",
          show ? "visible" : "invisible",
        )}
      >
        {links.map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            onClick={() => setShow(false)}
            className={({ isActive }) =>
              clsx(
                "flex items-center justify-center bg-mr-main border-b border-white/25 tracking-widest ",
                "transition-all duration-500 hover:bg-mr-main-active hover:text-white",
                show
                  ? "odd:translate-x-0 even:translate-x-0"
                  : "odd:-translate-x-full even:translate-x-full",
                isActive && "bg-mr-main-active text-white pointer-events-none",
              )
            }
          >
            {item.text}
          </NavLink>
        ))}
        <NavLink
          to="/contact-us"
          onClick={() => setShow(false)}
          className={({ isActive }) =>
            clsx(
              "flex items-center justify-center bg-mr-main border-b border-white/25 tracking-widest ",
              "transition-all duration-500 hover:bg-mr-main-active hover:text-white",
              show
                ? "odd:translate-x-0 even:translate-x-0"
                : "odd:-translate-x-full even:translate-x-full",
              isActive && "bg-mr-main-active text-white pointer-events-none",
            )
          }
        >
          Contact Us
        </NavLink>
      </nav>
    </>
  );
}

export default NavigationMobile;
