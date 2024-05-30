import { NavLink, useLocation } from "react-router-dom";
import { clsx } from "clsx";
import { IoIosClose } from "react-icons/io";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function Cookie() {
  const cookieName: string = "mroia-cookie-agreement";
  const [isCookieConfirm, setIsCookieConfirm] = useState("no-checked");
  const location = useLocation();

  useEffect(() => {
    if (Cookies.get(cookieName)) {
      setIsCookieConfirm("checked-true");
    } else {
      setIsCookieConfirm("checked-false");
    }
  }, [location]);

  return (
    <div
      data-element="cookies"
      className={clsx(
        "fixed bottom-0 right-0 left-0 z-50 transition-opacity duration-500",
        "py-6 bg-mr-main/85 text-sm leading-6 tracking-wide text-white",
        "border-t border-white 3xl:text-base 3xl:pr-4",
        isCookieConfirm === "no-checked" && "opacity-0 invisible",
        isCookieConfirm === "checked-true" && "opacity-0 invisible",
        isCookieConfirm === "checked-false" && "opacity-100 visible",
      )}
    >
      <div className="box grid gap-8 3xl:grid-cols-[1fr_160px] 3xl:items-center">
        <div className="pr-4">
          <b>Do you like cookies?</b> 🍪 We use cookies to ensure you get the
          best experience on our website. If you want to learn more about your
          privacy on our website please
          <NavLink
            to="/privacy"
            className={clsx(
              "inline-block ml-1.5 text-mr-main-active underline underline-offset-2",
              "hover:opacity-90 transition-opacity duration-300",
            )}
          >
            Check Privacy Policy
          </NavLink>
        </div>

        <button
          type="button"
          className={clsx(
            "p-2.5 rounded-3xl text-mr-main font-medium text-base w-full max-w-lg mx-auto",
            "transition-opacity duration-300 hover:opacity-85 !bg-mr-main-active",
          )}
          onClick={() => {
            Cookies.set(cookieName, "true", { expires: 30 });
            setIsCookieConfirm("checked-true");
          }}
        >
          Agreed
        </button>

        <IoIosClose
          className={clsx(
            "absolute top-0 right-0 cursor-pointer text-4xl",
            "transition-colors duration-300 hover:text-mr-main-active",
          )}
          onClick={() => setIsCookieConfirm("checked-true")}
        />
      </div>
    </div>
  );
}

export default Cookie;
