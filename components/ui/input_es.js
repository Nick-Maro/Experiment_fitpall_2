import React from 'react'
import PropTypes from 'prop-types'

export function Input({ className = '', ...props }) {
  const baseClasses = 'px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
  const classes = `${baseClasses} ${className}`

  return <input className={classes} {...props} />
}

Input.propTypes = {
  className: PropTypes.string
}