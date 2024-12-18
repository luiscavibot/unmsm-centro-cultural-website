'use client'

import Title from '@/infrastructure/ui/components/atoms/title'
import NewsCard from '@/infrastructure/ui/components/molecules/news-card'
import React, { useRef, useState } from 'react'
import NewsDataToHome from '@/infrastructure/ui/mocks/news-data-to-home';
import ArrowDropdownIcon from '@/infrastructure/ui/components/atoms/icons/arrow-dropdown-icon'
import PrimaryButton from '@/infrastructure/ui/components/atoms/buttons/primary-button'
import TertiaryButton from '@/infrastructure/ui/components/atoms/buttons/tertiary-button'
import Checkbox from '@/infrastructure/ui/components/atoms/inputs/checkbox'
import Pagination from '@/infrastructure/ui/components/molecules/pagination'
import Search from '@/infrastructure/ui/components/atoms/inputs/search'

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType } from '@splidejs/splide';
import useSplideControls from '@/infrastructure/ui/hooks/useSplideControls'
import ArrowButton from '@/infrastructure/ui/components/atoms/buttons/arrow-button';
import FeaturedNewsCard from '@/infrastructure/ui/components/molecules/featured-news-card';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

interface CheckboxItem {
	id: number;
	label: string;
	checked: boolean;
}

let PageSize = 2;

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

	const [checkboxesDependencias, setCheckboxesDependencias] = useState<CheckboxItem[]>([
		{ id: 1, label: "Todas (231)", checked: false },
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

	const handleCheckboxChangeDependencias = (id: number, checked: boolean) => {
		setCheckboxesDependencias((prevState) =>
			prevState.map((checkbox) =>
				checkbox.id === id ? { ...checkbox, checked } : checkbox
			)
		);
	};

	const handleSearch = (query: string) => {
		console.log(query);
	};

	const { handlePrev, handleNext, handleMove, isPrevDisabled, isNextDisabled } = useSplideControls(splideRef);

	return (
		<>
			<div className="px-4 lg:px-[104px] bg-white pb-6">
				<div className="container">
					<div className="max-w-[814px] mx-auto mb-[80px]">
						<Title className="text-center">Noticias</Title>
						<div className="relative">
							<Splide
								onMoved={handleMove}
								ref={splideRef}
								hasTrack={false}
								options={splideOptions}
							>
								<SplideTrack>
									{NewsDataToHome.map((newData, index) => (
										<SplideSlide key={index}>
											<FeaturedNewsCard {...newData} />
										</SplideSlide>
									))}
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
					<div className="flex flex-row justify-between gap-x-[105px]">
						<div>
							<div className="mb-8">
								<Search onSearch={handleSearch} />
							</div>
							<div className="bg-white rounded-2xl p-6 ring-1 ring-inset ring-dark-white-3 w-[314px] text-dark-blue-2">
								<div>
									<div className="flex items-center justify-between h-6 mb-2">
										<span className="font-bold leading-[19.2px]">Dependencias</span>
										<ArrowDropdownIcon />
									</div>
									<div className="flex flex-col gap-y-1">
										{checkboxesDependencias.map((checkbox) => (
											<Checkbox
												key={checkbox.id}
												label={checkbox.label}
												checked={checkbox.checked}
												onChange={(e) => handleCheckboxChangeDependencias(checkbox.id, e.target.checked)}
											/>
										))}
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
									NewsDataToHome.map((newData, index) => (
										<li className="flex" key={index}>
											<NewsCard {...newData} />
										</li>
									))
								}
							</ul>
							<Pagination
								className="pagination-bar"
								currentPage={currentPage}
								totalCount={NewsDataToHome.length}
								pageSize={PageSize}
								onPageChange={page => setCurrentPage(page)}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
