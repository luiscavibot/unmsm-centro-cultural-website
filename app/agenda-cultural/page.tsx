'use client'

import Tab from '@/infrastructure/ui/components/atoms/tab'
import Title from '@/infrastructure/ui/components/atoms/title'
import EventsCard from '@/infrastructure/ui/components/molecules/events-card'
import React, { useState } from 'react'
import eventsDataToHome from '@/infrastructure/ui/mocks/events-data-to-home';
import ArrowDropdownIcon from '@/infrastructure/ui/components/atoms/icons/arrow-dropdown-icon'
import PrimaryButton from '@/infrastructure/ui/components/atoms/buttons/primary-button'
import TertiaryButton from '@/infrastructure/ui/components/atoms/buttons/tertiary-button'
import Checkbox from '@/infrastructure/ui/components/atoms/inputs/checkbox'
import Calendar from '@/infrastructure/ui/components/molecules/calendar'

type selectedTab = 'todos' | 'esta-semana'

interface CheckboxItem {
	id: number;
	label: string;
	checked: boolean;
}

export default function CulturalAgendaPage() {

	const [selectedTab, setSelectedTab] = useState<selectedTab>('todos')

	const [checkboxesModalidad, setCheckboxesModalidad] = useState<CheckboxItem[]>([
		{ id: 1, label: "Todos (120)", checked: false },
		{ id: 2, label: "Virtual (84)", checked: false },
		{ id: 3, label: "Presencial (36)", checked: false },
		{ id: 4, label: "Semipresencial (36)", checked: false },
	]);

	const [checkboxesOrganizador, setCheckboxesOrganizador] = useState<CheckboxItem[]>([
		{ id: 1, label: "Todos (231)", checked: false },
		{ id: 2, label: "Banda Universitaria de Música (24)", checked: false },
		{ id: 3, label: "Ballet San Marcos (64)", checked: false },
		{ id: 4, label: "Biblioteca España de las Artes (12)", checked: false },
		{ id: 5, label: "Centro Universitario de Folklore (5)", checked: false },
		{ id: 6, label: "Dirección de Cine y Producción Audiovisual (16)", checked: false },
		{ id: 7, label: "Dirección de Música (14)", checked: false },
		{ id: 8, label: "Dirección de Turismo (8)", checked: false },
		{ id: 9, label: "Museo de Arqueología y Antropología (13)", checked: false },
		{ id: 10, label: "Museo de Arte de San Marcos (5)", checked: false },
		{ id: 11, label: "Teatro Universitario de San Marcos (7)", checked: false },
	]);

	const handleClick = (tab: selectedTab) => {
		setSelectedTab(tab)
	}

	const handleCheckboxChangeModalidad = (id: number, checked: boolean) => {
		setCheckboxesModalidad((prevState) =>
			prevState.map((checkbox) =>
				checkbox.id === id ? { ...checkbox, checked } : checkbox
			)
		);
	};

	const handleCheckboxChangeOrganizador = (id: number, checked: boolean) => {
		setCheckboxesOrganizador((prevState) =>
			prevState.map((checkbox) =>
				checkbox.id === id ? { ...checkbox, checked } : checkbox
			)
		);
	};

	return (
		<>
			<div className="px-4 lg:px-[104px] bg-white pb-6">
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
			<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[56px] pb-[104px]">
				<div className="container">
					<div className="flex flex-row justify-between gap-x-[105px]">
						<div>
							<div className="mb-8">
								<Calendar />
							</div>
							<div className="bg-white rounded-2xl p-6 ring-1 ring-inset ring-dark-white-3 w-[314px] text-dark-blue-2">
								<div>
									<div className="flex items-center justify-between h-6 mb-2">
										<span className="font-bold leading-[19.2px]">Modalidad</span>
										<ArrowDropdownIcon />
									</div>
									<div className="flex flex-col gap-y-1">
										{checkboxesModalidad.map((checkbox) => (
											<Checkbox
												key={checkbox.id}
												label={checkbox.label}
												checked={checkbox.checked}
												onChange={(e) => handleCheckboxChangeModalidad(checkbox.id, e.target.checked)}
											/>
										))}
									</div>
								</div>
								<div className="h-px max-w-[203px] mx-auto bg-dark-white-3 my-6"></div>
								<div>
									<div className="flex items-center justify-between h-6 mb-2">
										<span className="font-bold leading-[19.2px]">Organizador</span>
										<ArrowDropdownIcon />
									</div>
									<div>
										<div className="flex flex-col gap-y-1">
											{checkboxesOrganizador.map((checkbox) => (
												<Checkbox
													key={checkbox.id}
													label={checkbox.label}
													checked={checkbox.checked}
													onChange={(e) => handleCheckboxChangeOrganizador(checkbox.id, e.target.checked)}
												/>
											))}
										</div>
									</div>
								</div>
								<div className="h-px max-w-[203px] mx-auto bg-dark-white-3 my-6"></div>
								<div className="flex gap-x-4">
									<TertiaryButton label="Limpiar filtros" theme="light" type="on-click" onClick={() => {
										console.log("click");
									}} />
									<PrimaryButton label="Aplicar" theme="light" type="on-click" onClick={() => {
										console.log("click");
									}} />
								</div>
							</div>
						</div>
						<div>
							<span className="font-medium leading-[24px] text-right flex items-end justify-end w-full mb-8 h-[56px]">57 resultados en total</span>
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
