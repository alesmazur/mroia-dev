import { clsx } from "clsx";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "@/components/Header/Logo";
import Navigation from "@/components/Header/Navigation";

function Header() {
  const [scrolled, setScrolled] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-30 transition-all duration-300",
        scrolled && "[backdrop-filter:_saturate(1.8)_blur(20px)] bg-mr-main/50",
      )}
    >
      <div className="box flex items-center justify-between py-4">
        <NavLink to="/" onClick={scrollToTop}>
          <Logo />
        </NavLink>

        <Navigation />
      </div>
    </header>
  );
}

export default Header;
