import { clsx } from "clsx";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { BiSolidError } from "react-icons/bi";

interface IFormMessage {
  status: "success" | "error";
  message: string;
  show: boolean;
}

function FormMessage({ status, message, show }: IFormMessage) {
  return (
    <div
      className={clsx(
        "fixed bottom-5 right-5 z-20 py-2 pl-3.5 pr-4 rounded-lg text-white text-lg",
        "flex items-center gap-3 tracking-wider transition-transform duration-700 translate-x-[150%]",
        status === "success" ? "bg-green-500" : "bg-red-500",
        show && "!translate-x-0",
      )}
    >
      {status === "success" ? (
        <IoShieldCheckmarkOutline className="text-2xl" />
      ) : (
        <BiSolidError className="text-2xl" />
      )}

      {message}
    </div>
  );
}

export default FormMessage;
