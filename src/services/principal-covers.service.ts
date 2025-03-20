import { strapiFetch } from '@/data-source/strapi-back-instance';
import { PrincipalCoversResponse } from '@/interfaces/services/principal-covers.interface';

const RESOURCE_PATH = '/principal-cover';

export class PrincipalCoversService {
	static async getAll() {
		try {
			const params = {
				populate: 'images',
			};

			const data = await strapiFetch<PrincipalCoversResponse>(
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
