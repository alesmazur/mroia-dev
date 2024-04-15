import { clsx } from "clsx";

interface BurgerMenuProps {
  show: boolean;
  setShow: (prop: boolean) => void;
}

function BurgerMenu({ show, setShow }: BurgerMenuProps) {
  return (
    <div
      data-element="mobile-navigation-burger"
      onClick={() => setShow(!show)}
      aria-hidden
      className="relative z-10 flex flex-col items-center gap-1.5 cursor-pointer"
    >
      <span
        className={clsx(
          "h-0.5 w-5 bg-white transition-all duration-300 origin-left",
          show && "rotate-45 -translate-x-px -translate-y-1 bg-violet-900",
        )}
      />
      <span
        className={clsx(
          "h-0.5 w-8 bg-white transition-all duration-300 origin-center",
          show && "-rotate-45 bg-violet-900",
        )}
      />
      <span
        className={clsx(
          "h-0.5 w-5 bg-white transition-all duration-300 origin-right",
          show && "rotate-45 translate-x-[3px] translate-y-1 bg-violet-900",
        )}
      />
    </div>
  );
}

export default BurgerMenu;
