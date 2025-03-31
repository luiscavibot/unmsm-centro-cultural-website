'use client';

import Title from '@/ui/components/atoms/title';
import CoursesAndWorkshopsCard from '@/ui/components/molecules/courses-and-workshops-card';
import React, { useState } from 'react';
import coursesAndWorkshopsDataToHome from '@/ui/mocks/courses-and-workshops-data-to-home';
import ArrowDropdownIcon from '@/ui/components/atoms/icons/arrow-dropdown-icon';
import PrimaryButton from '@/ui/components/atoms/buttons/primary-button';
import TertiaryButton from '@/ui/components/atoms/buttons/tertiary-button';
import Checkbox from '@/ui/components/atoms/inputs/checkbox';
import Pagination from '@/ui/components/molecules/pagination';
import Search from '@/ui/components/atoms/inputs/search';
import Layout from '@/ui/components/organisms/shared/layout';

interface CheckboxItem {
	id: number;
	label: string;
	checked: boolean;
}

const PageSize = 2;

const breadcrumbItems = [
	{
		title: 'Inicio',
		path: '/',
	},
	{
		title: 'Cursos y talleres',
		path: '/cursos-y-talleres',
	},
];

export default function CulturalAgendaPage() {
	const [currentPage, setCurrentPage] = useState(1);

	const [checkboxesTipo, setCheckboxesTipo] = useState<CheckboxItem[]>([
		{ id: 1, label: 'Todos (120)', checked: false },
		{ id: 2, label: 'Cursos (84)', checked: false },
		{ id: 3, label: 'Talleres (36)', checked: false },
	]);

	const [checkboxesDependencia, setCheckboxesDependencia] = useState<
		CheckboxItem[]
	>([
		{ id: 1, label: 'Todos (231)', checked: false },
		{ id: 2, label: 'Banda Universitaria de Música (24)', checked: false },
		{ id: 3, label: 'Ballet San Marcos (64)', checked: false },
		{ id: 4, label: 'Biblioteca España de las Artes (12)', checked: false },
		{
			id: 5,
			label: 'Centro Universitario de Folklore (5)',
			checked: false,
		},
		{
			id: 6,
			label: 'Dirección de Cine y Producción Audiovisual (16)',
			checked: false,
		},
		{ id: 7, label: 'Dirección de Música (14)', checked: false },
		{ id: 8, label: 'Dirección de Turismo (8)', checked: false },
		{
			id: 9,
			label: 'Museo de Arqueología y Antropología (13)',
			checked: false,
		},
		{ id: 10, label: 'Museo de Arte de San Marcos (5)', checked: false },
		{
			id: 11,
			label: 'Teatro Universitario de San Marcos (7)',
			checked: false,
		},
	]);

	const [checkboxesModalidad, setCheckboxesModalidad] = useState<
		CheckboxItem[]
	>([
		{ id: 1, label: 'Todos (120)', checked: false },
		{ id: 2, label: 'Virtual (84)', checked: false },
		{ id: 3, label: 'Presencial (36)', checked: false },
		{ id: 4, label: 'Semipresencial (36)', checked: false },
	]);

	const handleCheckboxChangeTipo = (id: number, checked: boolean) => {
		setCheckboxesTipo((prevState) =>
			prevState.map((checkbox) =>
				checkbox.id === id ? { ...checkbox, checked } : checkbox
			)
		);
	};

	const handleCheckboxChangeDependencia = (id: number, checked: boolean) => {
		setCheckboxesDependencia((prevState) =>
			prevState.map((checkbox) =>
				checkbox.id === id ? { ...checkbox, checked } : checkbox
			)
		);
	};

	const handleCheckboxChangeModalidad = (id: number, checked: boolean) => {
		setCheckboxesModalidad((prevState) =>
			prevState.map((checkbox) =>
				checkbox.id === id ? { ...checkbox, checked } : checkbox
			)
		);
	};

	const handleSearch = (query: string) => {
		console.log(query);
	};

	return (
		<Layout
			portadaImage="https://ccsm.unmsm.edu.pe/ccsm/cursos_y_talleres_portada_4a6e473ea3.jpg"
			breadcrumbItems={breadcrumbItems}
		>
			<>
				<div className="px-4 lg:px-[104px] bg-white pb-14">
					<div className="container">
						<div className="max-w-[814px] mx-auto">
							<Title className="text-center">
								Cursos y talleres
							</Title>
							<div className="leading-[24px] text-dark-blue-2">
								<p>
									En el Centro Cultural de San Marcos te
									ofrecemos cursos y talleres para niños,
									jóvenes y adultos. Tienes a tu disposición
									una variada lista de opciones: talleres
									musicales, de danza, artes plásticas, cursos
									especializados y mucho más. Te invitamos a
									revisar a continuación las opciones de cada
									una de las diez direcciones que conforman el
									Centro Cultural de la Universidad Decana de
									América.
								</p>
							</div>
							<div className="mt-20">
								<Search
									className="max-w-[422px] mx-auto"
									placeholder="¿Qué te gustaría aprender?"
									onSearch={handleSearch}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[56px] pb-[104px]">
					<div className="container">
						<div className="flex flex-row justify-between gap-x-[105px]">
							<div>
								<div className="bg-white rounded-2xl p-6 ring-1 ring-inset ring-dark-white-3 w-[314px] text-dark-blue-2">
									<div>
										<div className="flex items-center justify-between h-6 mb-2">
											<span className="font-bold leading-[19.2px]">
												Tipo
											</span>
											<ArrowDropdownIcon />
										</div>
										<div className="flex flex-col gap-y-1">
											{checkboxesTipo.map((checkbox) => (
												<Checkbox
													key={checkbox.id}
													label={checkbox.label}
													checked={checkbox.checked}
													onChange={(e) =>
														handleCheckboxChangeTipo(
															checkbox.id,
															e.target.checked
														)
													}
												/>
											))}
										</div>
									</div>
									<div className="h-px max-w-[203px] mx-auto bg-dark-white-3 my-6"></div>
									<div>
										<div className="flex items-center justify-between h-6 mb-2">
											<span className="font-bold leading-[19.2px]">
												Dependencia
											</span>
											<ArrowDropdownIcon />
										</div>
										<div>
											<div className="flex flex-col gap-y-1">
												{checkboxesDependencia.map(
													(checkbox) => (
														<Checkbox
															key={checkbox.id}
															label={
																checkbox.label
															}
															checked={
																checkbox.checked
															}
															onChange={(e) =>
																handleCheckboxChangeDependencia(
																	checkbox.id,
																	e.target
																		.checked
																)
															}
														/>
													)
												)}
											</div>
										</div>
									</div>
									<div className="h-px max-w-[203px] mx-auto bg-dark-white-3 my-6"></div>
									<div>
										<div className="flex items-center justify-between h-6 mb-2">
											<span className="font-bold leading-[19.2px]">
												Modalidad
											</span>
											<ArrowDropdownIcon />
										</div>
										<div>
											<div className="flex flex-col gap-y-1">
												{checkboxesModalidad.map(
													(checkbox) => (
														<Checkbox
															key={checkbox.id}
															label={
																checkbox.label
															}
															checked={
																checkbox.checked
															}
															onChange={(e) =>
																handleCheckboxChangeModalidad(
																	checkbox.id,
																	e.target
																		.checked
																)
															}
														/>
													)
												)}
											</div>
										</div>
									</div>
									<div className="h-px max-w-[203px] mx-auto bg-dark-white-3 my-6"></div>
									<div className="flex gap-x-4">
										<TertiaryButton
											label="Limpiar filtros"
											theme="light"
											type="on-click"
											onClick={() => {
												console.log('click');
											}}
										/>
										<PrimaryButton
											label="Aplicar"
											theme="light"
											type="on-click"
											onClick={() => {
												console.log('click');
											}}
										/>
									</div>
								</div>
							</div>
							<div>
								<span className="font-medium leading-[24px] text-right flex items-end justify-end w-full mb-8 h-[56px]">
									57 resultados en total
								</span>
								<ul className="flex flex-col space-y-8">
									{coursesAndWorkshopsDataToHome.map(
										(event, index) => (
											<li className="flex" key={index}>
												<CoursesAndWorkshopsCard
													{...event}
												/>
											</li>
										)
									)}
								</ul>
								<Pagination
									className="pagination-bar"
									currentPage={currentPage}
									totalCount={
										coursesAndWorkshopsDataToHome.length
									}
									pageSize={PageSize}
									onPageChange={(page) =>
										setCurrentPage(page)
									}
								/>
							</div>
						</div>
					</div>
				</div>
			</>
		</Layout>
	);
}
