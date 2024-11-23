import { IPrincipalCoversPresenter } from '@/adapters/presenters/principal-covers/principal-covers.presenter';
import { StrapiPrincipalCoversResponse } from '@/adapters/presenters/principal-covers/strapi-principal-covers.interface';
import { IPrincipalCoversRepository } from '@/enterprise/interfaces/repositories/principal-covers.repository.interface';
import axios from 'axios';

export class PrincipalCoversRepositoryFromStrapi
	implements IPrincipalCoversRepository
{
	constructor(
		private readonly principalCoversPresenter: IPrincipalCoversPresenter
	) {}

	async getPrincipalCovers() {
		try {
			const response = await axios.get<StrapiPrincipalCoversResponse>(
				'https://biologiaadmin2.unmsm.edu.pe/api/imagen-portada?populate[imagenes][fields][0]=url&populate[imagenes][fields][1]=alternativeText'
			);
			return this.principalCoversPresenter.convert(response.data);
		} catch (error) {
			console.log(error);
			return null;
		}
	}
}
