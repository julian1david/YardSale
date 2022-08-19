
import './Link.scss'

const Alink = ({children, className}) => {
  return (
    <p className={["Link", className].join(" ")}>{children}</p>
  )
}

export default Alink