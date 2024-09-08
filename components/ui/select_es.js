import React, { useState } from 'react'
import PropTypes from 'prop-types'

export function Select({ children, onValueChange, placeholder }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState('')

  const handleSelect = (value) => {
    setSelectedValue(value)
    onValueChange(value)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <SelectTrigger onClick={() => setIsOpen(!isOpen)}>
        <SelectValue placeholder={placeholder}>{selectedValue}</SelectValue>
      </SelectTrigger>
      {isOpen && (
        <SelectContent>
          {React.Children.map(children, child => 
            React.cloneElement(child, { onSelect: handleSelect })
          )}
        </SelectContent>
      )}
    </div>
  )
}

Select.propTypes = {
  children: PropTypes.node.isRequired,
  onValueChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}

export function SelectTrigger({ children, className = '', ...props }) {
  const classes = `flex items-center justify-between px-3 py-2 border rounded-md ${className}`
  return (
    <div className={classes} {...props}>
      {children}
      <span className="ml-2">▼</span>
    </div>
  )
}

SelectTrigger.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export function SelectValue({ children, placeholder }) {
  return <span>{children || placeholder}</span>
}

SelectValue.propTypes = {
  children: PropTypes.node,
  placeholder: PropTypes.string
}

export function SelectContent({ children, className = '' }) {
  const classes = `absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg ${className}`
  return <div className={classes}>{children}</div>
}

SelectContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export function SelectItem({ children, value, onSelect }) {
  return (
    <div
      className="px-3 py-2 cursor-pointer hover:bg-gray-100"
      onClick={() => onSelect(value)}
    >
      {children}
    </div>
  )
}

SelectItem.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  onSelect: PropTypes.func
}