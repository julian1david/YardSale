import React from 'react'
import './Menu.scss'
import Link from '@components/Link/Link'

const Menu = () => {
  return (
    <div className="Menu">
      <ul>
        <li>
          <Link href="/" className='Link__menu'>My orders</Link>
        </li>
        <li>
          <Link href="/" className='Link__menu'>My account</Link>
        </li>
        <li>
          <Link href="/">Sign out</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu