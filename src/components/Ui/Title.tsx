interface TitleProps {
  children: string;
}

function Title({ children }: TitleProps) {
  return (
    <h2 className="font-heading mb-10 text-center text-4xl lg:text-5xl 3xl:text-6xl">
      {children}
    </h2>
  );
}

export default Title;
