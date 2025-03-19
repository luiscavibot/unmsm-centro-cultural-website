'use client';

import Badge from '@/ui/components/atoms/badge';
import PrimaryButton from '@/ui/components/atoms/buttons/primary-button';
import TertiaryButton from '@/ui/components/atoms/buttons/tertiary-button';
import ClockIcon from '@/ui/components/atoms/icons/clock-icon';
import DateRangeIcon from '@/ui/components/atoms/icons/date-range-icon';
import OutlinePlaceIcon from '@/ui/components/atoms/icons/outilne-place-icon';
import Title from '@/ui/components/atoms/title';
import UpcomingEventsCard from '@/ui/components/molecules/upcoming-events-card';
import Layout from '@/ui/components/organisms/shared/layout';
import useScrollOnLoad from '@/ui/hooks/use-scroll-on-load';
import eventsDataToHome from '@/ui/mocks/events-data-to-home';
import React from 'react';

const breadcrumbItems = [
	{
		title: 'Inicio',
		path: '/',
	},
	{
		title: 'Agenda cultural',
		path: '/agenda-cultural',
	},
	{
		title: 'Evento',
		path: '/agenda-cultural/evento',
	},
];

export default function Evento() {
	useScrollOnLoad();
	return (
		<Layout
			portadaImage="https://ccsm.unmsm.edu.pe/ccsm/agenda_banner_8a74d62f5c.jpg"
			breadcrumbItems={breadcrumbItems}
		>
			<div className="px-4 lg:px-[104px] bg-white pb-[104px]">
				<div className="container">
					<div className="max-w-[814px] mx-auto mb-[80px]">
						<div className="flex justify-center">
							<Badge label="Virtual" size="small" />
						</div>
						<Title className="text-center mb-16">
							Letras breves: Canción popular costeña en el norte
							del Perú
						</Title>
						<div className="flex gap-x-1 justify-center mb-14">
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
									dateTime="2024-10-30"
								>
									30 de octubre de 2024
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
								<time
									className="block pl-5 font-medium leading-[21px] text-sm"
									dateTime="10:00:00"
								>
									10 a. m.
								</time>
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
									Centro Cultural de San Marcos
								</p>
							</div>
						</div>
						<div className="h-px max-w-[203px] mx-auto bg-dark-white-3 mb-14"></div>
						<div className="space-y-4">
							<p>
								La Fundación de San Marcos (FSM) en colaboración
								del Centro Cultural de San Marcos (CCSM) y el
								Museo de Arte de San Marcos (MASM) te invitan al
								taller virtual «Museografía participativa:
								Diseño desde la comunidad para la comunidad»,
							</p>
							<p>
								Aprende cómo diseñar exposiciones con enfoque
								comunitario en tres fases: conceptos claves,
								herramientas metodológicas y aplicación
								práctica. Todo en un espacio de aprendizaje
								interactivo, con la participación de un
								especialista con amplia experiencia en el
								trabajo participativo en museos ¡No importa
								dónde estés, la virtualidad te conecta con esta
								experiencia única!
							</p>
							<p>
								¡Inscríbete y transforma tu visión museográfica!
							</p>
						</div>
						<PrimaryButton
							label="Registrarme"
							theme="light"
							type="external-link"
							href="#"
							className="mt-6"
						/>
					</div>
					<div className="mt-[110px]">
						<div className="flex justify-between items-center mb-[30px]">
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
						<div className="grid grid-cols-3 gap-6">
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
