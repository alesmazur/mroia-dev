import { clsx } from "clsx";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function LearnMoreLink() {
  return (
    <span
      className={clsx(
        "relative inline-flex items-center tracking-widest",
        "group transition-transform duration-500 hover:translate-x-7",
      )}
    >
      <IoIosArrowForward
        className={clsx(
          "absolute top-[5px] -left-[30px] opacity-0 group-hover:opacity-100",
          "transition-opacity duration-500 animate-[pulse-left_1s_linear_infinite]",
        )}
      />
      Learn more
      <IoIosArrowBack
        className={clsx(
          "absolute top-[5px] -right-7 opacity-0 group-hover:opacity-100",
          "transition-opacity duration-500 animate-[pulse-right_1s_linear_infinite]",
        )}
      />
    </span>
  );
}

export default LearnMoreLink;
