// app/components/atoms/Label.tsx
import React from 'react';

interface LabelProps {
	htmlFor: string;
	children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ htmlFor, children }) => (
	<label htmlFor={htmlFor} className="block text-gray-700 font-medium mb-1">
		{children}
	</label>
);

export default Label;
