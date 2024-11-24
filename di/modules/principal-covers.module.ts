import { Container } from '@evyweb/ioctopus';
import { DI_SYMBOLS } from '../types';
import { PrincipalCoversRepositoryFromStrapi } from '@/infrastructure/repositories/principal-covers.repository';
import { GetPrincipalCoversUseCase } from '@/application/use-cases/principal-covers/get-principal-covers.use-case';
import { PrincipalCoversController } from '@/adapters/controllers/principal-covers/get-principal-covers.controller';
import { PrincipalCoversPresenter } from '@/adapters/presenters/principal-covers/principal-covers.presenter';
import { PrincipalCoversMapperToStrapi } from '@/adapters/mappers/principal-covers/principal-covers.mappers';

export function registerPrincipalCoversModule(container: Container) {
	//Repositories
	container
		.bind(DI_SYMBOLS.IPrincipalCoversRepository)
		.toClass(PrincipalCoversRepositoryFromStrapi, [
			DI_SYMBOLS.IPrincipalCoversMapper,
		]);

	//Use cases
	container
		.bind(DI_SYMBOLS.IGetPrincipalCoversUseCase)
		.toClass(GetPrincipalCoversUseCase, [
			DI_SYMBOLS.IPrincipalCoversRepository,
		]);

	//Controllers
	container
		.bind(DI_SYMBOLS.IPrincipalCoversController)
		.toClass(PrincipalCoversController, [
			DI_SYMBOLS.IGetPrincipalCoversUseCase,
			DI_SYMBOLS.IPrincipalCoversPresenter,
		]);

	//Presenters
	container
		.bind(DI_SYMBOLS.IPrincipalCoversPresenter)
		.toClass(PrincipalCoversPresenter);

	//Mappers
	container
		.bind(DI_SYMBOLS.IPrincipalCoversMapper)
		.toClass(PrincipalCoversMapperToStrapi);
}
