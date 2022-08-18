
import './Menu.scss'
import Link from '@/components/Link'

const Menu = ( {
  className
}) => {
  return (
    <div className={['Menu', className].join(" ")}>
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