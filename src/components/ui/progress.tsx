"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="h-full w-full flex-1 transition-all animate-gradient-shift"
        style={{
          transform: `translateX(-${100 - (value || 0)}%)`,
          background: "linear-gradient(90deg, #0ea5e9, #14b8a6, #06b6d4, #0ea5e9)",
          backgroundSize: "200% 100%",
        }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
