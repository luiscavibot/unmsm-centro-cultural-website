import { strapiFetch } from '@/data-source/strapi-back-instance';
import { AgendaCulturalResponse } from '@/interfaces/services/agenda-cultural.interface';
import { determineEventDate } from '@/ui/helpers/determine-event-date';

const RESOURCE_PATH = '/agenda-cultural-eventos';

export class AgendaCulturalService {
	static async getEntriesToHome() {
		try {
			const params = {
				fields: ['title', 'slug', 'summary', 'place'],
				populate: [
					'image',
					'exact_dates',
					'date_ranges.final_date',
					'date_ranges.start_date',
				],
				filters: { isInDesktop: { $eq: true } },
				sort: 'createdAt:desc',
			};

			const response = await strapiFetch<AgendaCulturalResponse>(
				RESOURCE_PATH,
				{ params }
			);
			return response.data;
		} catch (error) {
			console.error('Error al obtener los datos:', error);
			throw error;
		}
	}

	static async getEntryBySlug(slug: string) {
		try {
			const params = {
				filters: { slug: { $eq: slug } },
				populate: [
					'image',
					'exact_dates',
					'date_ranges.final_date',
					'date_ranges.start_date',
				],
				sort: 'createdAt:desc',
			};

			const response = await strapiFetch<AgendaCulturalResponse>(
				RESOURCE_PATH,
				{ params }
			);
			return response.data;
		} catch (error) {
			console.error('Error al obtener los datos:', error);
			throw error;
		}
	}

	static async getUpcomingEvents(currentSlug: string) {
		try {
			const params = {
				filters: { slug: { $ne: currentSlug } },
				populate: [
					'image',
					'exact_dates',
					'date_ranges.final_date',
					'date_ranges.start_date',
				],
				pagination: { limit: 10 },
				sort: 'createdAt:desc',
			};

			const response = await strapiFetch<AgendaCulturalResponse>(
				RESOURCE_PATH,
				{ params }
			);

			const now = new Date();
			const upcoming = response.data.filter((event) => {
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

	static async getListEntries({
		page = 1,
		pageSize = 5,
		organizer = [] as string[],
		mode = [] as string[],
		dateRange = ['', ''] as [string, string],
	}) {
		try {
			const organizerFilters = organizer.map((org) => ({
				organizer: { $eq: org },
			}));
			const modeFilters = mode.map((m) => ({ mode: { $eq: m } }));

			const andFilters: Record<string, any>[] = [];
			if (organizerFilters.length) {
				andFilters.push({ $or: organizerFilters });
			}
			if (modeFilters.length) {
				andFilters.push({ $or: modeFilters });
			}

			const params: Record<string, any> = {
				populate: [
					'image',
					'exact_dates',
					'date_ranges.final_date',
					'date_ranges.start_date',
				],
				pagination: { page, pageSize, withCount: true },
				sort: 'createdAt:desc',
				...(andFilters.length > 0 && { filters: { $and: andFilters } }),
			};

			const response = await strapiFetch<AgendaCulturalResponse>(
				RESOURCE_PATH,
				{ params }
			);
			return response;
		} catch (error) {
			console.error('Error al obtener los datos:', error);
			throw error;
		}
	}
}
