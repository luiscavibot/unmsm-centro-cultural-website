'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Badge from '@/ui/components/atoms/badge';
import TertiaryButton from '@/ui/components/atoms/buttons/tertiary-button';
import ClockIcon from '@/ui/components/atoms/icons/clock-icon';
import DateRangeIcon from '@/ui/components/atoms/icons/date-range-icon';
import OutlinePlaceIcon from '@/ui/components/atoms/icons/outilne-place-icon';
import Title from '@/ui/components/atoms/title';
import UpcomingEventsCard from '@/ui/components/molecules/upcoming-events-card';
import Layout from '@/ui/components/organisms/shared/layout';
import { AgendaCulturalService } from '@/services/agenda-cultural.service';
import BlockRendererClient from '@/ui/components/molecules/block-renderer-client';
import SkeletonBlog from '@/ui/components/atoms/skeleton/blog';
import { AgendaCultural } from '@/interfaces/services/agenda-cultural.interface';
// import PrimaryButton from '@/ui/components/atoms/buttons/primary-button';

export default function EventContent({
	evento,
	serverData,
}: {
	evento: string;
	serverData: AgendaCultural[];
}) {
	const {
		data: eventData = [],
		isLoading: isEventLoading,
		error: eventError,
	} = useQuery<AgendaCultural[]>({
		queryKey: ['event', evento],
		queryFn: () => AgendaCulturalService.getEntryBySlug(evento),
		initialData: serverData,
	});

	const {
		data: upcomingEvents = [],
		isLoading: isUpcomingLoading,
		error: upcomingError,
	} = useQuery({
		queryKey: ['upcoming-events'],
		queryFn: () => AgendaCulturalService.getUpcomingEvents(evento),
	});

	if (!evento) {
		return (
			<Layout>
				<div className="px-4 lg:px-[104px] bg-white pb-[80px] md:pb-[104px]">
					<p>Oops! No se encontró el evento solicitado.</p>
				</div>
			</Layout>
		);
	}
	if (isEventLoading || isUpcomingLoading) {
		return <SkeletonBlog />;
	}
	if (eventError) {
		return (
			<Layout>
				<div className="px-4 lg:px-[104px] bg-white pb-[80px] md:pb-[104px]">
					<p>Error cargando los datos del evento.</p>
				</div>
			</Layout>
		);
	}
	if (upcomingError) {
		return (
			<Layout>
				<div className="px-4 lg:px-[104px] bg-white pb-[80px] md:pb-[104px]">
					<p>Error cargando los eventos próximos.</p>
				</div>
			</Layout>
		);
	}
	if (!eventData || eventData.length === 0) {
		return (
			<Layout>
				<div className="px-4 lg:px-[104px] bg-white pb-[80px] md:pb-[104px]">
					<p>Evento no encontrado.</p>
				</div>
			</Layout>
		);
	}

	const event = eventData[0];

	return (
		<Layout
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
								{event.dateString ? (
									<time
										className="block pl-5 font-medium leading-[21px] text-sm"
										dateTime={event.dateString || ''}
									>
										{event.dateString}
									</time>
								) : (
									<div className="ml-5 h-[1px] relative top-2 w-10 border-b-[1px]"></div>
								)}
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
								{event.hourString ? (
									<time
										className="block pl-5 font-medium leading-[21px] text-sm"
										dateTime={event.hourString}
									>
										{event.hourString}
									</time>
								) : (
									<div className="ml-5 h-[1px] relative top-2 w-10 border-b-[1px]"></div>
								)}
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
					{upcomingEvents?.length > 0 && upcomingEvents && (
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
								{upcomingEvents
									.slice(-3)
									.map(
										(
											event: AgendaCultural,
											index: number
										) => (
											<UpcomingEventsCard
												key={index}
												slug={event.slug}
												title={event.title}
												mode={event.mode}
												place={event.place}
												organizer={event.organizer}
												dateString={event.dateString}
												hourString={event.hourString}
											/>
										)
									)}
							</div>
						</div>
					)}
				</div>
			</div>
		</Layout>
	);
}
