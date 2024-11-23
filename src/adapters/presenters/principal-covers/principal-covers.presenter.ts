import { PrincipalCover } from '@/enterprise/entities/models/principal-cover';
import { StrapiPrincipalCoversResponse } from './strapi-principal-covers.interface';

export interface IPrincipalCoversPresenter {
	convert(response: any): PrincipalCover[];
}

export class PrincipalCoversPresenterToStrapi
	implements IPrincipalCoversPresenter
{
	convert(response: StrapiPrincipalCoversResponse): PrincipalCover[] {
		return response.data.attributes.imagenes.data.map((cover) => ({
			id: cover.id,
			url: cover.attributes.url,
			alt: cover.attributes.alternativeText,
		}));
	}
}
