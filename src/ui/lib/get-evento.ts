import { AgendaCultural } from '@/interfaces/services/agenda-cultural.interface';

import { cache } from 'react'
import { AgendaCulturalService } from '@/services/agenda-cultural.service';

export const getEvento = cache(async (slug: string): Promise<AgendaCultural[]> => {
	const evento = await AgendaCulturalService.getEntryBySlug(slug);
	return evento;
});