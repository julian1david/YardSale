import React from 'react'
import './DivContainer.scss'

const Container = (
  {children,
  className}
  ) => {
  return (
    <div className={["Container", className].join(" ")}>{children}</div>
  )
}

export default Container