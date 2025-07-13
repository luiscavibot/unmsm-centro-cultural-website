import { strapiFetch } from '@/data-source/strapi-back-instance';
import { AgendaCulturalResponse } from '@/interfaces/services/agenda-cultural.interface';

const RESOURCE_PATH = '/agenda-cultural-eventos';

export class AgendaCulturalService {
	static async getEntriesToHome() {
		try {
			const params = {
				fields: [
					'title',
					'slug',
					'summary',
					'place',
					'dateString',
					'hourString',
				],
				populate: ['image'],
				filters: { isInDesktop: { $eq: true } },
				sort: 'validityPeriodStart:desc',
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
				populate: ['image'],
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
			const andFilters: Record<string, any>[] = [];

			if (currentSlug) {
				andFilters.push({ slug: { $ne: currentSlug } });
			}

			const params = {
				filters: {
					$and: [
						{
							validityPeriodStart: {
								$gte: new Date().toISOString(),
							},
						},
						...andFilters,
					],
				},
				populate: ['image'],
				pagination: { limit: 3 },
				sort: 'createdAt:desc',
			};

			const response = await strapiFetch<AgendaCulturalResponse>(
				RESOURCE_PATH,
				{ params }
			);

			return response.data;
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
			if (dateRange[0] && dateRange[1]) {
				andFilters.push({
					$and: [
						{ validityPeriodStart: { $gte: dateRange[0] } },
						{ validityPeriodEnd: { $lte: dateRange[1] } },
					],
				});
			}

			const params: Record<string, any> = {
				populate: ['image'],
				pagination: { page, pageSize, withCount: true },
				sort: 'validityPeriodStart:desc',
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
