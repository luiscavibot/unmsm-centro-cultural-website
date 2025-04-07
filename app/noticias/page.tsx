import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import NoticiasPage from './news-list-content';
import { NoticiasService } from '@/services/noticias.service';

export const revalidate = 60;

export default async function Page() {

const queryClient = new QueryClient();
try {
	// prefetch con validación adicional
	// se replica en NewsContent, pero al tener el mismo queryKey, no se vuelve a hacer fetch
	await queryClient.prefetchQuery({
		queryKey: ['list-news'],
		queryFn: () => NoticiasService.getEntriesToHome(),
	});
} catch (error) {
	console.error("Error en prefetch:", error);
	return <div>Error al cargar los datos de la noticia</div>;
}

return (
	<HydrationBoundary state={dehydrate(queryClient)}>
		<NoticiasPage />
	</HydrationBoundary>
);
}