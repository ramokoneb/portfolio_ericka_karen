
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3182CE] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-[#3182CE] text-white hover:bg-[#2C5282] shadow-sm hover:shadow-md",
        destructive: "bg-red-500 text-white hover:bg-red-600 shadow-sm",
        outline: "border border-[#E2E8F0] bg-white hover:bg-[#F7FAFC] text-[#1A202C]",
        secondary: "bg-[#F7FAFC] text-[#1A202C] hover:bg-[#E2E8F0] shadow-sm",
        ghost: "hover:bg-[#F7FAFC] hover:text-[#1A202C] text-[#4A5568]",
        link: "text-[#3182CE] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 min-h-[44px] px-4 py-2",
        sm: "h-9 min-h-[40px] rounded-lg px-3",
        lg: "h-12 min-h-[48px] rounded-xl px-6",
        icon: "h-10 w-10 min-h-[44px] min-w-[44px]",
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
