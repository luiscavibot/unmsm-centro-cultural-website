import { useFieldContext } from '@/lib/form/form-context';
import React from 'react';

interface CheckboxProps {
	label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
	const field = useFieldContext<boolean>();
	return (
		<label className="form-control">
			<div className="p-[15px]">
				<input
					type="checkbox"
					onChange={(e) => field.handleChange(e.target.checked)}
					onBlur={field.handleBlur}
				/>
			</div>
			{label}
		</label>
	);
};

export default Checkbox;
