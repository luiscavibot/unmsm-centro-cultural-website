'use client'

import Tab from '@/infrastructure/ui/components/atoms/tab'
import Title from '@/infrastructure/ui/components/atoms/title'
import EventsCard from '@/infrastructure/ui/components/molecules/events-card'
import React, { useState } from 'react'
import eventsDataToHome from '@/infrastructure/ui/mocks/events-data-to-home';
import ArrowDropdownIcon from '@/infrastructure/ui/components/atoms/icons/arrow-dropdown-icon'
import SecondaryButton from '@/infrastructure/ui/components/atoms/buttons/secondary-button'

type selectedTab = 'todos' | 'esta-semana'

export default function CulturalAgendaPage() {

	const [selectedTab, setSelectedTab] = useState<selectedTab>('todos')

	const handleClick = (tab: selectedTab) => {
		setSelectedTab(tab)
	}

	return (
		<>
			<div className="bg-white pb-6">
				<div className="container">
					<div className="max-w-[814px] mx-auto mb-[80px]">
						<Title className="text-center">Agenda Cultural</Title>
						<div className="leading-[24px] text-dark-blue-2">
							<p className="mb-3">En este espacio te brindamos la agenda mensual de las actividades que realizan las diez direcciones que conforman el Centro Cultural de San Marcos.</p>
							<p className="font-semibold">El ingreso es libre, salvo las que se indiquen.</p>
						</div>
					</div>
					<div className="flex gap-x-4">
						<Tab label="Todos" selected={selectedTab === 'todos'} onClick={() => { handleClick('todos') }} />
						<Tab label="Esta semana" selected={selectedTab === 'esta-semana'} onClick={() => { handleClick('esta-semana') }} />
					</div>
				</div>
			</div>
			<div className="bg-dark-white-2 pt-[56px] pb-[104px]">
				<div className="container">
					<div className="flex flex-row justify-between gap-x-8">
						<div>
							<div className="bg-white rounded-2xl p-6 ring-1 ring-inset ring-dark-white-3 w-[314px] text-dark-blue-2">
								<div>
									<div className="flex items-center justify-between h-6">
										<span className="font-bold leading-[19.2px]">Modalidad</span>
										<ArrowDropdownIcon />
									</div>
									<div>
										{/* filtros checkboxes */}
									</div>
								</div>
								<div>
									<div className="flex items-center justify-between h-6">
										<span className="font-bold leading-[19.2px]">Organizador</span>
										<ArrowDropdownIcon />
									</div>
									<div>
										{/* filtros checkboxes */}
									</div>
								</div>
								<div className="">
									<SecondaryButton label="Ver más" theme="dark" type="on-click" onClick={() => {
										console.log("click");
									}} />
								</div>
							</div>
						</div>
						<div>
							<span className="font-medium leading-[24px] text-right block w-full mb-8">57 resultados en total</span>
							<ul className="flex flex-col space-y-8">
								{
									eventsDataToHome.map((event, index) => (
										<li className="flex" key={index}>
											<EventsCard {...event} />
										</li>
									))
								}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
