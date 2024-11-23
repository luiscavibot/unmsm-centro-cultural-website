import { IPrincipalCoversRepository } from '@/enterprise/interfaces/repositories/principal-covers.repository.interface';
import { PrincipalCover } from '@/enterprise/entities/models/principal-cover';

export interface IGetPrincipalCoversUseCase {
	execute(): Promise<PrincipalCover[] | null>;
}

export class GetPrincipalCoversUseCase implements IGetPrincipalCoversUseCase {
	constructor(
		private principalCoversRepository: IPrincipalCoversRepository
	) {}

	async execute() {
		return this.principalCoversRepository.getPrincipalCovers();
	}
}
