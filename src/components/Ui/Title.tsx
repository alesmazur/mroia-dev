import { clsx } from "clsx";

interface TitleProps {
  children: string;
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

function Title({ children, level = "h2", className }: TitleProps) {
  const HeadingTag = level;

  return (
    <HeadingTag
      className={clsx(
        "font-heading mb-10 text-center text-4xl lg:text-5xl 3xl:text-6xl",
        className && `${className}`,
      )}
    >
      {children}
    </HeadingTag>
  );
}

export default Title;
