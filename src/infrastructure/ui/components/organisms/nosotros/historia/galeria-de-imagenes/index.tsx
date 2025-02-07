import React from 'react';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import type { Splide as SplideType, ResponsiveOptions } from '@splidejs/splide';
import ArrowButton from '@/infrastructure/ui/components/atoms/buttons/arrow-button';
import Image from 'next/image';
import { galeriaDeImagenesData } from '@/infrastructure/ui/mocks/nosotros/historia/galeria-de-imagenes-data';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

interface Props {
	handleMoveGaleria: () => void;
	splideRefGaleria: React.RefObject<ExtendedSplideType>;
	splideOptions: ResponsiveOptions;
	isPrevDisabledGaleria: boolean;
	isNextDisabledGaleria: boolean;
	handlePrevGaleria: () => void;
	handleNextGaleria: () => void;
}

const GaleriaDeImagenes: React.FC<Props> = ({
	handleMoveGaleria,
	splideRefGaleria,
	splideOptions,
	isPrevDisabledGaleria,
	isNextDisabledGaleria,
	handlePrevGaleria,
	handleNextGaleria,
}) => {
	return (
		<div className="px-4 lg:px-[104px] gap-5 bg-black text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-1.svg')] bg-no-repeat bg-[-123px_10px]">
			<div className="container flex flex-col gap-y-8 lg:grid lg:grid-cols-[auto_minmax(0,1fr)] items-start justify-between gap-x-8 relative">
				<div className="max-w-[394px] mt-0 lg:mt-10">
					<h2 className="text-[32px] leading-[normal] font-semibold">
					Galería de imágenes
					</h2>
					<p className="font-medium leading-[24px] mt-6">
					Sumérgete en el pasado y presente de uno de los monumentos más emblemáticos de Lima a través de esta galería de imágenes.
					</p>
				</div>
				<div className="max-lg:w-full">
					<Splide
						onMoved={handleMoveGaleria}
						ref={splideRefGaleria}
						hasTrack={false}
						options={splideOptions}
					>
						<SplideTrack>
							{galeriaDeImagenesData.map((img, index) => (
								<SplideSlide key={index}>
									<figure className="max-lg:hidden relative w-[390px] h-[512px] flex-shrink-0 rounded-2xl overflow-hidden">
										<Image
											src={img.imageUrl}
											className="object-cover"
											alt={'Galería de imágenes'}
											layout="fill"
										/>
									</figure>
								</SplideSlide>
							))}
						</SplideTrack>
					</Splide>
					<div className="flex justify-end gap-x-2 relative mt-4 pointer-events-none">
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
	);
};

export default GaleriaDeImagenes;
