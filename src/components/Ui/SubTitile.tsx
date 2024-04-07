interface SubTitileProps {
  children: string;
}

function SubTitile({ children }: SubTitileProps) {
  return (
    <p className="text-center text-lg mx-auto max-w-4xl leading-8 mb-16">
      {children}
    </p>
  );
}

export default SubTitile;
