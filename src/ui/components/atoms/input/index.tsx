// app/components/atoms/Input.tsx
import React from 'react';

interface InputProps {
	type: string;
	name: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, name, value, onChange }) => (
	<input
		type={type}
		name={name}
		value={value}
		onChange={onChange}
		className="w-full p-2 border border-gray-300 rounded"
	/>
);

export default Input;
