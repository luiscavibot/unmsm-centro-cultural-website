'use client';

import Badge from '@/ui/components/atoms/badge';
import ClassIcon from '@/ui/components/atoms/icons/class-icon';
import CalendarIcon from '@/ui/components/atoms/icons/calendar-icon';
import ClockIcon from '@/ui/components/atoms/icons/clock-icon';
import OutlinePlaceIcon from '@/ui/components/atoms/icons/outilne-place-icon';
import Title from '@/ui/components/atoms/title';
import React from 'react';
import Layout from '@/ui/components/organisms/shared/layout';
import useScrollOnLoad from '@/ui/hooks/use-scroll-on-load';

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
		title: 'Curso',
		path: '/cursos-y-talleres/curso-y-taller',
	},
];

export default function CursoYTaller() {
	useScrollOnLoad();

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
							“Protegiendo nuestros textiles milenarios”:
							Conservación preventiva para textiles arqueológicos
						</Title>
						<div className="flex flex-row items-center justify-center gap-2 mb-14">
							<div className="p-4 text-green bg-light-green rounded-lg">
								<span className="font-bold">Inicio:</span> 5 de
								noviembre de 2024
							</div>
						</div>
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
									Martes y jueves (5, 7, 12 de noviembre de
									2024)
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
									Centro Cultural de San Marcos
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
									10 a. m. a 1 p. m.
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
								<time
									className="block pl-5 font-medium leading-[21px] text-sm"
									dateTime="2024-10-30"
								>
									30 de octubre de 2024
								</time>
							</div>
						</div>
						<div className="h-px max-w-[203px] mx-auto bg-dark-white-3 mb-14"></div>
						<div className="space-y-4">
							<p>
								El Museo de Arqueología y Antropología de la
								UNMSM presenta el taller especializado
								«Protegiendo Nuestros Textiles Milenarios», una
								iniciativa destinada a la{' '}
								<b>
									conservación preventiva de textiles
									arqueológicos
								</b>
								. Este taller brindará a los participantes
								herramientas y conocimientos para la{' '}
								<b>realización de un registro adecuado</b>, la
								creación de <b>cajas contenedoras</b> y el
								diseño de <b>soportes protectores</b> para
								preservar estos valiosos bienes culturales.
							</p>
							<p>
								Los participantes aprenderán a manejar técnicas
								esenciales para garantizar la protección y
								conservación de textiles arqueológicos,
								salvaguardando así piezas de incalculable valor
								histórico y cultural.
							</p>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
