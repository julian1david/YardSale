
import './Figure.scss'

const Figure = ({ children, className }) => {
    return (
        <figure className={className}>
            {children}
        </figure>
    )
}

export default Figure