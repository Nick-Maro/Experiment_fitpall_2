import React from 'react'
import PropTypes from 'prop-types'

export function Button({ children, variant = 'default', className = '', ...props }) {
  const baseClasses = 'px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2'
  const variantClasses = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50'
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'outline']),
  className: PropTypes.string
}