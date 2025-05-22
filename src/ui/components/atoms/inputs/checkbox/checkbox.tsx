import { useFieldContext } from '@/lib/form/form-context';
import { useStore } from '@tanstack/react-form';
import React from 'react';

interface CheckboxProps {
	label: string;
	// checked?: boolean;
	// disabled?: boolean;
	// onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
	label,
	// checked = false,
	// disabled = false,
	// onChange,
}) => {
	const field = useFieldContext<boolean>();
	return (
		<label className="form-control">
			<div className="p-[15px]">
				<input
					type="checkbox"
					// name="checkbox"
					// checked={checked}
					// disabled={disabled}
					// onChange={onChange}
					checked={field.state.value}
					onChange={(e) => field.handleChange(e.target.checked)}
					onBlur={field.handleBlur}
				/>
			</div>
			{label}
		</label>
	);
};

export default Checkbox;
