import React from 'react'
import './Logo.scss'

function Logo(
  {
    src=src,
    alt=alt,
    className
  }
) {
  return (
    <img src={src} alt={alt} className={[className].join(" ")} />
  )
}

export default Logo