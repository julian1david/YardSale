import React from 'react'
import '../styles/Span.scss'

const Span = (
    {children,
    className}
) => {
  return (
    <span className={["Span", className].join(" ")}> {children} </span>
  )
}

export default Span