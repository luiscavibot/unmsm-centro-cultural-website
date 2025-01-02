import { PrincipalCover } from '@/enterprise/entities/models/principal-cover';
import { PrincipalCoverSchema } from '@/enterprise/entities/models/principal-cover';
import { z } from 'zod';

export const PrincipalCoversPresenterRespSchema = PrincipalCoverSchema.extend({
	id: z.string(),
});

export type PrincipalCoversPresenterResp = z.infer<
	typeof PrincipalCoversPresenterRespSchema
>;

export interface IPrincipalCoversPresenter {
	toUi(response: PrincipalCover[] | null): PrincipalCoversPresenterResp[];
}

export class PrincipalCoversPresenter implements IPrincipalCoversPresenter {
	constructor() {}
	toUi(response: PrincipalCover[] | null): PrincipalCoversPresenterResp[] {
		if (!response) return [];
		return response.map((cover: PrincipalCover) => {
			return {
				id: cover.id.toString(),
				url: cover.url,
				alt: cover.alt,
			};
		});
	}
}
