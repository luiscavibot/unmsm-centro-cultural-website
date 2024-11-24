import { StrapiPrincipalCoversResponse } from '@/adapters/mappers/principal-covers/strapi-principal-covers-response.interface';
import { IPrincipalCoversRepository } from '@/enterprise/interfaces/repositories/principal-covers.repository.interface';
import axios from 'axios';
import { IPrincipalCoversMapper } from '@/adapters/mappers/principal-covers/principal-covers.mappers';

export class PrincipalCoversRepositoryFromStrapi
	implements IPrincipalCoversRepository
{
	constructor(
		private readonly principalCoversMapper: IPrincipalCoversMapper
	) {}

	async getPrincipalCovers() {
		try {
			const response = await axios.get<StrapiPrincipalCoversResponse>(
				'https://biologiaadmin2.unmsm.edu.pe/api/imagen-portada?populate[imagenes][fields][0]=url&populate[imagenes][fields][1]=alternativeText'
			);
			return this.principalCoversMapper.toDomain(response.data);
		} catch (error) {
			console.log(error);
			return null;
		}
	}
}
