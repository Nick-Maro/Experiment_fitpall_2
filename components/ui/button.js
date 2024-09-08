import React from 'react'

export const Button = ({ children, className = "", variant = "default", ...props }) => {
  const baseStyles = "px-4 py-2 font-semibold rounded-md transition-colors focus:outline-none"

  const variants = {
    default: "bg-purple-600 text-white hover:bg-purple-700",
    outline: "border border-purple-600 text-purple-600 hover:bg-purple-50"
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant] || variants.default} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
