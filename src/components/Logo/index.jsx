
import './Logo.scss'

function Logo(
  {
    src,
    alt,
    className
  }
) {
  return (
    <img src={src} alt={alt} className={[className].join(" ")} />
  )
}

export default Logo