import { PrincipalCover } from '@/enterprise/entities/models/principal-cover';

export interface IPrincipalCoversRepository {
	getPrincipalCovers(): Promise<PrincipalCover[] | null>;
}
