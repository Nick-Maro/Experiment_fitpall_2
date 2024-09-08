import React from 'react'

export const Input = ({ type = "text", className = "", ...props }) => {
  return (
    <input
      type={type}
      className={`px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${className}`}
      {...props}
    />
  )
}