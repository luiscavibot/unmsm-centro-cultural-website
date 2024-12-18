'use client'

import Badge from '@/infrastructure/ui/components/atoms/badge'
import TertiaryButton from '@/infrastructure/ui/components/atoms/buttons/tertiary-button'
import CalendarIcon from '@/infrastructure/ui/components/atoms/icons/calendar-icon'
import Title from '@/infrastructure/ui/components/atoms/title'
import RecentNewsCard from '@/infrastructure/ui/components/molecules/recent-news-card'
import newsDataToHome from '@/infrastructure/ui/mocks/news-data-to-home'
import React from 'react'

export default function Evento() {
	return (
		<div className="px-4 lg:px-[104px] bg-white pb-[104px]">
			<div className="container">
				<div className="max-w-[814px] mx-auto mb-[80px]">
					<div className="flex justify-center">
						<Badge label="Ballet San Marcos" size="small" />
					</div>
					<Title className="text-center !mb-1">Ballet de San Marcos en gira por los Andes peruanos</Title>
					<div className="flex flex-row items-center justify-center gap-2 mb-14">
						<CalendarIcon className="shrink-0" ariaLabel="Fecha" color="dark" />
						<time dateTime="2024-10-30" className="text-dark-blue-2 font-medium text-sm leading-[21px]">30 de octubre de 2024</time>
					</div>
					<div className="h-px max-w-[203px] mx-auto bg-dark-white-3 mb-14"></div>
					<div className="space-y-4">
						<p>El <b className="font-bold">Ballet San Marcos</b> llevará a cabo una gira en la provincia de Ancash, con presentaciones en las ciudades de <b className="font-bold">Caraz, Yungay y Huaylas</b>. En esta gira, un grupo de bailarines profesionales de la <b className="font-bold">Compañía y alumnos del Elenco de la Escuela</b> ofrecerá un conjunto de coreografías que integran danza clásica y contemporánea. Las funciones estarán dirigidas tanto a estudiantes de instituciones educativas estatales de la zona como al público en general, resaltando el talento artístico de sus integrantes y la creatividad de sus coreógrafos.</p>
					</div>
				</div>
				<div className="mt-[110px]">
					<div className="flex justify-between items-center mb-[30px]">
						<h2 className="text-2xl font-bold leading-[36px] text-dark-blue-2">Noticias recientes</h2>
						<TertiaryButton label="Ver todos" theme="light" type="internal-link" href="/agenda-cultural" />
					</div>
					<div className="grid grid-cols-3 gap-6">
						{
							newsDataToHome.slice(-3).map((event: any, index: number) => (
								<RecentNewsCard
									key={index}
									slug={event.slug}
									title={event.title}
									date={event.date}
									dateString={event.dateString}
								/>
							))
						}
					</div>
				</div>
			</div>
		</div>
	)
}
