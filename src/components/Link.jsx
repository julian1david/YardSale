import React from 'react'
import '../styles/Link.scss'

const Link = ({children, className}) => {
  return (
    <a href="/" className={["Link", className].join(" ")}>{children}</a>
  )
}

export default Link