"use client"

import { cn } from "@/lib/utils"
import { Logo } from "./logo"

interface LogoTextProps {
  className?: string
  size?: "sm" | "md" | "lg"
  showIcon?: boolean
}

export function LogoText({ className, size = "md", showIcon = true }: LogoTextProps) {
  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  }

  const logoSizes = {
    sm: "sm" as const,
    md: "md" as const,
    lg: "lg" as const,
  }

  return (
    <div className={cn("flex items-center space-x-3", className)}>
      {showIcon && <Logo size={logoSizes[size]} />}
      <div className="flex flex-col">
        <h1
          className={cn(
            "font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent",
            textSizes[size],
          )}
        >
          뽀식이
        </h1>
        {size === "lg" && <p className="text-xs text-emerald-600/70 -mt-1">자연스러운 취업</p>}
      </div>
    </div>
  )
}
