// import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import EventContent from './event-content';
import { AgendaCulturalService } from '@/services/agenda-cultural.service';

export const revalidate = 60;

export default async function Page({
	params,
}: {
	params: Promise<{ evento: string }>;
}) {
	const { evento } = await params;

	const queryClient = new QueryClient();
	try {
		// prefetch con validación adicional
		// se replica en EventContent, pero al tener el mismo queryKey, no se vuelve a hacer fetch
		await queryClient.prefetchQuery({
			queryKey: ['event', evento],
			queryFn: () => AgendaCulturalService.getEntryBySlug(evento),
		});
		await queryClient.prefetchQuery({
			queryKey: ['upcoming-events'],
			queryFn: () => AgendaCulturalService.getUpcomingEvents(evento),
		});
	} catch (error) {
		console.error('Error en prefetch:', error);
		return <div>Error al cargar los datos del evento</div>;
	}

	// return <EventoLoading />;

	return <EventContent evento={evento} />;
}
