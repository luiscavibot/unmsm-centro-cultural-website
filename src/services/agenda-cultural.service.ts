import { strapiFetch } from '@/data-source/strapi-back-instance';
import { AgendaCulturalResponse } from '@/interfaces/services/agenda-cultural.interface';
import { determineEventDate } from '@/ui/helpers/determine-event-date';

const RESOURCE_PATH = '/agenda-cultural-eventos';
export class AgendaCulturalService {
	static async getEntriesToHome() {
		try {
			const params = {
				fields: 'title,slug,summary,place',
				'populate[0]': 'image',
				'populate[1]': 'exact_dates',
				'populate[2]': 'date_ranges.final_date',
				'populate[3]': 'date_ranges.start_date',
				'filters[isInDesktop][$eq]': 'true',
			};

			const data = await strapiFetch<AgendaCulturalResponse>(
				RESOURCE_PATH,
				{ params }
			);
			return data.data;
		} catch (error) {
			console.error('Error al obtener los datos:', error);
			throw error;
		}
	}
	static async getEntryBySlug(slug: string) {
		try {
			const params = {
				'filters[slug][$eq]': slug,
				'populate[0]': 'image',
				'populate[1]': 'exact_dates',
				'populate[2]': 'date_ranges.final_date',
				'populate[3]': 'date_ranges.start_date',
			};

			const data = await strapiFetch<AgendaCulturalResponse>(
				RESOURCE_PATH,
				{ params }
			);
			return data.data;
		} catch (error) {
			console.error('Error al obtener los datos:', error);
			throw error;
		}
	}
	static async getUpcomingEvents(currentSlug: string) {
		try {
			const params = {
				'filters[slug][$ne]': currentSlug,
				'populate[0]': 'image',
				'populate[1]': 'exact_dates',
				'populate[2]': 'date_ranges.final_date',
				'populate[3]': 'date_ranges.start_date',
				'pagination[limit]': 10,
			};

			const data = await strapiFetch<AgendaCulturalResponse>(
				RESOURCE_PATH,
				{ params }
			);

			const now = new Date();
			const upcoming = data.data.filter((event) => {
				const date = determineEventDate(event);
				return date >= now;
			});

			const sorted = upcoming.sort(
				(a, b) =>
					determineEventDate(a).getTime() -
					determineEventDate(b).getTime()
			);
			return sorted.slice(0, 3);
		} catch (error) {
			console.error('Error al obtener eventos próximos:', error);
			throw error;
		}
	}
	static async getListEntries(page = 1, pageSize = 5) {
		try {
			const params = {
				'populate[0]': 'image',
				'populate[1]': 'exact_dates',
				'populate[2]': 'date_ranges.final_date',
				'populate[3]': 'date_ranges.start_date',
				'pagination[page]': page,
				'pagination[pageSize]': pageSize,
				'pagination[withCount]': true,
				sort: 'createdAt:asc',
			};

			const data = await strapiFetch<AgendaCulturalResponse>(
				RESOURCE_PATH,
				{ params }
			);
			return data;
		} catch (error) {
			console.error('Error al obtener los datos:', error);
			throw error;
		}
	}
}
