import React from 'react'
import '../styles/Title.scss'

const Title = ({children , className}) => {
  return (
    <h1 className={['Title', className].join(" ")}>{children}</h1>
  )
}

export default Title