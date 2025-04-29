import NewsContent from './news-content';
import { Noticias } from '@/interfaces/services/noticias.interface';

import { cache } from 'react'
import { NoticiasService } from '@/services/noticias.service'

const getNoticia = cache(async (slug: string): Promise<Noticias[]> => {
	const noticia = await NoticiasService.getEntryBySlug(slug);
	return noticia;
});

export async function generateMetadata({ params }: { params: Promise<{ noticia: string }> }) {
	const { noticia } = await params;
	const [noticiaData] = await getNoticia(noticia)
  
	return {
		title: noticiaData?.titulo ? `${noticiaData.titulo} | CCSM` : 'Noticia no encontrada',
		description: noticiaData?.resumen?.slice(0, 160) ?? 'Contenido no disponible',
		openGraph: {
			title: noticiaData?.titulo ? `${noticiaData.titulo} | CCSM` : 'Noticia no encontrada',
			description: noticiaData?.resumen?.slice(0, 160) ?? 'Contenido no disponible',
			type: 'article',
			images: [
				{
					url: noticiaData?.imagen?.url,
					width: noticiaData?.imagen?.width,
					height: noticiaData?.imagen?.height,
				}
			]
		},
	}
}

export default async function Page({
	params,
}: {
	params: Promise<{ noticia: string }>
}) {
	const { noticia } = await params;
	const noticiaData = await getNoticia(noticia);

	return (
		<NewsContent noticia={noticia} serverData={noticiaData} />
	);
}