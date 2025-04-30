import CourseAndWorkshopContent from './course-and-workshop-content'
import { getCurso } from '@/ui/lib/get-curso'
import type { Metadata } from 'next'


export async function generateMetadata({ params }: { params: Promise<{ curso: string }> }): Promise<Metadata> {
	const { curso } = await params;
	const [cursoData] = await getCurso(curso)
  
	return {
		title: cursoData?.titulo ? `${cursoData.titulo} | ${cursoData.tipo ? cursoData.tipo : 'Cursos y talleres'} | CCSM` : 'Curso o taller no encontrado',
		description: cursoData?.resumen?.slice(0, 80) ?? 'Contenido no disponible',
		openGraph: {
			title: cursoData?.titulo ? `${cursoData.titulo} | ${cursoData.tipo ? cursoData.tipo : 'Cursos y talleres'} | CCSM` : 'Curso o taller no encontrado',
			description: cursoData?.resumen?.slice(0, 80) ?? 'Contenido no disponible',
			type: 'article',
			images: [
				{
					url: `cursos-y-talleres/${curso}/opengraph-image`,
					width: 800,
					height: 420,
				}
			],
		},
	}
}

export default async function Page({
	params,
}: {
	params: Promise<{ curso: string }>
}) {
const { curso } = await params
const cursoData = await getCurso(curso);

return (
	<CourseAndWorkshopContent curso={curso} serverData={cursoData} />
);
}