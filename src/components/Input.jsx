import React from 'react';
import '../styles/Input.scss'

const Input = ({
	type,
	id,
	name = undefined,
	placeholder = undefined,
	value = undefined,
	onClick = undefined
}) => {
	return (
		<input
			type={type}
			id={id}
			name={name}
			placeholder={placeholder}
			value={value}
			className="Input"
		/>
	);
};

export default Input;