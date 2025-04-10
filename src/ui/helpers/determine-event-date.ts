import { AgendaCultural } from '@/interfaces/services/agenda-cultural.interface';

export const determineEventDate = (event: AgendaCultural): Date => {
	const exact = event.exact_dates?.[0]?.day;
	const range = event.date_ranges?.[0]?.start_date?.day;
	const dateStr = exact || range || event.publishedAt;
	return new Date(dateStr);
}