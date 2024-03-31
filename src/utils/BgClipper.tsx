import { ReactNode } from "react";
import { clsx } from "clsx";

interface BgClipperProps {
  banner: string;
  bgColor?: string;
  children: ReactNode;
}

function BgClipper({ banner, bgColor, children }: BgClipperProps) {
  return (
    <>
      <div
        data-element="bg-clipper"
        className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden"
        style={{ clip: "rect(auto auto auto auto)" }}
      >
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-center bg-cover bg-no-repeat blur-[0.5px]"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div
            className={clsx(
              "absolute top-0 left-0 right-0 bottom-0",
              bgColor && bgColor,
            )}
          />
        </div>
      </div>

      <div data-element="bg-clipper-box" className="relative w-full">
        {children}
      </div>
    </>
  );
}

export default BgClipper;
