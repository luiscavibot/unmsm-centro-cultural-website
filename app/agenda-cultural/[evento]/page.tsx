'use client';

import React from 'react';
import Badge from '@/ui/components/atoms/badge';
// import PrimaryButton from '@/ui/components/atoms/buttons/primary-button';
import TertiaryButton from '@/ui/components/atoms/buttons/tertiary-button';
import ClockIcon from '@/ui/components/atoms/icons/clock-icon';
import DateRangeIcon from '@/ui/components/atoms/icons/date-range-icon';
import OutlinePlaceIcon from '@/ui/components/atoms/icons/outilne-place-icon';
import Title from '@/ui/components/atoms/title';
import UpcomingEventsCard from '@/ui/components/molecules/upcoming-events-card';
import Layout from '@/ui/components/organisms/shared/layout';
import useScrollOnLoad from '@/ui/hooks/use-scroll-on-load';
import eventsDataToHome from '@/ui/mocks/events-data-to-home';
import { useQuery } from '@tanstack/react-query';
import { AgendaCulturalService } from '@/services/agenda-cultural.service';
import { useParams } from 'next/navigation';
import { useCustomDates } from '@/ui/hooks/use-custom-date';
import BlockRendererClient from '@/ui/components/molecules/block-renderer-client';

export default function Page() {
	useScrollOnLoad();

	const { evento } = useParams();
	const eventSlug = Array.isArray(evento) ? evento[0] : evento;

	// Llamar a useQuery siempre, pero controlar su ejecución con `enabled`
	const { data: eventData, isLoading, error } = useQuery({
		queryKey: ['event', eventSlug],
		queryFn: () => (eventSlug ? AgendaCulturalService.getEntryBySlug(eventSlug) : Promise.resolve(null)),
		enabled: !!eventSlug, // Solo ejecuta la consulta si `eventSlug` es válido
	});

	// Llamar a useCustomDates de forma incondicional
	const { daysSummary, singleDate } = useCustomDates(
		eventData?.[0]?.exact_dates || [],
		eventData?.[0]?.date_ranges || []
	);

	// Manejar los estados de carga y error después de los hooks
	if (!evento) {
		return <p>Error: Slug no encontrado.</p>;
	}

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (error || !eventData || eventData.length === 0) {
		return <p>Error loading event data or event not found.</p>;
	}

	const event = eventData[0];

	return (
		<Layout
			portadaImage={event.image.url}
			breadcrumbItems={[
				{ title: 'Inicio', path: '/' },
				{ title: 'Agenda cultural', path: '/agenda-cultural' },
				{ title: event.title, path: `/agenda-cultural/${evento}` },
			]}
		>
			<div className="px-4 lg:px-[104px] bg-white pb-[80px] md:pb-[104px]">
				<div className="container">
					<div className="max-w-[814px] mx-auto mb-[80px]">
						<div className="flex justify-center">
							<Badge
								className="max-md:mb-[18px]"
								label={event.mode}
								size="small"
							/>
						</div>
						<Title className="text-center mb-10 md:mb-16">
							{event.title}
						</Title>
						<div className="flex flex-col md:flex-row gap-y-6 gap-x-1 justify-center mb-14">
							<div className="min-w-[214px]">
								<div className="flex gap-1 items-center">
									<DateRangeIcon
										className="shrink-0"
										ariaLabel="Fecha"
										color="dark"
									/>
									<span className="leading-[24px] font-bold">
										Fecha
									</span>
								</div>
								<time
									className="block pl-5 font-medium leading-[21px] text-sm"
									dateTime={daysSummary || singleDate?.day}
								>
									{daysSummary || singleDate?.day}
								</time>
							</div>
							
							<div className="min-w-[155px]">
								<div className="flex gap-1 items-center">
									<ClockIcon
										className="shrink-0"
										ariaLabel="Hora"
										color="dark"
									/>
									<span className="leading-[24px] font-bold">
										Horario
									</span>
								</div>
								{singleDate?.time ? (
									<time
										className="block pl-5 font-medium leading-[21px] text-sm"
										dateTime={singleDate?.time}
									>
										{singleDate?.time}
									</time>
								)
								:
								(
									<div className="ml-5 h-[1px] relative top-2 w-10 border-b-[1px]"></div>
								)
							}
							</div>
							<div className="min-w-[208px]">
								<div className="flex gap-1 items-center">
									<OutlinePlaceIcon
										className="shrink-0"
										ariaLabel="Lugar"
										color="dark"
									/>
									<span className="leading-[24px] font-bold">
										Lugar
									</span>
								</div>
								<p className="pl-5 font-medium leading-[21px] text-sm">
									{event.place}
								</p>
							</div>
						</div>
						<div className="h-px max-w-[203px] mx-auto bg-dark-white-3 mb-14"></div>
						<BlockRendererClient content={event.description} />
						{/* <PrimaryButton
							label="Registrarme"
							theme="light"
							type="external-link"
							href="#"
							className="mt-6"
						/> */}
					</div>
					<div className="mt-20 md:mt-[110px]">
						<div className="flex justify-between items-center mb-5 md:mb-[30px]">
							<h2 className="text-2xl font-bold leading-[36px] text-dark-blue-2">
								Eventos próximos
							</h2>
							<TertiaryButton
								label="Ver todos"
								theme="light"
								type="internal-link"
								href="/agenda-cultural"
							/>
						</div>
						<div className="grid md:grid-cols-3 gap-y-4 gap-x-6">
							{eventsDataToHome
								.slice(-3)
								.map((event: any, index: number) => (
									<UpcomingEventsCard
										key={index}
										slug={event.slug}
										title={event.title}
										date={event.date}
										dateString={event.dateString}
										time={event.time}
										timeString={event.timeString}
										location={event.location}
										type={event.type}
										dependency={event.dependency}
									/>
								))}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
