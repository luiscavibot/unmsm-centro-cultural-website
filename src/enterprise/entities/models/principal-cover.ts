import { z } from 'zod';

export const PrincipalCoverSchema = z.object({
	id: z.string(),
	url: z.string(),
	alt: z.string(),
});

export type PrincipalCover = z.infer<typeof PrincipalCoverSchema>;
