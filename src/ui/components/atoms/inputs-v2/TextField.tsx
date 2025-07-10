import { useFieldContext } from '@/lib/form/form-context';
import { useStore } from '@tanstack/react-form';

export default function TextField({ label }: { label: string }) {
	const field = useFieldContext<string>();

	const errors = useStore(field.store, (state) => state.meta.errors);

	return (
		<div>
			<label>
				<div>{label}</div>
				<input
					value={field.state.value}
					onChange={(e) => field.handleChange(e.target.value)}
				/>
			</label>
			{errors.map((error: string) => (
				<div key={error} style={{ color: 'red' }}>
					{error}
				</div>
			))}
		</div>
	);
}
