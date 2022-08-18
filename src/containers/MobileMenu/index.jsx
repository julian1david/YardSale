
import Link from '@/components/Link'
import './MenuMobile.scss'

const MenuMobile = () => {
    return (
        <div className="MobileMenu">
            <div>
                <h4>CATEGORIES</h4>
                <ul>
                    <li>
                        <Link className="Link__menu">All</Link>
                    </li>
                    <li>
                        <Link className="Link__menu">Clothes</Link>
                    </li>
                    <li>
                        <Link className="Link__menu">Electronics</Link>
                    </li>
                    <li>
                        <Link className="Link__menu">Fornitures</Link>
                    </li>
                    <li>
                        <Link className="Link__menu">Toys</Link>
                    </li>
                    <li>
                        <Link className="Link__menu">Others</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link className="Link__menu">My orders</Link>
                    </li>
                    <li>
                        <Link className="Link__menu">My account</Link>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <Link className="Link__menu--email">yourmail@/example.com</Link>
                    </li>
                    <li>
                        <Link>Sign out</Link>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default MenuMobile