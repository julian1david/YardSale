import React from 'react'
import '../styles/Subtitle.scss'

const Subtitle = ({children, className}) => {
  return (
    <p className={["Subtitle", className].join(" ")}>{children}</p>
  )
}

export default Subtitle