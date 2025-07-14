import { useFieldContext } from '@/lib/form/form-context';
import Calendar from '@/ui/components/molecules/calendar';
import dayjs from 'dayjs';

interface CalendarFieldProps {
	className?: string;
	disabled?: boolean;
}

export function CalendarField(
	props: CalendarFieldProps = {
		disabled: false,
	}
) {
	const field = useFieldContext<[string, string]>();
	const [fromStr, toStr] = field.state.value;
	const from = fromStr ? dayjs(fromStr).toDate() : undefined;
	const to = toStr ? dayjs(toStr).toDate() : undefined;
	const iso8601Format = 'YYYY-MM-DD';

	return (
		<Calendar
			{...props}
			selected={{
				from,
				to,
			}}
			onSelect={(range) => {
				field.setValue([
					range?.from ? dayjs(range.from).format(iso8601Format) : '',
					range?.to ? dayjs(range.to).format(iso8601Format) : '',
				]);
			}}
		/>
	);
}
