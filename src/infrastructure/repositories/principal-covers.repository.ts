import { StrapiPrincipalCoversResponse } from '@/infrastructure/interfaces/strapi-principal-covers-response.interface';
import { IPrincipalCoversRepository } from '@/enterprise/interfaces/repositories/principal-covers.repository.interface';
import { IPrincipalCoversMapper } from '@/adapters/mappers/principal-covers/principal-covers.mappers';
import { strapiBackInstance } from '../data-source/strapi-back-instance';

export class PrincipalCoversRepositoryFromStrapi
	implements IPrincipalCoversRepository
{
	constructor(
		private readonly principalCoversMapper: IPrincipalCoversMapper
	) {}

	async getPrincipalCovers() {
		try {
			const params = new URLSearchParams();
			params.append('populate', 'images');
			const response =
				await strapiBackInstance.get<StrapiPrincipalCoversResponse>(
					'/principal-cover',
					{ params }
				);
			return this.principalCoversMapper.toDomain(response.data);
		} catch (error) {
			console.log(error);
			return null;
		}
	}
}
