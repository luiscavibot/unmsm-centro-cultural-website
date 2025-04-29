import { cache } from 'react'
import { NoticiasService } from '@/services/noticias.service'
import { Noticias } from '@/interfaces/services/noticias.interface';

export const getNoticia = cache(async (slug: string): Promise<Noticias[]> => {
	const noticia = await NoticiasService.getEntryBySlug(slug);
	return noticia;
});