/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { useState } from "react";
import { clsx } from "clsx";

function Logo() {
  const [hoverOnce, setHoverOnce] = useState<boolean>(false);

  return (
    <div
      data-element="logo"
      className="group text-white flex items-center gap-4 text-2xl font-heading tracking-widest"
      onMouseOver={() => setHoverOnce(true)}
    >
      <div className="grid gap-1 grid-cols-[6px_6px_6px] rotate-45 origin-center">
        <span
          data-element="1"
          className={clsx(
            "w-1.5 h-1.5 inline-block bg-white transition-[background,_transform]",
            "translate-x-0 translate-y-0 delay-[.6s,_.6s]",
            "group-hover:bg-mr-main-active group-hover:translate-x-2.5 group-hover:translate-y-2.5",
            "group-hover:animate-[logo-slice-1-in_.6s] group-hover:delay-[.6s,_.6s]",
            hoverOnce && "animate-[logo-slice-1-out_.6s]",
          )}
        />
        <span
          data-element="2"
          className="w-1.5 h-1.5 inline-block bg-white transition-transform 
                group-hover:animate-[logo-slice-2_1.2s_ease-in-out_infinite]"
        />
        <span
          data-element="3"
          className={clsx(
            "w-1.5 h-1.5 inline-block bg-white transition-[background,_transform]",
            "translate-x-0 translate-y-0 delay-[.6s,_.6s]",
            "group-hover:bg-mr-main-active group-hover:-translate-x-2.5 group-hover:translate-y-2.5",
            "group-hover:animate-[logo-slice-3-in_.6s] group-hover:delay-[.6s,_.6s]",
            hoverOnce && "animate-[logo-slice-3-out_.6s]",
          )}
        />

        <span
          data-element="4"
          className="w-1.5 h-1.5 inline-block bg-white transition-transform 
                group-hover:animate-[logo-slice-4_1.2s_ease-in-out_infinite]"
        />
        <span data-element="5" className="w-1.5 h-1.5 inline-block bg-white" />
        <span
          data-element="6"
          className="w-1.5 h-1.5 inline-block bg-white transition-transform 
                group-hover:animate-[logo-slice-6_1.2s_ease-in-out_infinite]"
        />

        <span
          data-element="7"
          className={clsx(
            "w-1.5 h-1.5 inline-block bg-white transition-[background,_transform]",
            "translate-x-0 translate-y-0 delay-[.6s,_.6s]",
            "group-hover:bg-mr-main-active group-hover:translate-x-2.5 group-hover:-translate-y-2.5",
            "group-hover:animate-[logo-slice-7-in_.6s] group-hover:delay-[.6s,_.6s]",
            hoverOnce && "animate-[logo-slice-7-out_.6s]",
          )}
        />
        <span
          data-element="8"
          className="w-1.5 h-1.5 inline-block bg-white transition-transform 
                group-hover:animate-[logo-slice-8_1.2s_ease-in-out_infinite]"
        />
        <span
          data-element="9"
          className={clsx(
            "w-1.5 h-1.5 inline-block bg-white transition-[background,_transform]",
            "translate-x-0 translate-y-0 delay-[.6s,_.6s]",
            "group-hover:bg-mr-main-active group-hover:-translate-x-2.5 group-hover:-translate-y-2.5",
            "group-hover:animate-[logo-slice-9-in_.6s] group-hover:delay-[.6s,_.6s]",
            hoverOnce && "animate-[logo-slice-9-out_.6s]",
          )}
        />
      </div>

      <span>mroia</span>
    </div>
  );
}

export default Logo;
