import Link from 'next/link';
import React from 'react';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType, ResponsiveOptions } from '@splidejs/splide';
import ArrowButton from '@/ui/components/atoms/buttons/arrow-button';
// import carouselExhibition from '@/ui/mocks/exhibition-arte-moderno-y-contemporaneo-carousel';
import Image from 'next/image';
import { exposicionesTemporalesMuseoArtesData } from '@/ui/data/museums/exposiciones/exposiciones-temporales-museo-arte-data';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

interface Props {
	// handleMoveExpoTemporales: () => void;
	splideRefExpoTemporales: React.RefObject<ExtendedSplideType>;
	splideOptions: ResponsiveOptions;
	isPrevDisabledExpoTemporales: boolean;
	isNextDisabledExpoTemporales: boolean;
	handlePrevExpoTemporales: () => void;
	handleNextExpoTemporales: () => void;
}

const ExposicionesTemporales: React.FC<Props> = ({
	// handleMoveExpoTemporales,
	splideRefExpoTemporales,
	splideOptions,
	isPrevDisabledExpoTemporales,
	isNextDisabledExpoTemporales,
	handlePrevExpoTemporales,
	handleNextExpoTemporales,
}) => {
	return (
		<div className="px-4 lg:px-[104px] gap-5 bg-red-custom text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-red.svg')] bg-no-repeat bg-[-123px_10px]">
			<div className="container flex flex-col-reverse lg:flex-col gap-y-8 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] items-start justify-between gap-x-8 relative">
				<div className="max-lg:w-full">
					<Splide
						// onMoved={handleMoveExpoTemporales}
						ref={splideRefExpoTemporales}
						hasTrack={false}
						options={splideOptions}
					>
						<SplideTrack>
							{exposicionesTemporalesMuseoArtesData.map(
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
					<div className="flex justify-end lg:justify-start gap-x-2 relative mt-4 pointer-events-none">
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
				<div className="lg:max-w-[394px]">
					<span className="text-sm font-semibold mb-1 inline-block">
						Eventos
					</span>
					<h3 className="text-2xl md:text-[32px] leading-[normal] font-semibold">
						Exposiciones temporales
					</h3>
					<p className="max-md:text-sm font-medium leading-[24px] mt-6">
						El Centro Cultural de San Marcos organiza exposiciones
						temporales en las salas de sus museos de Arte y de
						Antropología y Arqueología. Estas muestras, cuya
						duración varía según su relevancia y la afluencia de
						público, brindan valiosas experiencias artísticas y
						patrimoniales, enriqueciendo la vivencia cultural de los
						visitantes.
					</p>
					<Link
						href="/agenda-cultural"
						className="link mt-4 inline-block"
					>
						Explorar
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ExposicionesTemporales;
