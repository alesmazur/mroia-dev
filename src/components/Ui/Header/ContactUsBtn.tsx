import { Link } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";

import goToByAnchor from "@/utils/helper/goToByAnchor";
import links from "@/data/header.navigation.json";

function ContactUsBtn() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Link
      to={links.contactAnchorLink.link}
      smooth
      duration={1000}
      offset={-32}
      onClick={() =>
        goToByAnchor(links.contactAnchorLink.link, location, navigate)
      }
      className="contact-us-link-btn group"
    >
      {links.contactAnchorLink.text}

      {/* Animation block */}
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
    </Link>
  );
}

export default ContactUsBtn;
