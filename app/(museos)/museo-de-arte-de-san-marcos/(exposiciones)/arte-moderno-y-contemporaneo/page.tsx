'use client';

import Badge from '@/infrastructure/ui/components/atoms/badge';
import ImageIcon from '@/infrastructure/ui/components/atoms/icons/imagen-icon';
import OutlinePlaceIcon from '@/infrastructure/ui/components/atoms/icons/outilne-place-icon';
import Title from '@/infrastructure/ui/components/atoms/title';
import ExhibitionsCard from '@/infrastructure/ui/components/molecules/exhibitions-card';
import Layout from '@/infrastructure/ui/components/organisms/shared/layout';
import exhibitions from '@/infrastructure/ui/mocks/exhibitions-arte-moderno-y-contemporaneo';
import React, { useRef } from 'react';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType } from '@splidejs/splide';
import ArrowButton from '@/infrastructure/ui/components/atoms/buttons/arrow-button';
import useSplideControls from '@/infrastructure/ui/hooks/useSplideControls';
import carouselExhibition from '@/infrastructure/ui/mocks/exhibition-arte-moderno-y-contemporaneo-carousel';
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
		title: 'Museo de Arte de San Marcos',
		path: '/museo-de-arte-de-san-marcos',
	},
	{
		title: 'Arte moderno y contemporáneo',
		path: '/museo-de-arte-de-san-marcos/arte-moderno-y-contemporaneo',
	},
];

export default function ArteModernoYContemporaneo() {
	const splideRef = useRef<ExtendedSplideType>(null);

	const splideOptions = {
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
		handlePrev,
		handleNext,
		handleMove,
		isPrevDisabled,
		isNextDisabled,
	} = useSplideControls(splideRef);

	return (
		<Layout
			portadaImage="https://ccsm.unmsm.edu.pe/ccsm/COLECC_1_1acec4e15d.jpg"
			breadcrumbItems={breadcrumbItems}
			theme="dark"
		>
			<div className="px-4 lg:px-[104px] bg-gray-2 text-white pb-[104px]">
				<div className="container">
					<div className="max-w-[814px] mx-auto mb-[80px]">
						<div className="flex justify-center">
							<Badge label="Exposición permanente" size="small" />
						</div>
						<Title theme="dark" className="text-center mb-10">
							Arte moderno y contemporáneo
						</Title>
						<div className="space-y-4">
							<p>
								La exposición dedicada a la colección de arte
								moderno y contemporáneo fue inaugurada en el año
								2014, cuando era director del MASM el poeta y
								gestor cultural Germán Carnero, que contó con la
								curaduría de la crítica de arte Élida Román.
								Aquí el visitante encontrará una variedad de
								pinturas, esculturas, fotografías, acuarelas,
								grabados, entre otras técnicas desarrolladas por
								diversos artistas representativos de la historia
								del arte peruano. Esta exposición está
								organizada por unidades temáticas, que le dan un
								sentido al recorrido y permiten al visitante una
								mejor lectura de las obras. Muchos de los
								ejemplares aquí exhibidos son donaciones
								efectuadas por artistas o coleccionistas quienes
								apoyan, hasta hoy, en el enriquecimiento del
								patrimonio artístico de la UNMSM.
							</p>
						</div>
						<div className="flex flex-col gap-y-2 mt-6">
							<div className="flex gap-2 items-start">
								<div className="flex items-center gap-1 shrink-0">
									<OutlinePlaceIcon
										className="shrink-0 -mt-[1px]"
										ariaLabel="Lugar"
										color="light"
									/>
									<span className="font-bold">Lugar:</span>
								</div>
								<div>
									<p className="font-normal">
										Segundo nivel del Patio de Letras
									</p>
								</div>
							</div>
							<div className="flex gap-2 items-start">
								<div className="flex items-center gap-1 shrink-0">
									<ImageIcon
										className="shrink-0 -mt-[1px]"
										ariaLabel="Lugar"
										color="light"
									/>
									<span className="font-bold">Obras:</span>
								</div>
								<div>
									<p className="font-normal">
										115 piezas en exhibición
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-[72px]">
						<h2 className="font-bold text-xl leading-[30px] mb-10">
							Algunas piezas de la colección
						</h2>
						<div className="grid grid-cols-3 gap-x-[26px] gap-y-[25px]">
							{exhibitions.map((exhibition, index) => (
								<ExhibitionsCard key={index} {...exhibition} />
							))}
						</div>
					</div>
					<div className="mt-[81px]">
						<h2 className="font-bold text-xl leading-[30px] mb-10">
							Galería
						</h2>
						<div className="max-lg:w-full relative">
							<Splide
								onMoved={handleMove}
								ref={splideRef}
								hasTrack={false}
								options={splideOptions}
							>
								<SplideTrack>
									{carouselExhibition.map((img, index) => (
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
									))}
								</SplideTrack>
							</Splide>
							<div className="absolute top-1/2 -translate-y-1/2 -inset-x-[20px] pointer-events-none">
								<div className="container flex justify-between gap-x-2 relative">
									<ArrowButton
										className="pointer-events-auto"
										theme="light"
										onClick={handlePrev}
										direction="left"
										disabled={isPrevDisabled}
									/>
									<ArrowButton
										className="pointer-events-auto"
										theme="light"
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
		</Layout>
	);
}
