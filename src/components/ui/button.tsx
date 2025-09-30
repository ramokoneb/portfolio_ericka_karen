
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 relative",
  {
    variants: {
      variant: {
        default: "bg-primary-dark text-white border-3 border-primary-darker rounded-full shadow-[4px_4px_0_hsl(var(--primary-darker))] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_hsl(var(--primary-darker))]",
        destructive:
          "bg-red-500 text-white border-3 border-red-700 rounded-full shadow-[4px_4px_0_rgb(185,28,28)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_rgb(185,28,28)]",
        outline:
          "border-3 border-primary-dark bg-white text-primary-dark rounded-full shadow-[4px_4px_0_hsl(var(--primary-dark))] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_hsl(var(--primary-dark))]",
        secondary:
          "bg-white text-primary-dark border-3 border-primary rounded-full shadow-[4px_4px_0_hsl(var(--primary))] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_hsl(var(--primary))]",
        ghost: "hover:bg-white/20 rounded-full",
        link: "text-primary-darker underline-offset-4 hover:underline font-bold",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 rounded-full px-4",
        lg: "h-14 rounded-full px-8 text-lg",
        icon: "h-12 w-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
