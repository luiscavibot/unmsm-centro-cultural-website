// import ImageIcon from '@/ui/components/atoms/icons/imagen-icon'
// import OutlinePlaceIcon from '@/ui/components/atoms/icons/outilne-place-icon'
// import Link from 'next/link'
import React from 'react';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType, ResponsiveOptions } from '@splidejs/splide';
import ArrowButton from '@/ui/components/atoms/buttons/arrow-button';
import Image from 'next/image';
import { elencoTallerData } from '@/ui/data/direcciones/elenco-taller-data';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

interface Props {
	// handleMoveElencoTaller: () => void;
	splideRefElencoTaller: React.RefObject<ExtendedSplideType>;
	splideOptions: ResponsiveOptions;
	isPrevDisabledElencoTaller: boolean;
	isNextDisabledElencoTaller: boolean;
	handlePrevElencoTaller: () => void;
	handleNextElencoTaller: () => void;
}

const ElencoTaller: React.FC<Props> = ({
	// handleMoveElencoTaller,
	splideRefElencoTaller,
	splideOptions,
	isPrevDisabledElencoTaller,
	isNextDisabledElencoTaller,
	handlePrevElencoTaller,
	handleNextElencoTaller,
}) => {
	return (
		<div className="px-4 lg:px-[104px] gap-5 bg-dark-red-3 text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-3.svg')] bg-no-repeat bg-[-123px_10px]">
			<div className="container flex flex-col-reverse lg:flex-col gap-y-8 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] items-start justify-between gap-x-8 relative">
				<div className="max-lg:w-full">
					<Splide
						// onMoved={handleMoveElencoTaller}
						ref={splideRefElencoTaller}
						hasTrack={false}
						options={splideOptions}
					>
						<SplideTrack>
							{elencoTallerData.map((img, index) => (
								<SplideSlide key={index}>
									<figure className="relative w-auto h-full flex-shrink-0 lg:rounded-2xl overflow-hidden">
										<Image
											src={img.url}
											className="max-lg:object-contain w-auto h-full mx-auto"
											alt={'Elenco Taller'}
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
							onClick={handlePrevElencoTaller}
							direction="left"
							disabled={isPrevDisabledElencoTaller}
						/>
						<ArrowButton
							className="pointer-events-auto"
							theme="light"
							onClick={handleNextElencoTaller}
							direction="right"
							disabled={isNextDisabledElencoTaller}
						/>
					</div>
				</div>
				<div className="lg:max-w-[394px]">
					<h3 className="text-2xl md:text-[32px] leading-[normal] font-semibold">
						Elenco Taller del Centro Universitario de Folklore
					</h3>
					<div className="max-md:text-sm font-medium leading-[24px] mt-6">
						<p className="mb-5">
							El Elenco Taller del Centro Universitario de Folklore (CUF) se caracteriza por tener como integrantes a estudiantes del CUF de la Decana de América, quienes buscan ser difusores técnicos de la danza tradicional y formadores en diversidad cultural en las diferentes instituciones y realidades educativas del Perú.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ElencoTaller;
