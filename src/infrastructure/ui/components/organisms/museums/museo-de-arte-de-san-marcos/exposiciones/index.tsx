import ImageIcon from '@/infrastructure/ui/components/atoms/icons/imagen-icon'
import OutlinePlaceIcon from '@/infrastructure/ui/components/atoms/icons/outilne-place-icon'
import Link from 'next/link'
import React, { useRef } from 'react'

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

const Exposiciones = () => {

	const splideRefExpoArte = useRef<ExtendedSplideType>(null);
	const splideRefExpoUniversidad = useRef<ExtendedSplideType>(null);
	const splideRefExpoBuenVivir = useRef<ExtendedSplideType>(null);
	const splideRefExpoTemporales = useRef<ExtendedSplideType>(null);

	const splideOptions = {
		type: 'slide',
		width: '100%',
		fixedWidth: '184px',
		arrows: false,
		pagination: false,
		gap: '24px',
		perMove: 1,
		breakpoints: {
			1024: {
				fixedWidth: "100%",
				perMove: 1,
			},
		},
	};

	const { handlePrev: handlePrevExpoArte, handleNext: handleNextExpoArte, handleMove: handleMoveExpoArte, isPrevDisabled: isPrevDisabledExpoArte, isNextDisabled: isNextDisabledExpoArte } = useSplideControls(splideRefExpoArte);
	const { handlePrev: handlePrevExpoUniversidad, handleNext: handleNextExpoUniversidad, handleMove: handleMoveExpoUniversidad, isPrevDisabled: isPrevDisabledExpoUniversidad, isNextDisabled: isNextDisabledExpoUniversidad } = useSplideControls(splideRefExpoUniversidad);
	const { handlePrev: handlePrevExpoBuenVivir, handleNext: handleNextExpoBuenVivir, handleMove: handleMoveExpoBuenVivir, isPrevDisabled: isPrevDisabledExpoBuenVivir, isNextDisabled: isNextDisabledExpoBuenVivir } = useSplideControls(splideRefExpoBuenVivir);
	const { handlePrev: handlePrevExpoTemporales, handleNext: handleNextExpoTemporales, handleMove: handleMoveExpoTemporales, isPrevDisabled: isPrevDisabledExpoTemporales, isNextDisabled: isNextDisabledExpoTemporales } = useSplideControls(splideRefExpoTemporales);

	return (
		<>
			<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[24px] pb-[56px]">
				<div className="container">
					<p className="max-w-[641px] leading-[24px] text-dark-blue-2">Los invitamos a explorar y valorar el arte peruano de diversas regiones, tendencias y periodos, celebrando la pluralidad de saberes, memorias e historias de vida presentes en cada una de las obras que integran la significativa colección del Museo de Arte de San Marcos.</p>
				</div>
			</div>
			<div className="px-4 lg:px-[104px] gap-5 bg-black text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-museo-arte-san-marcos-2.svg')] bg-no-repeat bg-[-123px_10px]">
				<div className="container flex flex-col gap-y-8 lg:grid lg:grid-cols-[auto_minmax(0,1fr)] items-start justify-between gap-x-8 relative">
					<div className="max-w-[394px] mt-0 lg:mt-10">
						<span className="text-sm font-semibold mb-1 inline-block">Exposición permenente</span>
						<h3 className="text-[32px] leading-[normal] font-semibold">Arte moderno y contemporáneo</h3>
						<p className="font-medium leading-[24px] mt-6">La exposición dedicada a la colección de arte moderno y contemporáneo fue inaugurada en el año 2014, cuando era director del MASM el poeta y gestor cultural Germán Carnero.</p>
						<div className="flex flex-col gap-y-2 mt-2">
							<div className="flex gap-2 items-start">
								<div className="flex items-center gap-1 shrink-0">
									<OutlinePlaceIcon className="shrink-0 -mt-[1px]" ariaLabel="Lugar" color="light" />
									<span className="font-bold">Lugar:</span>
								</div>
								<div>
									<p className="font-normal">Segundo nivel del Patio de Letras</p>
								</div>
							</div>
							<div className="flex gap-2 items-start">
								<div className="flex items-center gap-1 shrink-0">
									<ImageIcon className="shrink-0 -mt-[1px]" ariaLabel="Lugar" color="light" />
									<span className="font-bold">Obras:</span>
								</div>
								<div>
									<p className="font-normal">115 piezas en exhibición</p>
								</div>
							</div>
						</div>
						<Link href="/museo-de-arte-de-san-marcos/arte-moderno-y-contemporaneo" className="link mt-8 inline-block">
							Leer más
						</Link>
					</div>
					<div className="max-lg:w-full">
						<Splide
							onMoved={handleMoveExpoArte}
							ref={splideRefExpoArte}
							hasTrack={false}
							options={splideOptions}
						>
							<SplideTrack>
								{carouselExhibition.map((img, index) => (
									<SplideSlide key={index}>
										<figure className="max-lg:hidden relative w-[184px] h-[512px] flex-shrink-0 rounded-2xl overflow-hidden">
											<Image src={img.imageUrl} className="object-cover" alt={"Exposición"} layout="fill" />
										</figure>
									</SplideSlide>
								))}
							</SplideTrack>
						</Splide>
						<div className="flex justify-end gap-x-2 relative mt-4 pointer-events-none">
							<ArrowButton
								className="pointer-events-auto"
								theme="light"
								onClick={handlePrevExpoArte}
								direction="left"
								disabled={isPrevDisabledExpoArte}
							/>
							<ArrowButton
								className="pointer-events-auto"
								theme="light"
								onClick={handleNextExpoArte}
								direction="right"
								disabled={isNextDisabledExpoArte}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="px-4 lg:px-[104px] gap-5 bg-dark-red-3 text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-3.svg')] bg-no-repeat bg-[-123px_10px]">
				<div className="container flex flex-col gap-y-8 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] items-start justify-between gap-x-8 relative">
					<div className="max-lg:w-full">
						<Splide
							onMoved={handleMoveExpoUniversidad}
							ref={splideRefExpoUniversidad}
							hasTrack={false}
							options={splideOptions}
						>
							<SplideTrack>
								{carouselExhibition.map((img, index) => (
									<SplideSlide key={index}>
										<figure className="max-lg:hidden relative w-[184px] h-[512px] flex-shrink-0 rounded-2xl overflow-hidden">
											<Image src={img.imageUrl} className="object-cover" alt={"Exposición"} layout="fill" />
										</figure>
									</SplideSlide>
								))}
							</SplideTrack>
						</Splide>
						<div className="flex justify-start gap-x-2 relative mt-4 pointer-events-none">
							<ArrowButton
								className="pointer-events-auto"
								theme="light"
								onClick={handlePrevExpoUniversidad}
								direction="left"
								disabled={isPrevDisabledExpoUniversidad}
							/>
							<ArrowButton
								className="pointer-events-auto"
								theme="light"
								onClick={handleNextExpoUniversidad}
								direction="right"
								disabled={isNextDisabledExpoUniversidad}
							/>
						</div>
					</div>
					<div className="max-w-[394px] mt-0 lg:mt-10">
						<span className="text-sm font-semibold mb-1 inline-block">Exposición permenente</span>
						<h3 className="text-[32px] leading-[normal] font-semibold">La universidad como «casa del saber»: Religiosos y laicos</h3>
						<p className="font-medium leading-[24px] mt-6">Esta exposición pone al alcance de los interesados en el género del retrato una brevísima selección de obras de artistas importantes como Cristóbal de Aguilar (activo 1752-1771), Cota Carvallo (1909-1980), José Sabogal (1888-1956) y Etna Velarde (1943-2014), entre otros.</p>
						<div className="flex flex-col gap-y-2 mt-2">
							<div className="flex gap-2 items-start">
								<div className="flex items-center gap-1 shrink-0">
									<OutlinePlaceIcon className="shrink-0 -mt-[1px]" ariaLabel="Lugar" color="light" />
									<span className="font-bold">Lugar:</span>
								</div>
								<div>
									<p className="font-normal">Segundo nivel del Patio de Letras</p>
								</div>
							</div>
							<div className="flex gap-2 items-start">
								<div className="flex items-center gap-1 shrink-0">
									<ImageIcon className="shrink-0 -mt-[1px]" ariaLabel="Lugar" color="light" />
									<span className="font-bold">Obras:</span>
								</div>
								<div>
									<p className="font-normal">22 piezas en exhibición</p>
								</div>
							</div>
						</div>
						<Link href="/museo-de-arte-de-san-marcos/arte-moderno-y-contemporaneo" className="link mt-8 inline-block">
							Leer más
						</Link>
					</div>
				</div>
			</div>
			<div className="px-4 lg:px-[104px] gap-5 bg-green text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-4.svg')] bg-no-repeat bg-[-123px_10px]">
				<div className="container flex flex-col gap-y-8 lg:grid lg:grid-cols-[auto_minmax(0,1fr)] items-start justify-between gap-x-8 relative">
					<div className="max-w-[394px] mt-0 lg:mt-10">
						<span className="text-sm font-semibold mb-1 inline-block">Exposición permenente</span>
						<h3 className="text-[32px] leading-[normal] font-semibold">Buen Vivir / Sumaq Kawsay / Suma Qamaña / Jakonax jatikaxbi jati</h3>
						<p className="font-medium leading-[24px] mt-6">Una selección de obras de la Colección de Arte Popular y del Archivo de Dibujo y Pintura Campesina que revelan un conjunto de saberes y lógicas de relacionarse con el entorno natural.</p>
						<div className="flex flex-col gap-y-2 mt-2">
							<div className="flex gap-2 items-start">
								<div className="flex items-center gap-1 shrink-0">
									<OutlinePlaceIcon className="shrink-0 -mt-[1px]" ariaLabel="Lugar" color="light" />
									<span className="font-bold">Lugar:</span>
								</div>
								<div>
									<p className="font-normal">Segundo nivel del Patio de Letras</p>
								</div>
							</div>
							<div className="flex gap-2 items-start">
								<div className="flex items-center gap-1 shrink-0">
									<ImageIcon className="shrink-0 -mt-[1px]" ariaLabel="Lugar" color="light" />
									<span className="font-bold">Obras:</span>
								</div>
								<div>
									<p className="font-normal">-Falta info-</p>
								</div>
							</div>
						</div>
						<Link href="/museo-de-arte-de-san-marcos/arte-moderno-y-contemporaneo" className="link mt-8 inline-block">
							Leer más
						</Link>
					</div>
					<div className="max-lg:w-full">
						<Splide
							onMoved={handleMoveExpoBuenVivir}
							ref={splideRefExpoBuenVivir}
							hasTrack={false}
							options={splideOptions}
						>
							<SplideTrack>
								{carouselExhibition.map((img, index) => (
									<SplideSlide key={index}>
										<figure className="max-lg:hidden relative w-[184px] h-[512px] flex-shrink-0 rounded-2xl overflow-hidden">
											<Image src={img.imageUrl} className="object-cover" alt={"Exposición"} layout="fill" />
										</figure>
									</SplideSlide>
								))}
							</SplideTrack>
						</Splide>
						<div className="flex justify-end gap-x-2 relative mt-4 pointer-events-none">
							<ArrowButton
								className="pointer-events-auto"
								theme="light"
								onClick={handlePrevExpoBuenVivir}
								direction="left"
								disabled={isPrevDisabledExpoBuenVivir}
							/>
							<ArrowButton
								className="pointer-events-auto"
								theme="light"
								onClick={handleNextExpoBuenVivir}
								direction="right"
								disabled={isNextDisabledExpoBuenVivir}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="px-4 lg:px-[104px] gap-5 bg-red-custom text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-red.svg')] bg-no-repeat bg-[-123px_10px]">
				<div className="container flex flex-col gap-y-8 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] items-start justify-between gap-x-8 relative">
					<div className="max-lg:w-full">
						<Splide
							onMoved={handleMoveExpoTemporales}
							ref={splideRefExpoTemporales}
							hasTrack={false}
							options={splideOptions}
						>
							<SplideTrack>
								{carouselExhibition.map((img, index) => (
									<SplideSlide key={index}>
										<figure className="max-lg:hidden relative w-[184px] h-[512px] flex-shrink-0 rounded-2xl overflow-hidden">
											<Image src={img.imageUrl} className="object-cover" alt={"Exposición"} layout="fill" />
										</figure>
									</SplideSlide>
								))}
							</SplideTrack>
						</Splide>
						<div className="flex justify-start gap-x-2 relative mt-4 pointer-events-none">
							<ArrowButton
								className="pointer-events-auto"
								theme="light"
								onClick={handlePrevExpoTemporales}
								direction="left"
								disabled={isPrevDisabledExpoTemporales}
							/>
							<ArrowButton
								className="pointer-events-auto"
								theme="light"
								onClick={handleNextExpoTemporales}
								direction="right"
								disabled={isNextDisabledExpoTemporales}
							/>
						</div>
					</div>
					<div className="max-w-[394px] mt-0 lg:mt-10">
						<span className="text-sm font-semibold mb-1 inline-block">Eventos</span>
						<h3 className="text-[32px] leading-[normal] font-semibold">Exposiciones temporales</h3>
						<p className="font-medium leading-[24px] mt-6">Surge gracias a la donación de las hermanas Alicia y Celia Bustamante, el historiador Pablo Macera, el Milwaukee Public Museum, entre otros coleccionistas y artistas del arte popular. Cuenta con piezas representativas del arte tradicional peruano.</p>
						<Link href="/agenda-cultural" className="link mt-4 inline-block">
							Explorar
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default Exposiciones