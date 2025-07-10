import { strapiFetch } from '@/data-source/strapi-back-instance';
import { CursosYTalleresResponse } from '@/interfaces/services/cursos-y-talleres.interface';

const RESOURCE_PATH = '/cursos-y-talleres';

export class CursosYTalleresService {
	static async getEntriesToHome() {
		try {
			const params = {
				fields: 'titulo,slug,resumen,dependencia,tipo',
				populate: 'imagen',
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
	static async getListEntries({
		page = 1,
		pageSize = 5,
		tipo = [] as string[],
		dependencia = [] as string[],
		modalidad = [] as string[],
		search = '',
	}) {
		try {
			const tipoFilters = tipo.map((org) => ({
				tipo: { $eq: org },
			}));
			const modalidadFilters = modalidad.map((m) => ({
				modalidad: { $eq: m },
			}));
			const dependenciaFilters = dependencia.map((dep) => ({
				dependencia: { $eq: dep },
			}));

			const andFilters: Record<string, any>[] = [];
			if (tipoFilters.length) {
				andFilters.push({ $or: tipoFilters });
			}
			if (modalidadFilters.length) {
				andFilters.push({ $or: modalidadFilters });
			}
			if (dependenciaFilters.length) {
				andFilters.push({ $or: dependenciaFilters });
			}
			if (search) {
				andFilters.push({
					$or: [
						{ titulo: { $contains: search } },
						{ resumen: { $contains: search } },
					],
				});
			}
			const params: Record<string, any> = {
				fields: 'titulo,slug,resumen,dependencia,tipo',
				populate: ['imagen'],
				pagination: { page, pageSize, withCount: true },
				sort: 'fechaInicio:desc',
				...(andFilters.length > 0 && { filters: { $and: andFilters } }),
			};

			const response = await strapiFetch<CursosYTalleresResponse>(
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
