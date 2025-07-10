import { useFieldContext } from '@/lib/form/form-context';

export function CheckboxGroupField({ options }: { options: string[] }) {
	const field = useFieldContext<string[]>();
	return (
		<>
			{options.map((opt) => {
				const checked = field.state.value.includes(opt);
				return (
					<label key={opt} className="form-control cursor-pointer">
						<div className="p-[15px]">
							<input
								type="checkbox"
								checked={checked}
								onChange={(e) => {
									if (e.target.checked) {
										field.pushValue(opt);
									} else {
										const idx =
											field.state.value.indexOf(opt);
										field.removeValue(idx);
									}
								}}
							/>
						</div>
						{opt}
					</label>
				);
			})}
		</>
	);
}
