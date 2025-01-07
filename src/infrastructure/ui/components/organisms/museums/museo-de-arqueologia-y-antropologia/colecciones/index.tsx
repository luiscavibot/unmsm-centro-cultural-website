import React, { useRef } from 'react'

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType } from '@splidejs/splide';
import ArrowButton from '@/infrastructure/ui/components/atoms/buttons/arrow-button';
import useSplideControls from '@/infrastructure/ui/hooks/useSplideControls';
import carouselExhibition from '@/infrastructure/ui/mocks/exhibition-arte-moderno-y-contemporaneo-carousel';
import Image from 'next/image';
import ExternalLinkIcon from '@/infrastructure/ui/components/atoms/icons/external-link-icon';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

const Colecciones = () => {

	const splideRefColArchivoJulio = useRef<ExtendedSplideType>(null);

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
				fixedWidth: "100%",
				perMove: 1,
			},
		},
	};

	const { handlePrev: handlePrevColArchivoJulio, handleNext: handleNextColArchivoJulio, handleMove: handleMoveColArchivoJulio, isPrevDisabled: isPrevDisabledColArchivoJulio, isNextDisabled: isNextDisabledColArchivoJulio } = useSplideControls(splideRefColArchivoJulio);

	return (
		<>
			<div className="px-4 lg:px-[104px] bg-dark-white-2 pt-[24px] pb-[56px]">
				<div className="container">
					<p className="max-w-[641px] leading-[24px] text-dark-blue-2">Nuestras colecciones te invitan a recorrer el tiempo y el espacio, descubriendo historias fascinantes que nos conectan con el pasado, el presente y el futuro. Cada sala de nuestro museo guarda tesoros únicos, desde obras maestras de grandes artistas.</p>
				</div>
			</div>
			<div className="px-4 lg:px-[104px] gap-5 bg-black text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-1.svg')] bg-no-repeat bg-[-123px_10px]">
				<div className="container flex flex-col gap-y-8 lg:grid lg:grid-cols-[auto_minmax(0,1fr)] items-start justify-between gap-x-8 relative">
					<div className="max-w-[394px] mt-0 lg:mt-10">
						<span className="text-sm font-semibold mb-1 inline-block">Colección</span>
						<h3 className="text-[32px] leading-[normal] font-semibold">Archivo Julio C. Tello</h3>
						<p className="font-medium leading-[24px] mt-6">Esta colección reúne manuscritos, fotografías y dibujos que reflejan la dedicación, el conocimiento y la pasión del Dr. Tello por preservar y estudiar el rico patrimonio cultural del Perú.</p>
						<span className="mt-6 inline-flex items-center gap-x-2">
							<a href="" className="link">Explorar</a>
							<ExternalLinkIcon className="h-4 w-4 shrink-0" />
						</span>
					</div>
					<div className="max-lg:w-full">
						<Splide
							className="splide-museo"
							onMoved={handleMoveColArchivoJulio}
							ref={splideRefColArchivoJulio}
							hasTrack={false}
							options={splideOptions}
						>
							<SplideTrack>
								{carouselExhibition.map((img, index) => (
									<SplideSlide key={index}>
										<figure className="max-lg:hidden relative w-[390px] h-[512px] flex-shrink-0 rounded-2xl overflow-hidden">
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
								onClick={handlePrevColArchivoJulio}
								direction="left"
								disabled={isPrevDisabledColArchivoJulio}
							/>
							<ArrowButton
								className="pointer-events-auto"
								theme="light"
								onClick={handleNextColArchivoJulio}
								direction="right"
								disabled={isNextDisabledColArchivoJulio}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Colecciones