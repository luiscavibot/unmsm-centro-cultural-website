import CourseAndWorkshopContent from './course-and-workshop-content';
import { CursosYTalleres } from '@/interfaces/services/cursos-y-talleres.interface';

import { cache } from 'react'
import { CursosYTalleresService } from '@/services/cursos-y-talleres.service';

const getCurso = cache(async (slug: string): Promise<CursosYTalleres[]> => {
	const curso = await CursosYTalleresService.getEntryBySlug(slug);
	return curso;
});

export async function generateMetadata({ params }: { params: Promise<{ curso: string }> }) {
	const { curso } = await params;
	const [cursoData] = await getCurso(curso)
  
	return {
		title: cursoData?.titulo ? `${cursoData.titulo} | ${cursoData.tipo ? cursoData.tipo : 'Cursos y talleres'} | CCSM` : 'Curso o taller no encontrado',
		description: cursoData?.resumen?.slice(0, 160) ?? 'Contenido no disponible',
		openGraph: {
			title: cursoData?.titulo ? `${cursoData.titulo} | ${cursoData.tipo ? cursoData.tipo : 'Cursos y talleres'} | CCSM` : 'Curso o taller no encontrado',
			description: cursoData?.resumen?.slice(0, 160) ?? 'Contenido no disponible',
			type: 'article',
			images: [
				{
					url: cursoData?.imagen?.url,
					width: cursoData?.imagen?.width,
					height: cursoData?.imagen?.height,
				}
			]
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