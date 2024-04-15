import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { clsx } from "clsx";
import { useEffect } from "react";
import ContactUsBtn from "@/components/Ui/Header/ContactUsBtn";

import clearLinkClass from "@/utils/helper/clearLinkClass";
import goToByAnchor from "@/utils/helper/goToByAnchor";
import links from "@/data/header.navigation.json";

function NavigationDesktop() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset < 300) clearLinkClass();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        data-element="desktop-navigation"
        className="flex gap-10 text-xl ml-6"
      >
        {/* About us link */}
        <NavLink
          to={links.aboutUsLink.link}
          onClick={clearLinkClass}
          className={({ isActive }) =>
            clsx("header-desktop-link", isActive && "active")
          }
        >
          {links.aboutUsLink.text}
        </NavLink>

        {/* Anchor links */}
        {links.anchorLinks.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            smooth
            duration={1000}
            offset={-32}
            onClick={() => goToByAnchor(item.link, location, navigate)}
            className={clsx("header-desktop-link", `anchor-${item.link}`)}
          >
            {item.text}
          </Link>
        ))}
      </nav>

      {/* Contact Us anchor link */}
      <ContactUsBtn />
    </>
  );
}

export default NavigationDesktop;
