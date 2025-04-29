import NewsContent from './news-content'
import { getNoticia } from '@/ui/lib/get-noticias'

export async function generateMetadata({ params }: { params: Promise<{ noticia: string }> }) {
	const { noticia } = await params;
	const [noticiaData] = await getNoticia(noticia)
  
	return {
		title: noticiaData?.titulo ? `${noticiaData.titulo} | Noticias | CCSM` : 'Noticia no encontrada',
		description: noticiaData?.resumen?.slice(0, 160) ?? 'Contenido no disponible',
		openGraph: {
			title: noticiaData?.titulo ? `${noticiaData.titulo} | Noticias | CCSM` : 'Noticia no encontrada',
			description: noticiaData?.resumen?.slice(0, 160) ?? 'Contenido no disponible',
			type: 'article',
			images: [
				{
					url: `noticias/${noticia}/opengraph-image`,
					width: 800,
					height: 420,
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