'use client';

import Title from '@/ui/components/atoms/title';
import NewsCard from '@/ui/components/molecules/news-card';
import React, { useRef, useState } from 'react';
import NewsDataToHome from '@/ui/mocks/news-data-to-home';
import ArrowDropdownIcon from '@/ui/components/atoms/icons/arrow-dropdown-icon';
import PrimaryButton from '@/ui/components/atoms/buttons/primary-button';
import TertiaryButton from '@/ui/components/atoms/buttons/tertiary-button';
import Checkbox from '@/ui/components/atoms/inputs/checkbox';
import Pagination from '@/ui/components/molecules/pagination';
import Search from '@/ui/components/atoms/inputs/search';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType } from '@splidejs/splide';
import useSplideControls from '@/ui/hooks/useSplideControls';
import ArrowButton from '@/ui/components/atoms/buttons/arrow-button';
import FeaturedNewsCard from '@/ui/components/molecules/featured-news-card';
import Layout from '@/ui/components/organisms/shared/layout';
import NoticiaFilter from '@/ui/components/organisms/noticias/noticias-filter';
import FilterIcon from '@/ui/components/atoms/icons/filter-icon';
import { AnimatePresence } from 'motion/react';
import Modal from '@/ui/components/molecules/modal';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

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
		title: 'Noticias',
		path: '/noticias',
	},
];

export default function CulturalAgendaPage() {
	const splideRef = useRef<ExtendedSplideType>(null);

	const splideOptions = {
		type: 'slide',
		width: '100%',
		perPage: 1,
		arrows: false,
		pagination: false,
		gap: '0px',
		perMove: 1,
	};

	const [currentPage, setCurrentPage] = useState(1);

	const [modalOpen, setModalOpen] = useState(false);
	
	const close = () => setModalOpen(false);
	const open = () => setModalOpen(true);

	const handleSearch = (query: string) => {
		console.log(query);
	};

	const {
		handlePrev,
		handleNext,
		handleMove,
		isPrevDisabled,
		isNextDisabled,
	} = useSplideControls(splideRef);

	return (
		<Layout
			portadaImage="https://ccsm.unmsm.edu.pe/ccsm/noticias_banner_91753aa53c.jpg"
			breadcrumbItems={breadcrumbItems}
		>
			<>
				<div className="px-4 lg:px-[104px] bg-white pb-6">
					<div className="container">
						<div className="max-w-[814px] mx-auto mb-5 md:mb-[80px]">
							<Title className="text-center">Noticias</Title>
							<div className="md:hidden">
								<p>
									Mantente informado sobre todas las novedades del Centro Cultural San Marcos. En nuestra sección de noticias, compartimos actualizaciones sobre exposiciones, eventos, talleres y logros que reflejan nuestro compromiso con el arte y la cultura. Descubre lo más reciente en actividades y proyectos que conectan a nuestra comunidad y celebran la creatividad y el conocimiento.
								</p>
							</div>
							<div className="max-md:hidden relative">
								<Splide
									onMoved={handleMove}
									ref={splideRef}
									hasTrack={false}
									options={splideOptions}
								>
									<SplideTrack>
										{NewsDataToHome.map(
											(newData, index) => (
												<SplideSlide key={index}>
													<FeaturedNewsCard
														{...newData}
													/>
												</SplideSlide>
											)
										)}
									</SplideTrack>
								</Splide>
								<div className="absolute top-1/2 -translate-y-1/2 -inset-x-[20px] pointer-events-none">
									<div className="container flex justify-between gap-x-2 relative">
										<ArrowButton
											className="pointer-events-auto"
											theme="dark"
											onClick={handlePrev}
											direction="left"
											disabled={isPrevDisabled}
										/>
										<ArrowButton
											className="pointer-events-auto"
											theme="dark"
											onClick={handleNext}
											direction="right"
											disabled={isNextDisabled}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[56px] pb-[104px]">
					<div className="container">
						<div className="flex flex-col md:flex-row justify-between gap-x-8 xl:gap-x-[105px]">
							<div>
								<div className="mb-8 max-md:flex max-md:flex-row max-md:gap-x-4">
									<Search
										className="grow"
										placeholder="¿Qué estás buscando?"
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
											{
												modalOpen &&
												<Modal handleClose={close} >
													<NoticiaFilter handleClose={close} />
												</Modal>
											}
										</AnimatePresence>
									</div>
								</div>
								<div className="max-md:hidden">
									<NoticiaFilter />
								</div>
							</div>
							<div>
								<span className="font-medium leading-[24px] text-left md:text-right flex items-end justify-start md:justify-end w-full mb-6 md:mb-8 md:h-[56px]">
									57 resultados en total
								</span>
								<ul className="flex flex-col space-y-4 md:space-y-8">
									{NewsDataToHome.map((newData, index) => (
										<li className="flex" key={index}>
											<NewsCard {...newData} />
										</li>
									))}
								</ul>
								<Pagination
									className="pagination-bar"
									currentPage={currentPage}
									totalCount={NewsDataToHome.length}
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
