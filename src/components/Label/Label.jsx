import React from 'react'
import './Label.scss'

const Label = ( {
    children,
    htmlFor=undefined
}) => {
  return (
    <label className='Label' htmlFor={htmlFor}>{children}</label>
  )
}

export default Label