import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center whitespace-nowrap",
    "rounded-full text-sm font-medium",
    "transition-all duration-200 active:scale-[0.98]",
    "ring-offset-background",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-60",
    // keep icons same line, same size
    "[&_svg]:pointer-events-none [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        // MAIN TEAL CTA
        default: [
          "relative overflow-hidden",
          "bg-[#0F766E]",
          "text-primary-foreground",
          "shadow-[0_2px_8px_rgba(15,118,110,0.2)]",
          "hover:bg-[#F59E0B]",
          "hover:translate-y-[-1px] active:translate-y-[0px]",
        ].join(" "),

        // OUTLINE BUTTONS → teal hover
        outline: [
          "border-2 border-white bg-transparent text-white",
          "hover:bg-[#F59E0B] hover:text-white hover:border-[#F59E0B]",
          "hover:shadow-[0_2px_8px_rgba(245,158,11,0.3)]",
        ].join(" "),

        ghost: "bg-transparent hover:bg-muted text-secondary",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-sm",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        link: "text-primary underline-offset-4 hover:underline px-0 py-0 h-auto",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-11 px-6 text-sm",
        xl: "h-12 px-7 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
