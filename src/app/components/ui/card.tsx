import React from "react"
import { cn } from "@/lib/utilis"// Optional utility for merging classNames

type CardProps = {
  children: React.ReactNode
  className?: string
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-xl border border-gray-800 bg-gray-900 shadow-sm",
        className
      )}
    >
      {children}
    </div>
  )
}

export const CardContent = ({ children, className }: CardProps) => {
  return <div className={cn("p-4", className)}>{children}</div>
}
