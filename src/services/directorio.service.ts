import { strapiFetch } from '@/data-source/strapi-back-instance';
import { DirectorioResponse } from '@/interfaces/services/directorio.interface';

const RESOURCE_PATH = '/directorio';

export class DirectorioService {
	static async getEntries() {
		try {
			const params = {
				'populate[0]': 'elementos_directorio',
			};

			const data = await strapiFetch<DirectorioResponse>(
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
