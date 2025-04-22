import { strapiFetch } from '@/data-source/strapi-back-instance';
import { CursosYTalleresResponse } from '@/interfaces/services/cursos-y-talleres.interface';

const RESOURCE_PATH = '/cursos-y-talleres';

export class CursosYTalleresService {
	static async getEntriesToHome() {
		try {
			const params = {
				'fields': 'titulo,slug,resumen,dependencia,tipo',
				'populate': 'imagen',
			};

			const data = await strapiFetch<CursosYTalleresResponse>(
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

			const data = await strapiFetch<CursosYTalleresResponse>(
				RESOURCE_PATH,
				{ params }
			);
			return data.data;
		} catch (error) {
			console.error('Error al obtener los datos:', error);
			throw error;
		}
	}
	static async getListEntries(page = 1, pageSize = 5) {
		try {
			const params = {
				'fields': 'titulo,slug,resumen,dependencia,tipo',
				'populate': 'imagen',
				'pagination[page]': page,
				'pagination[pageSize]': pageSize,
				'pagination[withCount]': true,
			};

			const data = await strapiFetch<CursosYTalleresResponse>(
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
