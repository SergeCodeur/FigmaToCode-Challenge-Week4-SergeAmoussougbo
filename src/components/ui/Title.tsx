import { cn } from "@/lib/utils";

type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

const Title = ({ children, className }: TitleProps) => {
  return (
    <h2
      className={cn(
        "inline-flex justify-center items-center gap-4 text-black",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default Title;
