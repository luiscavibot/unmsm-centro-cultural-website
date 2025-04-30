import { CursosYTalleres } from '@/interfaces/services/cursos-y-talleres.interface';

import { cache } from 'react'
import { CursosYTalleresService } from '@/services/cursos-y-talleres.service';

export const getCurso = cache(async (slug: string): Promise<CursosYTalleres[]> => {
	const curso = await CursosYTalleresService.getEntryBySlug(slug);
	return curso;
});