import EventContent from './event-content';
import { AgendaCultural } from '@/interfaces/services/agenda-cultural.interface';

import { cache } from 'react'
import { AgendaCulturalService } from '@/services/agenda-cultural.service';

const getEvento = cache(async (slug: string): Promise<AgendaCultural[]> => {
	const evento = await AgendaCulturalService.getEntryBySlug(slug);
	return evento;
});

export async function generateMetadata({ params }: { params: Promise<{ evento: string }> }) {
	const { evento } = await params;
	const [eventoData] = await getEvento(evento)
  
	return {
		title: eventoData?.title ? `${eventoData.title} | Agenda Cultural | CCSM` : 'Evento no encontrado',
		description: eventoData?.summary?.slice(0, 160) ?? 'Contenido no disponible',
		openGraph: {
			title: eventoData?.title ? `${eventoData.title} | Agenda Cultural | CCSM` : 'Evento no encontrado',
			description: eventoData?.summary?.slice(0, 160) ?? 'Contenido no disponible',
			type: 'article',
			images: [
				{
					url: eventoData?.image?.url,
					width: eventoData?.image?.width,
					height: eventoData?.image?.height,
				}
			]
		},
	}
}

export default async function Page({
	params,
}: {
	params: Promise<{ evento: string }>;
}) {
	const { evento } = await params;
	const eventoData = await getEvento(evento);

	return <EventContent evento={evento} serverData={eventoData} />;
}