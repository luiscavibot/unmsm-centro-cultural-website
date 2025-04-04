import {
	DateRange,
	ExactDate,
} from '@/interfaces/services/agenda-cultural.interface';
import { parseISO, format, compareAsc } from 'date-fns';
import { es } from 'date-fns/locale';

interface SingleDate {
	day: string;
	time: string;
}
// interface FormattedDate extends SingleDate {}
type FormattedDate = SingleDate;

export const useCustomDates = (
	exact_dates: ExactDate[] | null,
	date_ranges: DateRange[] | null
) => {
		const allDates: ExactDate[] = [];

		if (exact_dates) {
			allDates.push(...exact_dates);
		}
		if (date_ranges) {
			date_ranges.forEach((range) => {
				if (range.start_date) {
					allDates.push(range.start_date);
				}
				if (range.final_date) {
					allDates.push(range.final_date);
				}
			});
		}

		const uniqueDays = Array.from(
			new Set(allDates.map((date) => date.day))
		);
		uniqueDays.sort((a, b) => compareAsc(parseISO(a), parseISO(b)));

		let daysSummary: string | null = null;
		if (uniqueDays.length > 1) {
			const startDate = parseISO(uniqueDays[0]);
			const endDate = parseISO(uniqueDays[uniqueDays.length - 1]);

			if (
				startDate.getMonth() === endDate.getMonth() &&
				startDate.getFullYear() === endDate.getFullYear()
			) {
				daysSummary = `Del ${format(startDate, 'd', {
					locale: es,
				})} al ${format(endDate, 'd', { locale: es })} ${format(
					startDate,
					'LLLL',
					{ locale: es }
				)}`;
			} else {
				daysSummary = `Del ${format(startDate, "d 'de' LLLL", {
					locale: es,
				})} al ${format(endDate, "d 'de' LLLL", { locale: es })}`;
			}
		}

		let singleDate: SingleDate | null = null;
		if (uniqueDays.length === 1) {
			const dayDate = parseISO(uniqueDays[0]);
			const formattedDay = format(dayDate, "d 'de' LLLL", { locale: es });
			const entriesForDay = allDates.filter(
				(date) => date.day === uniqueDays[0]
			);

			let timeStr = '';
			if (
				entriesForDay.length === 1 &&
				entriesForDay[0].start_time &&
				entriesForDay[0].final_time
			) {
				const startDateTime = parseISO(
					`${entriesForDay[0].day}T${entriesForDay[0].start_time}`
				);
				const endDateTime = parseISO(
					`${entriesForDay[0].day}T${entriesForDay[0].final_time}`
				);
				const startFormatted = format(startDateTime, 'h a', {
					locale: es,
				})
					.toLowerCase()
					.replace('am', 'a.m.')
					.replace('pm', 'p.m.');
				const endFormatted = format(endDateTime, 'h a', { locale: es })
					.toLowerCase()
					.replace('am', 'a.m.')
					.replace('pm', 'p.m.');
				timeStr = `${startFormatted} - ${endFormatted}`;
			}
			singleDate = { day: formattedDay, time: timeStr };
		}
		const allDatesFormatted: FormattedDate[] = uniqueDays.map((day) => {
			const dayDate = parseISO(day);
			const formattedDay = format(dayDate, "d 'de' LLLL", { locale: es });
			const entriesForDay = allDates.filter((date) => date.day === day);
			let timeStr = '';
			if (
				entriesForDay.length === 1 &&
				entriesForDay[0].start_time &&
				entriesForDay[0].final_time
			) {
				const startDateTime = parseISO(
					`${entriesForDay[0].day}T${entriesForDay[0].start_time}`
				);
				const endDateTime = parseISO(
					`${entriesForDay[0].day}T${entriesForDay[0].final_time}`
				);
				const startFormatted = format(startDateTime, 'h a', {
					locale: es,
				})
					.toLowerCase()
					.replace('am', 'a.m.')
					.replace('pm', 'p.m.');
				const endFormatted = format(endDateTime, 'h a', { locale: es })
					.toLowerCase()
					.replace('am', 'a.m.')
					.replace('pm', 'p.m.');
				timeStr = `${startFormatted} - ${endFormatted}`;
			}
			return { day: formattedDay, time: timeStr };
		});

	return { daysSummary, singleDate, allDatesFormatted };
};
