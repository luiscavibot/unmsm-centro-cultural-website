import ImageIcon from '@/ui/components/atoms/icons/imagen-icon';
import OutlinePlaceIcon from '@/ui/components/atoms/icons/outilne-place-icon';
// import Link from 'next/link';
import React, { useRef } from 'react';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import splideOptionsCollections from '@/ui/data/splide-options/splide-options-collections';
import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType } from '@splidejs/splide';
import ArrowButton from '@/ui/components/atoms/buttons/arrow-button';
import useSplideControls from '@/ui/hooks/useSplideControls';
// import carouselExhibition from '@/ui/mocks/exhibition-arte-moderno-y-contemporaneo-carousel';
import Image from 'next/image';
import { tesorosArqueologicosDeSanMarcosData } from '@/ui/data/museums/tesoros-arqueologicos-de-san-marcos-data';
import { exposicionesTemporalesData } from '@/ui/data/museums/exposiciones/exposiciones-temporales-data';
import { paracasVientosDelSurData } from '@/ui/data/museums/exposiciones/paracas-vientos-del-sur-data';
import Link from 'next/link';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

const Exposiciones = () => {
	const splideRefExpoTesoros = useRef<ExtendedSplideType>(null);
	const splideRefParacasVientosDelSur = useRef<ExtendedSplideType>(null);
	const splideRefExpoTemporales = useRef<ExtendedSplideType>(null);

	const {
		handlePrev: handlePrevExpoTesoros,
		handleNext: handleNextExpoTesoros,
		// handleMove: handleMoveExpoTesoros,
		isPrevDisabled: isPrevDisabledExpoTesoros,
		isNextDisabled: isNextDisabledExpoTesoros,
	} = useSplideControls(splideRefExpoTesoros);
	const {
		handlePrev: handlePrevParacasVientosDelSur,
		handleNext: handleNextParacasVientosDelSur,
		// handleMove: handleMoveParacasVientosDelSur,
		isPrevDisabled: isPrevDisabledParacasVientosDelSur,
		isNextDisabled: isNextDisabledParacasVientosDelSur,
	} = useSplideControls(splideRefParacasVientosDelSur);
	const {
		handlePrev: handlePrevExpoTemporales,
		handleNext: handleNextExpoTemporales,
		// handleMove: handleMoveExpoTemporales,
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
						historias fascinantes que nos conectan con el pasado y el
						presente.
					</p>
				</div>
			</div>
			<div className="px-4 lg:px-[104px] gap-5 bg-black text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-1.svg')] bg-no-repeat bg-[-123px_10px]">
				<div className="container flex flex-col gap-y-8 lg:grid lg:grid-cols-[auto_minmax(0,1fr)] items-start justify-between gap-x-8 relative">
					<div className="lg:max-w-[394px]">
						<span className="text-sm font-semibold mb-1 inline-block">
							Exposición permanente
						</span>
						<h3 className="text-2xl md:text-[32px] leading-[normal] font-semibold">
							Tesoros Arqueológicos de San Marcos
						</h3>
						<p className="max-md:text-sm font-medium leading-[24px] mt-6">
							Explora la historia milenaria del Perú a través
							de una exposición que nos conecta con las antiguas
							civilizaciones que dieron forma a nuestra identidad
							cultural. Esta colección única nos revela piezas de
							cerámica, textiles, esculturas y objetos
							ceremoniales.
						</p>
						<div className="flex flex-col gap-y-2 mt-2 max-md:text-sm">
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
										Primer nivel del Patio de Letras
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
										65 piezas en exhibición
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
							// onMoved={handleMoveExpoTesoros}
							ref={splideRefExpoTesoros}
							hasTrack={false}
							options={splideOptionsCollections}
						>
							<SplideTrack>
								{tesorosArqueologicosDeSanMarcosData.map(
									(img, index) => (
										<SplideSlide key={index}>
											<figure className="relative w-auto h-full flex-shrink-0 lg:rounded-2xl overflow-hidden">
												<Image
													src={img.url}
													className="max-lg:object-contain w-auto h-full mx-auto"
													alt={'Exposición Tesoros Arqueológicos de San Marcos'}
													width={700}
													height={700}
													quality={100}
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
				<div
					id="test"
					className="container flex flex-col gap-y-8 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] items-start justify-between gap-x-8 relative"
				>
					<div className="lg:max-w-[394px] lg:order-2">
						<span className="text-sm font-semibold mb-1 inline-block">
							Exposición finalizada
						</span>
						<h3 className="text-2xl md:text-[32px] leading-[normal] font-semibold">
							Paracas, Vientos del Sur
						</h3>
						<p className="max-md:text-sm font-medium leading-[24px] mt-6">
							Realizada en 2016, esta exposición contó con piezas
							del catálogo &quot;Colección Paracas Joyas
							Sanmarquinas&quot;, que puede revisarse en el
							enlace.
						</p>
						<Link
							href="https://www.flickr.com/photos/190570086@N08/albums/72157716272700246/"
							className="link mt-4 inline-block"
							target="_blank"
						>
							Explorar
						</Link>
					</div>
					<div className="max-lg:w-full lg:order-1">
						<Splide
							// onMoved={handleMoveParacasVientosDelSur}
							ref={splideRefParacasVientosDelSur}
							hasTrack={false}
							options={splideOptionsCollections}
						>
							<SplideTrack>
								{paracasVientosDelSurData.map((img, index) => (
									<SplideSlide key={index}>
										<figure className="relative w-auto h-full flex-shrink-0 lg:rounded-2xl overflow-hidden">
											<Image
												src={img.url}
												className="max-lg:object-contain w-auto h-full mx-auto"
												alt={'Exposición Paracas, Vientos del Sur'}
												width={700}
												height={700}
												quality={100}
											/>
										</figure>
									</SplideSlide>
								))}
							</SplideTrack>
						</Splide>
						<div className="flex justify-end lg:justify-start gap-x-2 relative mt-4 pointer-events-none">
							<ArrowButton
								className="pointer-events-auto"
								theme="light"
								onClick={handlePrevParacasVientosDelSur}
								direction="left"
								disabled={isPrevDisabledParacasVientosDelSur}
							/>
							<ArrowButton
								className="pointer-events-auto"
								theme="light"
								onClick={handleNextParacasVientosDelSur}
								direction="right"
								disabled={isNextDisabledParacasVientosDelSur}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="px-4 lg:px-[104px] gap-5 bg-red-custom text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-red.svg')] bg-no-repeat bg-[-123px_10px]">
				<div
					id="test"
					className="container flex flex-col gap-y-8 lg:grid lg:grid-cols-[auto_minmax(0,1fr)] items-start justify-between gap-x-8 relative"
				>
					<div className="max-lg:w-full order-2">
						<Splide
							// onMoved={handleMoveExpoTemporales}
							ref={splideRefExpoTemporales}
							hasTrack={false}
							options={splideOptionsCollections}
						>
							<SplideTrack>
								{exposicionesTemporalesData.map(
									(img, index) => (
										<SplideSlide key={index}>
											<figure className="relative w-auto h-full flex-shrink-0 lg:rounded-2xl overflow-hidden">
												<Image
													src={img.url}
													className="max-lg:object-contain w-auto h-full mx-auto"
													alt={'Exposiciones temporales'}
													width={700}
													height={700}
													quality={100}
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
					<div className="lg:max-w-[394px] order-1">
						<span className="text-sm font-semibold mb-1 inline-block">
							Eventos
						</span>
						<h3 className="text-2xl md:text-[32px] leading-[normal] font-semibold">
							Exposiciones temporales
						</h3>
						<p className="max-md:text-sm font-medium leading-[24px] mt-6">
							El Centro Cultural de San Marcos organiza
							exposiciones temporales en las salas de sus museos
							de Arte y de Antropología y Arqueología. Estas
							muestras, cuya duración varía según su relevancia y
							la afluencia de público, brindan valiosas
							experiencias artísticas y patrimoniales,
							enriqueciendo la vivencia cultural de los
							visitantes.
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
