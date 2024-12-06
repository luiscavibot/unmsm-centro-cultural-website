import Title from '@/infrastructure/ui/components/atoms/title'
import React from 'react'

export default function CulturalAgendaPage() {
	return (
		<div className="max-w-[814px] mx-auto">
			<Title className="text-center">Agenda Cultural</Title>
			<div className="leading-[24px] text-dark-blue-2">
				<p className="mb-3">En este espacio te brindamos la agenda mensual de las actividades que realizan las diez direcciones que conforman el Centro Cultural de San Marcos.</p>
				<p className="font-semibold">El ingreso es libre, salvo las que se indiquen.</p>
			</div>
		</div>
	)
}
