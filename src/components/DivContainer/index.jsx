
import './DivContainer.scss'

const DivContainer = (
  {children,
  className}
  ) => {
  return (
    <div className={["Container", className].join(" ")}>{children}</div>
  )
}

export default DivContainer