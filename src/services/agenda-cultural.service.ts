import { strapiFetch } from '@/data-source/strapi-back-instance';
import { AngendaCulturalResponse } from '@/interfaces/services/agenda-cultural.interface';

const RESOURCE_PATH = '/agenda-cultural-eventos';

export class AgendaCulturalService {
	static async getEntriesToHome() {
		try {
			const params = {
				'populate[0]': 'image',
				'populate[1]': 'exact_dates',
				'populate[2]': 'date_ranges',
			};

			const data = await strapiFetch<AngendaCulturalResponse>(
				RESOURCE_PATH,
				{ params }
			);
			return data.data;
		} catch (error) {
			console.error('Error al obtener los datos:', error);
			throw error;
		}
	}
}
