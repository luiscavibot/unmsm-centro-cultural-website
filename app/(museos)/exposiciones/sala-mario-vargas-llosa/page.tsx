'use client';

import Badge from '@/ui/components/atoms/badge';
import Title from '@/ui/components/atoms/title';
import ExhibitionVargasLlosaCard from '@/ui/components/molecules/exhibition-vargas-llosa-card';
import Layout from '@/ui/components/organisms/shared/layout';
import exhibitions from '@/ui/mocks/exhibitions-sala-mario-vargas-llosa';
import React, { useRef } from 'react';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType, ResponsiveOptions } from '@splidejs/splide';
import ArrowButton from '@/ui/components/atoms/buttons/arrow-button';
import useSplideControls from '@/ui/hooks/useSplideControls';
import carouselExhibition from '@/ui/mocks/exhibition-arte-moderno-y-contemporaneo-carousel';
import Image from 'next/image';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

const breadcrumbItems = [
	{
		title: 'Inicio',
		path: '/',
	},
	{
		title: 'Exposiciones',
		path: '/exposiciones',
	},
	{
		title: 'Sala Mario Vargas Llosa',
		path: '/sala-mario-vargas-llosa',
	},
];

export default function SalaMarioVargasLlosa() {
	const splidePiezasRef = useRef<ExtendedSplideType>(null);
	const splideGaleriaRef = useRef<ExtendedSplideType>(null);

	const splidePiezasOptions: ResponsiveOptions = {
		type: 'slide',
		width: '100%',
		perPage: 1,
		arrows: false,
		pagination: false,
		gap: '0px',
		perMove: 1,
	};

	const splideGaleriaOptions: ResponsiveOptions = {
		type: 'slide',
		width: '100%',
		fixedWidth: '310px',
		arrows: false,
		pagination: false,
		gap: '24px',
		perMove: 1,
		breakpoints: {
			1024: {
				fixedWidth: '100%',
				perMove: 1,
			},
		},
	};

	const {
		handlePrev: handlePrevPiezas,
		handleNext: handleNextPiezas,
		handleMove: handleMovePiezas,
		isPrevDisabled: isPrevDisabledPiezas,
		isNextDisabled: isNextDisabledPiezas,
	} = useSplideControls(splidePiezasRef);
	const {
		handlePrev: handlePrevGaleria,
		handleNext: handleNextGaleria,
		handleMove: handleMoveGaleria,
		isPrevDisabled: isPrevDisabledGaleria,
		isNextDisabled: isNextDisabledGaleria,
	} = useSplideControls(splideGaleriaRef);

	return (
		<Layout
			portadaImage="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-agenda-cultural.webp"
			breadcrumbItems={breadcrumbItems}
			theme="dark"
		>
			<>
				<div className="px-4 lg:px-[104px] bg-gray-2 text-white pb-14">
					<div className="container">
						<div className="max-w-[822px] mx-auto">
							<div className="flex justify-center">
								<Badge
									className="mb-[14px]"
									label="Sala permanente"
									size="small"
								/>
							</div>
							<Title theme="dark" className="text-center mb-10">
								Sala Mario Vargas Llosa
							</Title>
							<div className="text-right mb-[72px]">
								<q className="font-normal">
									Los años sanmarquinos fueron para mí
									fundamentales desde el punto de vista
									intelectual,
									<br />
									desde mi formación literaria y también desde
									mi formación cívica.
									<br />
									Nunca me he arrepentido de haber ingresado a
									la Universidad de San Marcos
									<br />y haber pasado aquí seis años.
								</q>
								<cite className="block font-semibold">
									Mario Vargas Llosa
								</cite>
							</div>
							<div className="space-y-4">
								<p>
									Adéntrate en un recorrido documental y
									fotográfico que revive la vida sanmarquina
									de Mario Vargas Llosa entre 1953 y 1958.
									Este espacio, inaugurado el 6 de abril de
									2011, es el resultado de la investigación y
									curaduría del reconocido crítico literario
									Jorge Kishimoto Yoshimura.
								</p>
								<p>
									Descubre cómo la experiencia universitaria
									del Premio Nobel de Literatura marcó sus
									primeros pasos en el mundo de las letras.
									Una mirada única al legado de uno de los
									grandes exponentes de la literatura
									universal.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="px-4 lg:px-[104px] bg-dark-red-2 text-white pb-14">
					<div className="container">
						<div className="pt-14 max-w-[822px] mx-auto">
							<h2 className="font-bold text-xl leading-[30px] mb-8">
								Piezas de exhibición
							</h2>
							<div className="relative">
								<Splide
									onMoved={handleMovePiezas}
									ref={splidePiezasRef}
									hasTrack={false}
									options={splidePiezasOptions}
								>
									<SplideTrack>
										{exhibitions.map(
											(exhibition, index) => (
												<SplideSlide key={index}>
													<ExhibitionVargasLlosaCard
														{...exhibition}
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
											theme="light"
											onClick={handlePrevPiezas}
											direction="left"
											disabled={isPrevDisabledPiezas}
										/>
										<ArrowButton
											className="pointer-events-auto"
											theme="light"
											onClick={handleNextPiezas}
											direction="right"
											disabled={isNextDisabledPiezas}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="px-4 lg:px-[104px] bg-black-custom text-white pb-[104px]">
					<div className="container">
						<div className="pt-[81px]">
							<h2 className="font-bold text-xl leading-[30px] mb-10">
								Galería
							</h2>
							<div className="max-lg:w-full relative">
								<Splide
									onMoved={handleMoveGaleria}
									ref={splideGaleriaRef}
									hasTrack={false}
									options={splideGaleriaOptions}
								>
									<SplideTrack>
										{carouselExhibition.map(
											(img, index) => (
												<SplideSlide key={index}>
													<figure className="max-lg:hidden relative w-[310px] h-[232px] flex-shrink-0 rounded-2xl overflow-hidden">
														<Image
															src={img.imageUrl}
															className="object-cover"
															alt={'Exposición'}
															layout="fill"
														/>
													</figure>
												</SplideSlide>
											)
										)}
									</SplideTrack>
								</Splide>
								<div className="absolute top-1/2 -translate-y-1/2 -inset-x-[20px] pointer-events-none">
									<div className="container flex justify-between gap-x-2 relative">
										<ArrowButton
											className="pointer-events-auto"
											theme="light"
											onClick={handlePrevGaleria}
											direction="left"
											disabled={isPrevDisabledGaleria}
										/>
										<ArrowButton
											className="pointer-events-auto"
											theme="light"
											onClick={handleNextGaleria}
											direction="right"
											disabled={isNextDisabledGaleria}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		</Layout>
	);
}
