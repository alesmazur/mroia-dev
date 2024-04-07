import { NavLink } from "react-router-dom";
import Logo from "@/components/Header/Logo";
import Navigation from "@/components/Header/Navigation";

function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-30 transition-colors duration-200 bg-mr-main/50
                [backdrop-filter:_saturate(1.8)_blur(20px)]"
    >
      <div className="box flex items-center justify-between py-4">
        <NavLink to="/">
          <Logo />
        </NavLink>

        <Navigation />
      </div>
    </header>
  );
}

export default Header;
