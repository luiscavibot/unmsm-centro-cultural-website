'use client';

import Tab from '@/ui/components/atoms/tab';
import Title from '@/ui/components/atoms/title';
import EventsCard from '@/ui/components/molecules/events-card';
import React, { useState } from 'react';
import Pagination from '@/ui/components/molecules/pagination';
import Layout from '@/ui/components/organisms/shared/layout';
import AgendaFilters from '@/ui/components/organisms/agenda-cultural/agenda-filters';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { AgendaCulturalService } from '@/services/agenda-cultural.service';
import Skeleton from '@/ui/components/atoms/skeleton';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAppForm } from '@/lib/form/form';
import { useStore } from '@tanstack/react-form';
import { agendaCulturalFormOpts } from '@/ui/components/organisms/agenda-cultural/form/form-opts';

type selectedTab = 'todos' | 'esta-semana';

const pageSize = 5;

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
	const form = useAppForm({
		...agendaCulturalFormOpts,
		onSubmit: async () => {},
	});

	// const [validityPeriodStart, validityPeriodEnd] = useStore(
	// 	form.store,
	// 	(state) => state.values.dateRange
	// );
	// console.log('validityPeriodStart', validityPeriodStart);
	// console.log('validityPeriodEnd', validityPeriodEnd);
	const dateRange = useStore(form.store, (state) => state.values.dateRange);

	const organizer = useStore(form.store, (state) => state.values.organizador);
	const mode = useStore(form.store, (state) => state.values.modalidad);

	// const [modalOpen, setModalOpen] = useState(false);
	// const close = () => setModalOpen(false);
	// const open = () => setModalOpen(true);

	const router = useRouter();
	const searchParams = useSearchParams();
	const pageFromQuery = Number(searchParams.get('page')) || 1;
	const [currentPage, setCurrentPage] = useState(pageFromQuery);

	const [selectedTab, setSelectedTab] = useState<selectedTab>('todos');
	const handleClick = (tab: selectedTab) => {
		setSelectedTab(tab);
	};

	const { data, error, isFetching, isLoading } = useQuery({
		queryKey: ['list-agenda', currentPage, organizer, mode, dateRange],
		queryFn: () =>
			AgendaCulturalService.getListEntries({
				page: currentPage,
				pageSize,
				organizer,
				mode,
				dateRange,
			}),
		placeholderData: keepPreviousData,
		refetchOnWindowFocus: false,
	});
	const agendaData = data?.data || [];
	const agendaDataQty = data?.meta?.pagination?.total || 0;

	const skeletonArray: string[] = new Array(pageSize).fill('');

	const resultados = () => {
		if (error) return '';
		if (isLoading) return 'Calculando...';
		if (agendaDataQty === 0 && !isFetching) return 'No hay resultados';
		if (agendaDataQty === 1) return '1 resultado';
		if (agendaDataQty > 1) return `${agendaDataQty} resultados`;
	};

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
		const params = new URLSearchParams(searchParams.toString());
		params.set('page', String(page));
		router.push(`?${params.toString()}`, { scroll: false });
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
							{/* <div>
								<div className="mb-8 max-md:flex max-md:flex-row max-md:gap-x-4">
									<Calendar className="grow" />
									<div className="md:hidden">
										<PrimaryButton
											className="w-14 h-14"
											icon={<FilterIcon />}
											theme="light"
											type="on-click"
											onClick={() =>
												modalOpen ? close() : open()
											}
										/>
										<AnimatePresence
											initial={false}
											mode="wait"
											onExitComplete={() => null}
										>
											{modalOpen && (
												<Modal handleClose={close}>
													<AgendaFilters
														handleClose={close}
														form={form}
													/>
												</Modal>
											)}
										</AnimatePresence>
									</div>
								</div>
							</div> */}
							<AgendaFilters form={form} />
							<div className="w-full">
								<span className="font-medium leading-[24px] text-left md:text-right flex items-end justify-start md:justify-end w-full mb-6 md:mb-8 md:h-[56px]">
									{resultados()}
								</span>
								{error && (
									<p className="text-center">
										Error al cargar los datos de la agenda o
										evento no encontrado.
									</p>
								)}
								<ul className="flex flex-col space-y-4 md:space-y-8">
									{isFetching
										? skeletonArray.map((_, index) => (
												<div
													key={index}
													className="h-[19.3125rem] md:h-[21.625rem] rounded-2xl overflow-hidden"
												>
													<Skeleton />
												</div>
										  ))
										: agendaData.map((event) => (
												<li
													className="flex"
													key={event.id}
												>
													<EventsCard {...event} />
												</li>
										  ))}
								</ul>
								<Pagination
									className="pagination-bar"
									currentPage={currentPage}
									totalCount={agendaDataQty}
									pageSize={pageSize}
									onPageChange={handlePageChange}
								/>
							</div>
						</div>
					</div>
				</div>
			</>
		</Layout>
	);
}
