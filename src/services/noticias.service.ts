import { strapiFetch } from '@/data-source/strapi-back-instance';
import { NoticiasResponse } from '@/interfaces/services/noticias.interface';

const RESOURCE_PATH = '/noticias';

export class NoticiasService {
	static async getEntriesToHome() {
		try {
			const params = {
				'fields': 'titulo,slug,resumen,fechaPublicacion',
				'populate': 'imagen',
				'sort': 'fechaPublicacion:desc',
			};

			const data = await strapiFetch<NoticiasResponse>(
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
				'populate[0]': 'imagen',
			};

			const data = await strapiFetch<NoticiasResponse>(
				RESOURCE_PATH,
				{ params }
			);
			return data.data;
		} catch (error) {
			console.error('Error al obtener los datos:', error);
			throw error;
		}
	}
	static async getRecentEntries(excludedSlug: string) {
		try {
			const params = {
				'filters[slug][$ne]': excludedSlug,
				'sort': 'fechaPublicacion:desc',
				'pagination[pageSize]': 3,
				'fields': 'titulo,slug,fechaPublicacion',
			};

			const data = await strapiFetch<NoticiasResponse>(
				RESOURCE_PATH,
				{ params }
			);
			return data.data;
		} catch (error) {
			console.error('Error al obtener las noticias recientes:', error);
			throw error;
		}
	}
	static async getListEntries(page = 1, pageSize = 5) {
			try {
				const params = {
					'fields': 'titulo,slug,resumen,fechaPublicacion',
					'populate': 'imagen',
					'sort': 'fechaPublicacion:desc',
					'pagination[page]': page,
					'pagination[pageSize]': pageSize,
					'pagination[withCount]': true,
				};
	
				const data = await strapiFetch<NoticiasResponse>(
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
