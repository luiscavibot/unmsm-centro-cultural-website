import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import CursosYTalleresPage from './courses-list-content';
import { CursosYTalleresService } from '@/services/cursos-y-talleres.service';

export const revalidate = 60;

export default async function Page() {

const queryClient = new QueryClient();
try {
	// prefetch con validación adicional
	// se replica en CursosYTalleresPage, pero al tener el mismo queryKey, no se vuelve a hacer fetch
	await queryClient.prefetchQuery({
		queryKey: ['list-courses-and-workshops'],
		queryFn: () => CursosYTalleresService.getEntriesToHome(),
	});
} catch (error) {
	console.error("Error en prefetch:", error);
	return <div>Error al cargar los datos de los cursos y talleres</div>;
}

return (
	<HydrationBoundary state={dehydrate(queryClient)}>
		<CursosYTalleresPage />
	</HydrationBoundary>
);
}