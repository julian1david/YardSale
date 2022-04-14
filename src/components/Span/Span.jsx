import React from 'react'
import './Span.scss'

const Span = (
    {children,
    className}
) => {
  return (
    <span className={["Span", className].join(" ")}> {children} </span>
  )
}

export default Span