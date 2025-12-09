// src/components/ui/button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 tracking-wide uppercase shadow-lg hover:shadow-xl",
  {
    variants: {
      variant: {
        // MAIN BUTTON – Your exact #557D96
        default: "bg-[#557D96] text-white hover:bg-[#4a6f8a] focus-visible:ring-[#557D96]",

        // Hero button (big CTA) – richer version of your blue
        hero: "bg-gradient-to-r from-[#557D96] to-[#466f8a] text-white hover:from-[#4a6f8a] hover:to-[#3d6080] font-semibold shadow-2xl",

        // Outline version
        outline: "border-2 border-[#557D96] text-[#557D96] bg-transparent hover:bg-[#557D96] hover:text-white",

        // Navbar & mobile CTA
        navCta: "bg-[#557D96] text-white hover:bg-[#4a6f8a]",

        // Any old warm/gold buttons → now your blue
        warm: "bg-[#557D96] text-white hover:bg-[#4a6f8a]",
        gold: "bg-[#557D96] text-white hover:bg-[#4a6f8a]",
        heroOutline: "border-2 border-[#557D96] text-[#557D96] bg-transparent hover:bg-[#557D96] hover:text-white",

        // Extra useful variants using your blue
        primary: "bg-[#557D96] text-white hover:bg-[#4a6f8a]",
        secondary: "bg-[#557d96]/10 text-[#557D96] hover:bg-[#557d96]/20",
        ghost: "text-[#557D96] hover:bg-[#557d96]/10",
        link: "text-[#557D96] underline-offset-4 hover:underline",

        destructive: "bg-red-600 text-white hover:bg-red-500",
      },
      size: {
        default: "h-11 px-8",
        sm: "h-9 px-6 text-xs",
        lg: "h-14 px-10 text-lg font-semibold",
        xl: "h-16 px-14 text-xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

// import * as React from "react";
// import { Slot } from "@radix-ui/react-slot";
// import { cva, type VariantProps } from "class-variance-authority";

// import { cn } from "@/lib/utils";

// const buttonVariants = cva(
//   "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 tracking-wide uppercase",
//   {
//     variants: {
//       variant: {
//         default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft",
//         destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
//         outline: "border border-foreground/20 bg-transparent text-foreground hover:bg-foreground hover:text-background",
//         secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
//         ghost: "hover:bg-secondary hover:text-secondary-foreground",
//         link: "text-primary underline-offset-4 hover:underline",
//         gold: "bg-accent text-accent-foreground font-medium hover:bg-accent/90",
//         hero: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-warm",
//         heroOutline: "border-2 border-primary-foreground/80 text-primary-foreground bg-transparent hover:bg-primary-foreground/10",
//         navCta: "bg-primary text-primary-foreground hover:bg-primary/90",
//         warm: "bg-primary text-primary-foreground hover:bg-primary/90",
//       },
//       size: {
//         default: "h-10 px-6 py-2",
//         sm: "h-9 px-4 text-xs",
//         lg: "h-12 px-8",
//         xl: "h-14 px-10",
//         icon: "h-10 w-10",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   },
// );

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//     VariantProps<typeof buttonVariants> {
//   asChild?: boolean;
// }

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ className, variant, size, asChild = false, ...props }, ref) => {
//     const Comp = asChild ? Slot : "button";
//     return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
//   },
// );
// Button.displayName = "Button";

// export { Button, buttonVariants };
