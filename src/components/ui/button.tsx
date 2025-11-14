import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center whitespace-nowrap",
    "rounded-full text-sm font-medium",
    "transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-60",
  ].join(" "),
  {
    variants: {
      variant: {
        /* Main CTA – sapphire gradient, “expensive” hover */
        default: [
          "relative overflow-hidden",
          "bg-[linear-gradient(135deg,_hsl(221,83%,65%)_0%,_hsl(221,83%,53%)_40%,_hsl(221,83%,45%)_100%)]",
          "text-primary-foreground",
          "shadow-[0_18px_40px_rgba(37,99,235,0.35)]",
          "hover:shadow-[0_22px_55px_rgba(37,99,235,0.5)]",
          "hover:translate-y-[-1px] active:translate-y-[0px]",
        ].join(" "),

        /* Clean outline for secondary CTAs */
        outline: [
          "border border-border/80 bg-transparent",
          "text-secondary hover:border-primary hover:text-primary",
          "hover:bg-primary/5",
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
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => {
  return <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
});

Button.displayName = "Button";

export { Button, buttonVariants };
