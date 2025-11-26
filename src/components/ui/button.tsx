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
        // MAIN CTA – TEAL → WARM YELLOW GRADIENT
        default: [
          "relative overflow-hidden",
          // gradient built from your teal + warm yellow
          "bg-[linear-gradient(135deg,_#0F766E_0%,_#0F766E_45%,_#F59E0B_100%)]",
          "text-primary-foreground",
          // teal-based glow
          "shadow-[0_18px_40px_rgba(15,118,110,0.35)]",
          // stronger hover glow, hint of warm yellow
          "hover:shadow-[0_22px_55px_rgba(245,158,11,0.45)]",
          "hover:translate-y-[-1px] active:translate-y-[0px]",
        ].join(" "),

        // OUTLINE – neutral base, TEAL HOVER
        outline: [
          "border border-border/80 bg-transparent text-secondary",
          "hover:bg-[#0F766E] hover:text-white hover:border-[#0F766E]",
          "hover:shadow-[0_18px_40px_rgba(15,118,110,0.45)]",
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
