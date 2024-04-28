import { clsx } from "clsx";

interface SubTitileProps {
  children: string;
  className?: string;
}

function SubTitile({ children, className }: SubTitileProps) {
  return (
    <p
      className={clsx(
        "text-center text-lg mx-auto max-w-4xl leading-8 mb-16",
        className && `${className}`,
      )}
    >
      {children}
    </p>
  );
}

export default SubTitile;
