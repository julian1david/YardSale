import './Section.scss';

const Section = ({ children, className }) => {
	return (
		<section className={['Section', className].join(' ')}>{children}</section>
	);
};

export default Section;
