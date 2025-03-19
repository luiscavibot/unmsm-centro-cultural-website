// app/components/molecules/FormField.tsx
import React from 'react';
import Label from '../../atoms/label';
import Input from '../../atoms/input';

interface FormFieldProps {
	label: string;
	type: string;
	name: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({ label, ...inputProps }) => (
	<div className="mb-4">
		<Label htmlFor={inputProps.name}>{label}</Label>
		<Input {...inputProps} />
	</div>
);

export default FormField;
