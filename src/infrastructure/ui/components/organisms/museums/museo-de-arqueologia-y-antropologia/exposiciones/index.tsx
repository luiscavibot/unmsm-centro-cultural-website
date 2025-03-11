import ImageIcon from '@/infrastructure/ui/components/atoms/icons/imagen-icon';
import OutlinePlaceIcon from '@/infrastructure/ui/components/atoms/icons/outilne-place-icon';
// import Link from 'next/link';
import React, { useRef } from 'react';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType } from '@splidejs/splide';
import ArrowButton from '@/infrastructure/ui/components/atoms/buttons/arrow-button';
import useSplideControls from '@/infrastructure/ui/hooks/useSplideControls';
// import carouselExhibition from '@/infrastructure/ui/mocks/exhibition-arte-moderno-y-contemporaneo-carousel';
import Image from 'next/image';
import { tesorosArqueologicosDeSanMarcosData } from '@/infrastructure/ui/data/museums/tesoros-arqueologicos-de-san-marcos-data';
import { exposicionesTemporalesData } from '@/infrastructure/ui/data/museums/exposiciones/exposiciones-temporales-data';
import Link from 'next/link';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

const Exposiciones = () => {
	const splideRefExpoTesoros = useRef<ExtendedSplideType>(null);
	const splideRefExpoTemporales = useRef<ExtendedSplideType>(null);

	const splideOptions = {
		type: 'slide',
		width: '100%',
		fixedWidth: '390px',
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
		handlePrev: handlePrevExpoTesoros,
		handleNext: handleNextExpoTesoros,
		handleMove: handleMoveExpoTesoros,
		isPrevDisabled: isPrevDisabledExpoTesoros,
		isNextDisabled: isNextDisabledExpoTesoros,
	} = useSplideControls(splideRefExpoTesoros);
	const {
		handlePrev: handlePrevExpoTemporales,
		handleNext: handleNextExpoTemporales,
		handleMove: handleMoveExpoTemporales,
		isPrevDisabled: isPrevDisabledExpoTemporales,
		isNextDisabled: isNextDisabledExpoTemporales,
	} = useSplideControls(splideRefExpoTemporales);

	return (
		<>
			<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[24px] pb-[56px]">
				<div className="container">
					<p className="max-w-[641px] leading-[24px] text-dark-blue-2">
						Nuestras exposiciones permanentes y temporales te
						invitan a recorrer el tiempo y el espacio, descubriendo
						historias fascinantes que nos conectan con el pasado, el
						presente y el futuro. Cada sala de nuestro museo guarda
						tesoros únicos, desde obras maestras de grandes
						artistas.
					</p>
				</div>
			</div>
			<div className="px-4 lg:px-[104px] gap-5 bg-black text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-1.svg')] bg-no-repeat bg-[-123px_10px]">
				<div className="container flex flex-col gap-y-8 lg:grid lg:grid-cols-[auto_minmax(0,1fr)] items-start justify-between gap-x-8 relative">
					<div className="max-w-[394px] mt-0 lg:mt-10">
						<span className="text-sm font-semibold mb-1 inline-block">
							Exposición permanente
						</span>
						<h3 className="text-[32px] leading-[normal] font-semibold">
							Tesoros Arqueológicos de San Marcos
						</h3>
						<p className="font-medium leading-[24px] mt-6">
							Adéntrate en la historia milenaria del Perú a través
							de una exposición que nos conecta con las antiguas
							civilizaciones que dieron forma a nuestra identidad
							cultural. Esta colección única nos revela piezas de
							cerámica, textiles, esculturas y objetos
							ceremoniales.
						</p>
						<div className="flex flex-col gap-y-2 mt-2">
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
						{/* <Link
							href="/museo-de-arqueologia-y-antropologia/tesoros-arqueologicos-de-san-marcos"
							className="link mt-8 inline-block"
						>
							Leer más
						</Link> */}
					</div>
					<div className="max-lg:w-full">
						<Splide
							onMoved={handleMoveExpoTesoros}
							ref={splideRefExpoTesoros}
							hasTrack={false}
							options={splideOptions}
						>
							<SplideTrack>
								{tesorosArqueologicosDeSanMarcosData.map(
									(img, index) => (
										<SplideSlide key={index}>
											<figure className="max-lg:hidden relative w-[390px] h-[512px] flex-shrink-0 rounded-2xl overflow-hidden">
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
						<div className="flex justify-end gap-x-2 relative mt-4 pointer-events-none">
							<ArrowButton
								className="pointer-events-auto"
								theme="light"
								onClick={handlePrevExpoTesoros}
								direction="left"
								disabled={isPrevDisabledExpoTesoros}
							/>
							<ArrowButton
								className="pointer-events-auto"
								theme="light"
								onClick={handleNextExpoTesoros}
								direction="right"
								disabled={isNextDisabledExpoTesoros}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="px-4 lg:px-[104px] gap-5 bg-green text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-4.svg')] bg-no-repeat bg-[-123px_10px]">
				<div id="test" className="container flex flex-col gap-y-8 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] items-start justify-between gap-x-8 relative">
					<div className="max-w-[394px] mt-0 lg:mt-10 order-2">
						<span className="text-sm font-semibold mb-1 inline-block">
							Exposición finalizada
						</span>
						<h3 className="text-[32px] leading-[normal] font-semibold">
							Paracas, Vientos del Sur
						</h3>
						<p className="font-medium leading-[24px] mt-6">
							Realizada en 2016, esta exposición contó con piezas del catálogo &quot;Colección Paracas Joyas Sanmarquinas&quot;, que puede revisarse en el enlace.
						</p>
						<Link
							href="https://www.flickr.com/photos/190570086@N08/albums/72157716272700246/"
							className="link mt-4 inline-block"
							target="_blank"
						>
							Explorar
						</Link>
					</div>
					<div className="max-lg:w-full order-1">
						<Splide
							onMoved={handleMoveExpoTemporales}
							ref={splideRefExpoTemporales}
							hasTrack={false}
							options={splideOptions}
						>
							<SplideTrack>
								{exposicionesTemporalesData.map(
									(img, index) => (
										<SplideSlide key={index}>
											<figure className="max-lg:hidden relative w-[390px] h-[512px] flex-shrink-0 rounded-2xl overflow-hidden">
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
				</div>
			</div>
			<div className="px-4 lg:px-[104px] gap-5 bg-red-custom text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-red.svg')] bg-no-repeat bg-[-123px_10px]">
				<div id="test" className="container flex flex-col gap-y-8 lg:grid lg:grid-cols-[auto_minmax(0,1fr)] items-start justify-between gap-x-8 relative">
					<div className="max-lg:w-full order-1 lg:order-2">
						<Splide
							onMoved={handleMoveExpoTemporales}
							ref={splideRefExpoTemporales}
							hasTrack={false}
							options={splideOptions}
						>
							<SplideTrack>
								{exposicionesTemporalesData.map(
									(img, index) => (
										<SplideSlide key={index}>
											<figure className="max-lg:hidden relative w-[390px] h-[512px] flex-shrink-0 rounded-2xl overflow-hidden">
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
						<div className="flex justify-end gap-x-2 relative mt-4 pointer-events-none">
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
					<div className="max-w-[394px] mt-0 lg:mt-10 order-2 lg:order-1">
						<span className="text-sm font-semibold mb-1 inline-block">
							Eventos
						</span>
						<h3 className="text-[32px] leading-[normal] font-semibold">
							Exposiciones temporales
						</h3>
						<p className="font-medium leading-[24px] mt-6">
							El Centro Cultural de San Marcos organiza exposiciones temporales en las salas de sus museos de Arte y de Antropología y Arqueología. Estas muestras, cuya duración varía según su relevancia y la afluencia de público, brindan valiosas experiencias artísticas y patrimoniales, enriqueciendo la vivencia cultural de los visitantes.
						</p>
						{/* <Link
							href="/agenda-cultural"
							className="link mt-4 inline-block"
						>
							Explorar
						</Link> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Exposiciones;
