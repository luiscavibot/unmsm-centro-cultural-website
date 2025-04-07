import { parse, format } from 'date-fns';
import { es } from 'date-fns/locale';

export const formatFullDateWithDay = (dateStr: string): string => {
	try {
		const parsedDate = parse(dateStr, 'yyyy-MM-dd', new Date());
		const formatted = format(parsedDate, "EEEE, d 'de' LLLL", { locale: es });

		return formatted.charAt(0).toUpperCase() + formatted.slice(1);
	} catch (error) {
		console.error('Invalid date format:', error);
		return '';
	}
};