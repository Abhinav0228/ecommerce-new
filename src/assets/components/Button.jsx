import React from 'react'

const Button = ({text, className, onClick}) => {
  return (
    <button onClick={onClick} className={`py-3 px-5 bg-amber-200 rounded-lg cursor-pointer ${className}`}>{text}</button>
  )
}

export default Button