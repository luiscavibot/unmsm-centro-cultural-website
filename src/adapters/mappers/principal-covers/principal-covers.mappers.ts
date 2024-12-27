import { PrincipalCover } from '@/enterprise/entities/models/principal-cover';
import { StrapiPrincipalCoversResponse } from '../../../infrastructure/interfaces/strapi-principal-covers-response.interface';

export interface IPrincipalCoversMapper {
	toDomain(response: any): PrincipalCover[];
}

export class PrincipalCoversMapperToStrapi implements IPrincipalCoversMapper {
	toDomain(response: StrapiPrincipalCoversResponse): PrincipalCover[] {
		return response.data.images.map((cover) => ({
			id: cover.id,
			url: cover.url,
			alt: cover.alternativeText,
		}));
	}
}
