import './Subtitle.scss';

const Subtitle = ({ children, className }) => {
	return <p className={['Subtitle', className].join(' ')}>{children}</p>;
};

export default Subtitle;
