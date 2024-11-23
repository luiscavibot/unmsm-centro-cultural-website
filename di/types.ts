import { IPrincipalCoversPresenter } from '@/adapters/presenters/principal-covers/principal-covers.presenter';
import { IGetPrincipalCoversUseCase } from '@/application/use-cases/principal-covers/get-principal-covers.use-case';
import { IPrincipalCoversRepository } from '@/enterprise/interfaces/repositories/principal-covers.repository.interface';

export const DI_SYMBOLS = {
	//Repositories
	IPrincipalCoversRepository: Symbol.for('IPrincipalCoversRepository'),
	//Use cases
	IGetPrincipalCoversUseCase: Symbol.for('IGetPrincipalCoversUseCase'),
	//Presenters
	IPrincipalCoversPresenter: Symbol.for('IPrincipalCoversPresenter'),
};

export interface DI_RETURN_TYPES {
	//Repositories
	IPrincipalCoversRepository: IPrincipalCoversRepository;
	//Use cases
	IGetPrincipalCoversUseCase: IGetPrincipalCoversUseCase;
	//Presenters
	IPrincipalCoversPresenter: IPrincipalCoversPresenter;
}
