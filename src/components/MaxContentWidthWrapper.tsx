import { cn } from "../lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};
const MaxContentWidthWrapper: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "max-w-[1440px] lg:px-20 px-4 py-[60px] mx-auto w-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxContentWidthWrapper;
