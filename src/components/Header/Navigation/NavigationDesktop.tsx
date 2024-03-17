import { NavLink } from "react-router-dom";
import { clsx } from "clsx";
import links from "@/data/header.navigation.json";

function NavigationDesktop() {
  return (
    <>
      <nav
        data-element="desktop-navigation"
        className="flex gap-10 text-xl ml-6"
      >
        {links.map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            className={({ isActive }) =>
              clsx(
                "relative before:content-['{'] before:absolute before:-top-px before:left-0 before:transition-all",
                "before:duration-300 before:opacity-0 hover:before:opacity-100 hover:before:-translate-x-4 hover:before:text-mr-main-active",
                "after:content-['}'] after:absolute after:-top-px after:right-0 after:transition-all after:duration-300",
                "after:opacity-0 hover:after:opacity-100 hover:after:translate-x-4 hover:after:text-mr-main-active",
                isActive &&
                  `text-mr-main-active after:opacity-100 after:translate-x-4 after:text-mr-main-active 
                       before:opacity-100 before:-translate-x-4 before:text-mr-main-active`,
              )
            }
          >
            {item.text}
          </NavLink>
        ))}
      </nav>

      <NavLink
        to="/contact-us"
        className={({ isActive }) =>
          clsx(
            "relative text-base pt-1.5 pb-2 px-6 group rounded border border-white/25 overflow-hidden",
            isActive &&
              `text-mr-main-active after:opacity-100 after:translate-x-4 after:text-mr-main-active 
                       before:opacity-100 before:-translate-x-4 before:text-mr-main-active`,
          )
        }
      >
        Contact Us
        <span
          className="absolute top-0 left-0 w-full h-0.5 transition-opacity opacity-0
                    duration-300 bg-gradient-to-l from-mr-footer/10 to-mr-main-active
                    group-hover:opacity-100 animate-[contact-top_2s_linear_infinite]"
        />
        <span
          className="absolute top-0 right-0 h-full w-0.5 transition-opacity opacity-0
                    duration-300 bg-gradient-to-t from-mr-footer/10 to-mr-main-active
                    group-hover:opacity-100 animate-[contact-right_2s_linear_-1s_infinite]"
        />
        <span
          className="absolute bottom-0 left-0 w-full h-0.5 transition-opacity opacity-0
                    duration-300 bg-gradient-to-r from-mr-footer/10 to-mr-main-active
                    group-hover:opacity-100 animate-[contact-bottom_2s_linear_infinite]"
        />
        <span
          className="absolute top-0 left-0 h-full w-0.5 transition-opacity opacity-0
                    duration-300 bg-gradient-to-b from-mr-footer/10 to-mr-main-active
                    group-hover:opacity-100 animate-[contact-left_2s_linear_-1s_infinite]"
        />
      </NavLink>
    </>
  );
}

export default NavigationDesktop;
