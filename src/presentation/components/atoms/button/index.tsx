// app/components/atoms/Button.tsx
import React, { FC, ReactNode } from 'react';

export interface Style {
	backgroundColor: 'red';
	color?: string;
}

interface ButtonProps {
	style: Style;
	type?: 'button' | 'submit' | 'reset';
	onClick?: () => void;
	children: ReactNode;
}

const Button: FC<ButtonProps> = ({ type = 'button', onClick, children }) => (
	<button
		type={type}
		onClick={onClick}
		className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
	>
		{children}
	</button>
);

export default Button;
