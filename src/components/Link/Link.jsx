import React from 'react'
import './Link.scss'

const Link = ({children, className}) => {
  return (
    <a href="/" className={["Link", className].join(" ")}>{children}</a>
  )
}

export default Link