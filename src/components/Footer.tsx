import { clsx } from "clsx";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-auto py-5 text-sm bg-mr-footer">
      <div className="box flex items-center justify-between">
        <div className="flex gap-2.5">
          <span className="hidden sm:block">© {new Date().getFullYear()}</span>
          <span className="hidden sm:block">|</span>
          <span>Mroia.com</span>
        </div>

        <div className="hidden 2xl:flex gap-2.5">
          <NavLink
            to="/privacy"
            className={({ isActive }) =>
              clsx(isActive && "text-mr-main-active")
            }
          >
            Privacy Policy
          </NavLink>
        </div>

        <div className="flex gap-2.5">
          <Link to="https://www.linkedin.com/company/mroia/" target="_blank">
            LinkedIn
          </Link>
          <span>|</span>
          <Link to="https://www.facebook.com/MROIA.Poland/" target="_blank">
            FaceBook
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
