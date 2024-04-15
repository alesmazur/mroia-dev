import { Location, NavigateFunction } from "react-router-dom";
import { scroller } from "react-scroll";
import clearLinkClass from "@/utils/helper/clearLinkClass";

const goToByAnchor = (
  id: string,
  location: Location,
  navigate: NavigateFunction,
) => {
  clearLinkClass();

  const current = document.querySelector(`.anchor-${id}`);
  current?.classList.add("active");

  if (location.pathname !== "/") {
    navigate("/");

    const timer = setTimeout(() => {
      scroller.scrollTo(id, {
        duration: 1000,
        offset: -32,
        smooth: true,
      });

      clearTimeout(timer);
    }, 0);
  }
};

export default goToByAnchor;
