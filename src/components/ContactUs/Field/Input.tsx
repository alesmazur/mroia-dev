import { FieldErrors, UseFormRegister } from "react-hook-form";
import { clsx } from "clsx";
import { TbTriangleInvertedFilled } from "react-icons/tb";

interface IFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface IInputProps {
  inputName: "name" | "email" | "phone" | "message";
  inputLabel: string;
  placeholder?: string;
  register: UseFormRegister<IFormData>;
  errors: FieldErrors<IFormData>;
}

function Input(props: IInputProps) {
  const { inputName, inputLabel, register, errors, placeholder } = props;

  return (
    <div className="grid gap-2 relative group">
      <input
        id={inputName}
        className={clsx(
          "bg-transparent border-b border-white/25 py-1.5 outline-none text-xl w-full",
          "placeholder:text-lg placeholder:font-light placeholder:tracking-wider",
          errors[inputName]?.message && "!border-red-500/75",
        )}
        placeholder={placeholder || ""}
        {...register(inputName)}
      />
      <label
        htmlFor={inputName}
        className={clsx(
          "opacity-75 tracking-widest text-sm",
          errors[inputName]?.message && "text-red-500 !opacity-100",
        )}
      >
        {inputLabel}*
      </label>

      <div
        className={clsx(
          "absolute -top-10 -left-4 z-10 py-1.5 px-3 rounded text-sm bg-red-500",
          "opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          !errors[inputName]?.message && "hidden",
        )}
      >
        <TbTriangleInvertedFilled className="absolute -bottom-2.5 left-5 text-red-500" />
        {errors[inputName]?.message}
      </div>
    </div>
  );
}

export default Input;
