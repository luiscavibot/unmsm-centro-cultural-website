'use client';

import Title from '@/ui/components/atoms/title';
import CoursesAndWorkshopsCard from '@/ui/components/molecules/courses-and-workshops-card';
import React, { useState } from 'react';
import Pagination from '@/ui/components/molecules/pagination';
import Search from '@/ui/components/atoms/inputs/search';
import Layout from '@/ui/components/organisms/shared/layout';
import CursosYTalleresFilter from '@/ui/components/organisms/cursos-y-talleres/cursos-y-talleres-filter';
import PrimaryButton from '@/ui/components/atoms/buttons/primary-button';
import FilterIcon from '@/ui/components/atoms/icons/filter-icon';
import { AnimatePresence } from 'motion/react';
import Modal from '@/ui/components/molecules/modal';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { CursosYTalleresService } from '@/services/cursos-y-talleres.service';
import Skeleton from '@/ui/components/atoms/skeleton';
import { useRouter, useSearchParams } from 'next/navigation';

const pageSize = 5;

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
	const [modalOpen, setModalOpen] = useState(false);
	const close = () => setModalOpen(false);
	const open = () => setModalOpen(true);

	const handleSearch = (query: string) => {
		console.log(query);
	};

	const router = useRouter();
	const searchParams = useSearchParams();
	const pageFromQuery = Number(searchParams.get('page')) || 1;
	const [currentPage, setCurrentPage] = useState(pageFromQuery);

	const { data, error, isFetching, isLoading } = useQuery({
		queryKey: ['list-courses-and-workshops', currentPage],
		queryFn: () => CursosYTalleresService.getListEntries(currentPage, pageSize),
		placeholderData: keepPreviousData,
		refetchOnWindowFocus: false,
	});
	const coursesData = data?.data || [];
	const coursesDataQty = data?.meta?.pagination?.total || 0;

	const skeletonArray: string[] = new Array(pageSize).fill('');

	const resultados = () => {
		if (error) return '';
		if (isLoading) return 'Calculando...';
		if (coursesDataQty === 0 && !isFetching) return 'No hay resultados';
		if (coursesDataQty === 1) return '1 resultado';
		if (coursesDataQty > 1) return `${coursesDataQty} resultados`;
	};

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
		const params = new URLSearchParams(searchParams.toString());
		params.set('page', String(page));
		router.push(`?${params.toString()}`, { scroll: false });
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
							<div className="mt-20 max-md:hidden">
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
									<Search
										className="max-w-[422px] mx-auto grow"
										placeholder="¿Qué te gustaría aprender?"
										onSearch={handleSearch}
									/>
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
											{modalOpen &&
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
													className="h-[14rem] rounded-2xl overflow-hidden"
												>
													<Skeleton />
												</div>
										  ))
										: coursesData.map(
											(course, index) => (
												<li className="flex" key={index}>
													<CoursesAndWorkshopsCard
														slug={course.slug}
														tipo={course.tipo}
														titulo={course.titulo}
														resumen={course.resumen}
														dependencia={course.dependencia}
														url={course.imagen.formats.small.url}
													/>
												</li>
									))}
								</ul>
								<Pagination
									className="pagination-bar"
									currentPage={currentPage}
									totalCount={coursesDataQty}
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
