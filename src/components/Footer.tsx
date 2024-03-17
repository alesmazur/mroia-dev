import { clsx } from "clsx";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-auto py-5 text-sm bg-mr-footer">
      <div className="box flex items-center justify-between">
        <div className="flex gap-2.5">
          <span>© {new Date().getFullYear()}</span>
          <span>|</span>
          <span>Mroia.com</span>
        </div>

        <div className="hidden 2xl:flex gap-2.5">
          <NavLink
            to="/privacy-policy"
            className={({ isActive }) =>
              clsx(isActive && "text-mr-main-active")
            }
          >
            Privacy Policy
          </NavLink>
          <span>|</span>
          <NavLink
            to="/terms"
            className={({ isActive }) =>
              clsx(isActive && "text-mr-main-active")
            }
          >
            Terms & Conditions
          </NavLink>
        </div>

        <div className="flex gap-2.5">
          <Link to="https://www.linkedin.com/">LinkedIn</Link>
          <span>|</span>
          <Link to="https://www.facebook.com/">FaceBook</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
