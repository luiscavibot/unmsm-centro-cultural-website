import EventContent from './event-content';
import { getEvento } from '@/ui/lib/get-evento';
import type { Metadata } from 'next';

export async function generateMetadata({
	params,
}: {
	params: Promise<{ evento: string }>;
}): Promise<Metadata> {
	const { evento } = await params;
	const [eventoData] = await getEvento(evento);

	return {
		title: eventoData?.title
			? `${eventoData.title} | Agenda Cultural | CCSM`
			: 'Evento no encontrado',
		description:
			eventoData?.summary?.slice(0, 80) ?? 'Contenido no disponible',
		openGraph: {
			title: eventoData?.title
				? `${eventoData.title} | Agenda Cultural | CCSM`
				: 'Evento no encontrado',
			description:
				eventoData?.summary?.slice(0, 80) ?? 'Contenido no disponible',
			type: 'article',
			images: [
				{
					url: `agenda-cultural/${evento}/opengraph-image`,
					width: 800,
					height: 420,
				},
			],
		},
	};
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
