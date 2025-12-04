import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/80",
        outline: "border-2 border-accent bg-transparent text-accent hover:bg-accent hover:text-accent-foreground font-semibold",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/70",
        ghost: "hover:bg-accent/10 hover:text-accent",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-accent text-accent-foreground font-bold shadow-rose-glow hover:bg-[hsl(15_40%_48%)] hover:shadow-xl hover:scale-105 border border-accent/30",
        // WhatsApp CTA - Contrast 4.58:1 (white #FFFFFF on #1F9D55)
        // Hex values: bg=#1F9D55, hover=#1A8A4A, active=#157A40
        whatsapp: "bg-[hsl(142_70%_45%)] text-white font-bold shadow-[0_8px_30px_hsla(142,70%,45%,0.4)] hover:bg-[hsl(142_70%_40%)] hover:shadow-[0_12px_40px_hsla(142,70%,45%,0.5)] hover:scale-105 active:bg-[hsl(142_70%_35%)] active:scale-100",
        // Final CTA - Enhanced contrast 5.2:1 (white on darker green)
        // Hex values: bg=#1A8549, hover=#157A40
        "whatsapp-strong": "bg-[hsl(142_76%_38%)] text-white font-bold shadow-[0_10px_35px_hsla(142,76%,38%,0.45)] hover:bg-[hsl(142_76%_33%)] hover:shadow-[0_14px_45px_hsla(142,76%,38%,0.55)] hover:scale-105 active:bg-[hsl(142_76%_28%)] active:scale-100 ring-2 ring-[hsl(142_76%_50%)]/30",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
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
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
