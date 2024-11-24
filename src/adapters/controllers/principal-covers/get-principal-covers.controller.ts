import {
	IPrincipalCoversPresenter,
	PrincipalCoversPresenterResp,
} from '@/adapters/presenters/principal-covers/principal-covers.presenter';
import { IGetPrincipalCoversUseCase } from '@/application/use-cases/principal-covers/get-principal-covers.use-case';

export interface IPrincipalCoversController {
	getAll(): Promise<PrincipalCoversPresenterResp[]>;
}

export class PrincipalCoversController implements IPrincipalCoversController {
	constructor(
		private readonly principalCoversUseCase: IGetPrincipalCoversUseCase,
		private readonly principalCoversPresenter: IPrincipalCoversPresenter
	) {}

	async getAll(): Promise<PrincipalCoversPresenterResp[]> {
		const covers = await this.principalCoversUseCase.execute();
		return this.principalCoversPresenter.toUi(covers);
	}
}
