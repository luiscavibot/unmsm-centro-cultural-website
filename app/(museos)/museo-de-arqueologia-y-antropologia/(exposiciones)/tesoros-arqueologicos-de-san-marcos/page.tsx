'use client';

import Badge from '@/ui/components/atoms/badge';
import ImageIcon from '@/ui/components/atoms/icons/imagen-icon';
import OutlinePlaceIcon from '@/ui/components/atoms/icons/outilne-place-icon';
import Title from '@/ui/components/atoms/title';
import ExhibitionsCard from '@/ui/components/molecules/exhibitions-card';
import Layout from '@/ui/components/organisms/shared/layout';
import exhibitions from '@/ui/mocks/exhibitions-arte-moderno-y-contemporaneo';
import React, { useRef } from 'react';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType } from '@splidejs/splide';
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
		title: 'Museo de Arqueología y Antropología',
		path: '/museo-de-arqueologia-y-antropologia',
	},
	{
		title: 'Tesoros Arqueológicos de San Marcos',
		path: '/tesoros-arqueologicos-de-san-marcos',
	},
];

export default function TesorosAqueologicosDeSanMarcos() {
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
			portadaImage="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-agenda-cultural.webp"
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
							Tesoros Arqueológicos de San Marcos
						</Title>
						<div className="space-y-4">
							<p>
								El Museo de Arqueología y Antropología de la
								Universidad Nacional Mayor de San Marcos (MAA),
								presenta la exposición museográfica: “Tesoros
								Arqueológicos de San Marcos”, la cual es una
								selección representativa de nuestras
								colecciones, las cuales comenzaron a generarse
								por las constantes expediciones científicas
								realizadas por Julio C. Tello durante la primera
								década del siglo XX.
							</p>
							<p>
								Entre 1919 y 1940, las primeras colecciones
								fueron expuestas en el 2° nivel del Patio de
								Letras de la Casona de San Marcos. En 1946 las
								colecciones fueron trasladadas y expuestas en el
								Museo Nacional de Arqueología, Antropología e
								Historia del Perú (MNAAHP), conformando una
								síntesis ilustrativa del desarrollo de las
								sociedades prehispánicas. Posteriormente, una
								parte de las colecciones retornó a la UNMSM,
								permaneciendo aún en el MNAAHP varios objetos.
								El patrimonio arqueológico de nuestra
								universidad incluye ejemplares de las distintas
								sociedades prehispánicas, con una antigüedad de
								alrededor de 14,000 años hasta el fin del
								Imperio Inca en el siglo XVI de nuestra era.
							</p>
							<p>
								Además, la sala de &quot;Textiles
								Prehispánicos&quot;, forma parte de la
								exposición permanente &quot;Tesoros
								Arqueológicos de San Marcos&quot;. En esta sala
								podrás apreciar una importante selección de
								tejidos de nuestra colección, representativos de
								las principales sociedades prehispánicas del
								Perú, como Paracas, Nasca, Wari, Ychsma e Inca.
								Esta exposición no solo celebra la riqueza
								cultural del antiguo Perú, sino que también nos
								compromete a proteger y conservar nuestro
								patrimonio arqueológico.
							</p>
						</div>
						<div className="flex flex-col gap-y-2 mt-6">
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
										Patio de Letras
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-[72px]">
						<h2 className="font-bold text-xl leading-[30px] mb-2">
							Algunas piezas de la colección
						</h2>
						<p className="mb-10">
							Descubre una selección de piezas destacadas de la
							exposición. Además, recuerda que puedes consultar
							fichas informativas en nuestra espacio dedicado en
							ISSUU.
						</p>
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
													src={img.url}
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
