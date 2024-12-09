'use client'

import Badge from '@/infrastructure/ui/components/atoms/badge'
import PrimaryButton from '@/infrastructure/ui/components/atoms/buttons/primary-button'
import ClockIcon from '@/infrastructure/ui/components/atoms/icons/clock-icon'
import DateRangeIcon from '@/infrastructure/ui/components/atoms/icons/date-range-icon'
import OutlinePlaceIcon from '@/infrastructure/ui/components/atoms/icons/outilne-place-icon'
import Title from '@/infrastructure/ui/components/atoms/title'
import React from 'react'

export default function Evento() {
	return (
		<div className="px-4 lg:px-[104px] bg-white pb-6">
			<div className="container">
				<div className="max-w-[814px] mx-auto mb-[80px]">
					<div className="flex justify-center">
						<Badge label="virtual" size="small" />
					</div>
					<Title className="text-center mb-16">Letras breves: Canción popular costeña en el norte del Perú</Title>
					<div className="flex gap-x-1 justify-center mb-14">
						<div className="min-w-[214px]">
							<div className="flex gap-1 items-center">
								<DateRangeIcon className="shrink-0" ariaLabel="Fecha" color="dark" />
								<span className="leading-[24px] font-bold">Fecha</span>
							</div>
							<time className="block pl-5 font-medium leading-[21px] text-sm" dateTime="2024-10-30">
								30 de octubre de 2024
							</time>
						</div>
						<div className="min-w-[155px]">
							<div className="flex gap-1 items-center">
								<ClockIcon className="shrink-0" ariaLabel="Hora" color="dark" />
								<span className="leading-[24px] font-bold">Horario</span>
							</div>
							<time className="block pl-5 font-medium leading-[21px] text-sm" dateTime="10:00:00">
								10 a. m.
							</time>
						</div>
						<div className="min-w-[208px]">
							<div className="flex gap-1 items-center">
								<OutlinePlaceIcon className="shrink-0" ariaLabel="Lugar" color="dark" />
								<span className="leading-[24px] font-bold">Lugar</span>
							</div>
							<p className="pl-5 font-medium leading-[21px] text-sm">
								Centro cultural UNMSM
							</p>
						</div>
					</div>
					<div className="h-px max-w-[203px] mx-auto bg-dark-white-3 mb-14"></div>
					<div className="space-y-4">
						<p>La Fundación de San Marcos (FSM) en colaboración del Centro Cultural de San Marcos (CCSM) y el Museo de Arte de San Marcos (MASM) te invitan al taller virtual «Museografía participativa: Diseño desde la comunidad para la comunidad»,</p>
						<p>Aprende cómo diseñar exposiciones con enfoque comunitario en tres fases: conceptos claves, herramientas metodológicas y aplicación práctica. Todo en un espacio de aprendizaje interactivo, con la participación de un especialista con amplia experiencia en el trabajo participativo en museos ¡No importa dónde estés, la virtualidad te conecta con esta experiencia única!</p>
						<p>¡Inscríbete y transforma tu visión museográfica!</p>
					</div>
					<PrimaryButton label="Registrarme" theme="light" type="external-link" href="#" className="mt-6" />
				</div>
			</div>
		</div>
	)
}
