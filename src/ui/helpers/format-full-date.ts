import { parse, format } from 'date-fns';
import { es } from 'date-fns/locale';

export const formatFullDate = (dateStr: string): string => {
	try {
		const parsedDate = parse(dateStr, 'yyyy-MM-dd', new Date());
		return format(parsedDate, "d 'de' LLLL 'de' yyyy", { locale: es });
	} catch (error) {
		console.error('Invalid date format:', error);
		return '';
	}
};