import React from 'react'
import '../styles/Section.scss'

const Section = (
  {children,
  className}
  ) => {
  return (
    <section className={["Section", className].join(" ")}>{children}</section>
  )
}

export default Section