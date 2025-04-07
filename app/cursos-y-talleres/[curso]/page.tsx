import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import CourseAndWorkshopContent from './course-and-workshop-content';
import { CursosYTalleresService } from '@/services/cursos-y-talleres.service';

export const revalidate = 60;

export default async function Page({
	params,
}: {
	params: Promise<{ curso: string }>
}) {
const { curso } = await params

const queryClient = new QueryClient();
try {
	// prefetch con validación adicional
	// se replica en CourseAndWorkshopContent, pero al tener el mismo queryKey, no se vuelve a hacer fetch
	await queryClient.prefetchQuery({
		queryKey: ['courseAndWorkshop', curso],
		queryFn: () => CursosYTalleresService.getEntryBySlug(curso),
	});
} catch (error) {
	console.error("Error en prefetch:", error);
	return <div>Error al cargar los datos del curso o taller</div>;
}

return (
	<HydrationBoundary state={dehydrate(queryClient)}>
		<CourseAndWorkshopContent curso={curso} />
	</HydrationBoundary>
);
}