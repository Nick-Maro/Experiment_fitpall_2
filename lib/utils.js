import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
export function buttonVariants({ variant }) {
    switch (variant) {
      case "outline":
        return "border border-gray-500 text-gray-500 hover:bg-gray-800 hover:text-white";
      case "ghost":
        return "bg-transparent text-gray-500 hover:bg-gray-800 hover:text-white";
      case "solid":
        return "bg-gray-700 text-white hover:bg-gray-600";
      default:
        return "bg-gray-500 text-white";
    }
  }