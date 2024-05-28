import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { clsx } from "clsx";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

import BurgerMenu from "@/components/Ui/Header/BurgerMenu";

import clearLinkClass from "@/utils/helper/clearLinkClass";
import goToByAnchor from "@/utils/helper/goToByAnchor";
import links from "@/data/header.navigation.json";

function NavigationMobile() {
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState<boolean>(false);

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
      <BurgerMenu show={show} setShow={setShow} />

      <nav
        data-element="mobile-navigation"
        className={clsx(
          "fixed top-0 right-0 bottom-0 left-0 grid text-3xl min-h-screen",
          show ? "visible show" : "invisible",
        )}
      >
        {/* About us link */}
        <NavLink
          to={links.aboutUsLink.link}
          onClick={() => {
            setShow(false);
            clearLinkClass();
          }}
          className={({ isActive }) =>
            clsx("header-mobile-link", isActive && "active")
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
            href={`#${item.link}`}
            onClick={() => {
              goToByAnchor(item.link, location, navigate);
              setShow(false);
            }}
            className={clsx("header-mobile-link", `anchor-${item.link}`)}
          >
            {item.text}
          </Link>
        ))}

        {/* Contact Us anchor link */}
        <Link
          to={links.contactAnchorLink.link}
          smooth
          duration={1000}
          offset={-32}
          href={`#${links.contactAnchorLink.link}`}
          onClick={() => {
            goToByAnchor(links.contactAnchorLink.link, location, navigate);
            setShow(false);
          }}
          className={clsx(
            "header-mobile-link",
            `anchor-${links.contactAnchorLink.link}`,
          )}
        >
          {links.contactAnchorLink.text}
        </Link>
      </nav>
    </>
  );
}

export default NavigationMobile;
