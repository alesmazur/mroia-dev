import { clsx } from "clsx";

interface SubmitButtonProps {
  text: string;
  loaderText: string;
  loading: boolean;
  success: boolean;
}

function SubmitButton({
  text,
  loaderText,
  loading,
  success,
}: SubmitButtonProps) {
  let content: string;

  if (success) {
    content = "Success";
  } else if (!loading && !success) {
    content = text;
  } else {
    content = loaderText;
  }

  return (
    <button
      type="submit"
      className={clsx(
        "mt-6 p-2.5 rounded-xl  text-mr-main text-lg font-medium",
        "transition-opacity duration-300 hover:opacity-85",
        loading && "opacity-85 pointer-events-none",
        success && "!bg-green-500 text-white !pointer-events-none",
        !success && "!bg-mr-main-active",
      )}
    >
      {content}
    </button>
  );
}

export default SubmitButton;
