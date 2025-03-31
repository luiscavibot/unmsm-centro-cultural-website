'use client';

import Tab from '@/ui/components/atoms/tab';
import Title from '@/ui/components/atoms/title';
import EventsCard from '@/ui/components/molecules/events-card';
import React, { useState } from 'react';
import eventsDataToHome from '@/ui/mocks/events-data-to-home';
import Calendar from '@/ui/components/molecules/calendar';
import Pagination from '@/ui/components/molecules/pagination';
import Layout from '@/ui/components/organisms/shared/layout';
import AgendaFilter from '@/ui/components/organisms/agenda-cultural/agenda-filter';
import PrimaryButton from '@/ui/components/atoms/buttons/primary-button';
import FilterIcon from '@/ui/components/atoms/icons/filter-icon';
import { AnimatePresence } from 'motion/react';
import Modal from '@/ui/components/molecules/modal';

type selectedTab = 'todos' | 'esta-semana';

const PageSize = 2;

const breadcrumbItems = [
	{
		title: 'Inicio',
		path: '/',
	},
	{
		title: 'Agenda cultural',
		path: '/agenda-cultural',
	},
];

export default function CulturalAgendaPage() {
	const [selectedTab, setSelectedTab] = useState<selectedTab>('todos');

	const [currentPage, setCurrentPage] = useState(1);

	const [modalOpen, setModalOpen] = useState(false);

	const close = () => setModalOpen(false);
	const open = () => setModalOpen(true);

	const handleClick = (tab: selectedTab) => {
		setSelectedTab(tab);
	};

	return (
		<Layout
			portadaImage="https://ccsm.unmsm.edu.pe/ccsm/agenda_cultural_portada_c193f92394.jpg"
			breadcrumbItems={breadcrumbItems}
		>
			<>
				<div className="px-4 lg:px-[104px] bg-white pb-6">
					<div className="container">
						<div className="max-w-[814px] mx-auto mb-[80px]">
							<Title className="text-center">
								Agenda Cultural
							</Title>
							<div className="leading-[24px] text-dark-blue-2">
								<p className="mb-3">
									En este espacio te brindamos la agenda
									mensual de las actividades que realizan las
									diez direcciones que conforman el Centro
									Cultural de San Marcos.
								</p>
								<p className="font-semibold">
									El ingreso es libre, salvo las que se
									indiquen.
								</p>
							</div>
						</div>
						<div className="flex gap-x-4">
							<Tab
								label="Todos"
								selected={selectedTab === 'todos'}
								onClick={() => {
									handleClick('todos');
								}}
							/>
							<Tab
								label="Esta semana"
								selected={selectedTab === 'esta-semana'}
								onClick={() => {
									handleClick('esta-semana');
								}}
							/>
						</div>
					</div>
				</div>
				<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[56px] pb-20 md:pb-[104px]">
					<div className="container">
						<div className="flex flex-col md:flex-row justify-between gap-x-8 xl:gap-x-[105px]">
							<div>
								<div className="mb-8 max-md:flex max-md:flex-row max-md:gap-x-4">
									<Calendar className="grow" />
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
													<AgendaFilter handleClose={close} />
												</Modal>
											}
										</AnimatePresence>
									</div>
								</div>
								<div className="max-md:hidden">
									<AgendaFilter />
								</div>
							</div>
							<div>
								<span className="font-medium leading-[24px] text-left md:text-right flex items-end justify-start md:justify-end w-full mb-6 md:mb-8 md:h-[56px]">
									57 resultados en total
								</span>
								<ul className="flex flex-col space-y-4 md:space-y-8">
									{eventsDataToHome.map((event, index) => (
										<li className="flex" key={index}>
											<EventsCard {...event} />
										</li>
									))}
								</ul>
								<Pagination
									className="pagination-bar"
									currentPage={currentPage}
									totalCount={eventsDataToHome.length}
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
