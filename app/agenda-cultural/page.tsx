import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import CulturalAgendaPage from './agenda-list-content';
import { AgendaCulturalService } from '@/services/agenda-cultural.service';

export const revalidate = 60;

export default async function Page() {

const queryClient = new QueryClient();
try {
	// prefetch con validación adicional
	// se replica en CulturalAgendaPage, pero al tener el mismo queryKey, no se vuelve a hacer fetch
	await queryClient.prefetchQuery({
		queryKey: ['list-agenda'],
		queryFn: () => AgendaCulturalService.getEntriesToHome(),
	});
} catch (error) {
	console.error("Error en prefetch:", error);
	return <div>Error al cargar los datos de la agenda</div>;
}

return (
	<HydrationBoundary state={dehydrate(queryClient)}>
		<CulturalAgendaPage />
	</HydrationBoundary>
);
}