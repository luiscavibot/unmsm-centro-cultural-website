import { Container } from '@evyweb/ioctopus';
import { DI_SYMBOLS } from '../types';
import { PrincipalCoversRepositoryFromStrapi } from '@/infrastructure/repositories/principal-covers.repository';
import { GetPrincipalCoversUseCase } from '@/application/use-cases/principal-covers/get-principal-covers.use-case';
import { PrincipalCoversPresenterToStrapi } from '@/adapters/presenters/principal-covers/principal-covers.presenter';

export function registerPrincipalCoversModule(container: Container) {
	//Repositories
	container
		.bind(DI_SYMBOLS.IPrincipalCoversRepository)
		.toClass(PrincipalCoversRepositoryFromStrapi, [
			DI_SYMBOLS.IPrincipalCoversPresenter,
		]);

	//Use cases
	container
		.bind(DI_SYMBOLS.IGetPrincipalCoversUseCase)
		.toClass(GetPrincipalCoversUseCase, [
			DI_SYMBOLS.IPrincipalCoversRepository,
		]);

	//Presenters
	container
		.bind(DI_SYMBOLS.IPrincipalCoversPresenter)
		.toClass(PrincipalCoversPresenterToStrapi);
}
