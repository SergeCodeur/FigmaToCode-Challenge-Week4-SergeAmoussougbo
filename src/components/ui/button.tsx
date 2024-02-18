import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded hover:bg-neutral whitespace-nowrap text-button-text2-600 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        small:
          "h-[48px] text-button-text2-600 bg-black text-white hover:bg-primary px-[16px] py-[12px] gap-2.5",
        medium:
          " text-button-text2-600 bg-black text-white h-[48px] gap-2 px-[20px] py-[16px] gap-2",
        icon: "h-[48px] w-[48px] bg-white text-black border-[2px] border-black hover:bg-black hover:text-white px-[12px]",
      },
    },
    defaultVariants: {
      variant: "small",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn("", buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
