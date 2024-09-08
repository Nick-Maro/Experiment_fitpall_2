import React from 'react'
import PropTypes from 'prop-types'

export function Card({ children, className = '', ...props }) {
  const classes = `bg-white rounded-lg shadow-md overflow-hidden ${className}`
  return <div className={classes} {...props}>{children}</div>
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export function CardHeader({ children, className = '', ...props }) {
  const classes = `px-6 py-4 ${className}`
  return <div className={classes} {...props}>{children}</div>
}

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export function CardTitle({ children, className = '', ...props }) {
  const classes = `text-xl font-semibold ${className}`
  return <h2 className={classes} {...props}>{children}</h2>
}

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export function CardDescription({ children, className = '', ...props }) {
  const classes = `text-sm text-gray-500 ${className}`
  return <p className={classes} {...props}>{children}</p>
}

CardDescription.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export function CardContent({ children, className = '', ...props }) {
  const classes = `px-6 py-4 ${className}`
  return <div className={classes} {...props}>{children}</div>
}

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}