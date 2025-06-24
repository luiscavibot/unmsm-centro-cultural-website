import { strapiFetch } from '@/data-source/strapi-back-instance';
import { EntrevistasResponse } from '@/interfaces/services/entrevistas.interface';

const RESOURCE_PATH = '/entrevistas';

export class EntrevistasService {
	static async getEntriesToHome() {
		try {
			const params = {
				'fields': 'link_video',
				'populate': 'thumbnail_video',
				// 'sort': 'fechaPublicacion:desc',
			};

			const data = await strapiFetch<EntrevistasResponse>(
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
