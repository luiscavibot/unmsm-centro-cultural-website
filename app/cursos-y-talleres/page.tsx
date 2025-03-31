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
import CursosYTalleresFilter from '@/ui/components/organisms/cursos-y-talleres/cursos-y-talleres-filter';
import FilterIcon from '@/ui/components/atoms/icons/filter-icon';
import { AnimatePresence } from 'motion/react';
import Modal from '@/ui/components/molecules/modal';

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

export default function CursosYTalleresPage() {
	const [currentPage, setCurrentPage] = useState(1);

	const [modalOpen, setModalOpen] = useState(false);

	const close = () => setModalOpen(false);
	const open = () => setModalOpen(true);

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
				<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[56px] pb-20 md:pb-[104px]">
					<div className="container">
						<div className="flex flex-col md:flex-row justify-between gap-x-8 xl:gap-x-[105px]">
							<div>
								<div className="mb-8 max-md:flex max-md:flex-row max-md:gap-x-4">
									{/* <Calendar className="grow" /> */}
									<div className="md:hidden">
										<PrimaryButton
											className="w-14 h-14"
											icon={<FilterIcon />}
											theme="light"
											type="on-click"
											onClick={() => (modalOpen ? close() : open())}
										/>
										<AnimatePresence
											initial={false}
											mode="wait"
											onExitComplete={() => null}
										>
											{
												modalOpen &&
												<Modal handleClose={close} >
													<CursosYTalleresFilter handleClose={close} />
												</Modal>
											}
										</AnimatePresence>
									</div>
								</div>
								<div className="max-md:hidden">
									<CursosYTalleresFilter />
								</div>
							</div>
							<div>
								<span className="font-medium leading-[24px] text-left md:text-right flex items-end justify-start md:justify-end w-full mb-6 md:mb-8 md:h-[56px]">
									57 resultados en total
								</span>
								<ul className="flex flex-col space-y-4 md:space-y-8">
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
