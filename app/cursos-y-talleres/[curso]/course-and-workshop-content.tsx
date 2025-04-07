'use client';

import Badge from '@/ui/components/atoms/badge';
import { useQuery } from '@tanstack/react-query';
import ClassIcon from '@/ui/components/atoms/icons/class-icon';
import CalendarIcon from '@/ui/components/atoms/icons/calendar-icon';
import ClockIcon from '@/ui/components/atoms/icons/clock-icon';
import OutlinePlaceIcon from '@/ui/components/atoms/icons/outilne-place-icon';
import Title from '@/ui/components/atoms/title';
import React from 'react';
import Layout from '@/ui/components/organisms/shared/layout';
import { CursosYTalleresService } from '@/services/cursos-y-talleres.service';
import BlockRendererClient from '@/ui/components/molecules/block-renderer-client';
// import { formatFullDate } from '@/ui/helpers/format-full-date';
// import useScrollOnLoad from '@/ui/hooks/use-scroll-on-load';

export default function CourseAndWorkshopContent({ curso }: { curso: string }) {
	// useScrollOnLoad();

	// como lleva la misma queryKey en el prefetch, no se vuelve a hacer fetch
	const { data: coursesAndWorkshopsData, isLoading, error } = useQuery({
		queryKey: ['courseAndWorkshop', curso],
		queryFn: () => CursosYTalleresService.getEntryBySlug(curso),
	});
	  
	// const { daysSummary, singleDate } = getCustomDates(
	// 	courseAndWorkshopData?.[0]?.exact_dates || [],
	// 	courseAndWorkshopData?.[0]?.date_ranges || []
	// );
	
	if (!curso) return <p>Error: Slug no encontrado.</p>;
	if (isLoading) return <p>Loading...</p>;
	if (error || !coursesAndWorkshopsData || coursesAndWorkshopsData.length === 0) return <p>Error loading courseAndWorkshop data or courseAndWorkshop not found.</p>;
	
	const courseAndWorkshop = coursesAndWorkshopsData[0];

	const breadcrumbItems = [
		{
			title: 'Inicio',
			path: '/',
		},
		{
			title: 'Cursos y talleres',
			path: '/cursos-y-talleres',
		},
		{
			title: courseAndWorkshop.titulo,
			path: `/cursos-y-talleres/${courseAndWorkshop.slug}`,
		},
	];

	return (
		<Layout
			// portadaImage="https://ccsm.unmsm.edu.pe/ccsm/cursos_y_talleres_portada_4a6e473ea3.jpg"
			breadcrumbItems={breadcrumbItems}
		>
			<div className="px-4 lg:px-[104px] bg-white pb-[80px] md:pb-[104px]">
				<div className="container">
					<div className="max-w-[814px] mx-auto">
						<div className="flex justify-center">
							<Badge className="max-md:mb-[18px]" label="Taller" size="small" />
						</div>
						<Title className="text-center !mb-2">
							{courseAndWorkshop.titulo}
						</Title>
						{/* <div className="flex flex-row items-center justify-center gap-2 mb-14">
							<div className="p-4 text-green bg-light-green rounded-lg">
								<span className="font-bold">Inicio:</span> {formatFullDate(new Date(courseAndWorkshop.fechaInicio).toISOString())}
							</div>
						</div> */}
						<div className="flex flex-col md:flex-row gap-y-6 gap-x-1 justify-center mb-14">
							<div className="min-w-[235px]">
								<div className="flex gap-1 items-center">
									<ClassIcon
										className="shrink-0"
										ariaLabel="Clases"
										color="dark"
									/>
									<span className="leading-[24px] font-bold">
										Clases
									</span>
								</div>
								<p className="pl-5 font-medium leading-[21px] text-sm">
									{courseAndWorkshop.fechaClases}
								</p>
							</div>
							<div className="min-w-[228px]">
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
									{courseAndWorkshop.lugar}
								</p>
							</div>
							<div className="min-w-[170px]">
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
									{courseAndWorkshop.horarioClases}
								</time>
							</div>
							<div className="min-w-[215px]">
								<div className="flex gap-1 items-center">
									<CalendarIcon
										className="shrink-0"
										ariaLabel="Fecha"
										color="dark"
									/>
									<span className="leading-[24px] font-bold">
										Cierre de inscripciones
									</span>
								</div>
								{/* <time
									className="block pl-5 font-medium leading-[21px] text-sm"
									dateTime={courseAndWorkshop.fechaCierreInscripciones}
								>
									{formatFullDate(courseAndWorkshop.fechaCierreInscripciones)}
								</time> */}
							</div>
						</div>
						<div className="h-px max-w-[203px] mx-auto bg-dark-white-3 mb-14"></div>
						<BlockRendererClient content={courseAndWorkshop.descripcion} />
					</div>
				</div>
			</div>
		</Layout>
	);
}
