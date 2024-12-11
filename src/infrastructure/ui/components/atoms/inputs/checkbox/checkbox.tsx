import React from 'react'

interface CheckboxProps {
	label: string;
	checked?: boolean;
	disabled?: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked = false, disabled = false, onChange }) => {
	return (
		<label className="form-control">
			<div className="p-[15px]">
				<input type="checkbox" name="checkbox" checked={checked} disabled={disabled} onChange={onChange} />
			</div>
			{label}
		</label>
	)
}

export default Checkbox