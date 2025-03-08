import Link from 'next/link';
import React from 'react';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType, ResponsiveOptions } from '@splidejs/splide';
import ArrowButton from '@/infrastructure/ui/components/atoms/buttons/arrow-button';
// import carouselExhibition from '@/infrastructure/ui/mocks/exhibition-arte-moderno-y-contemporaneo-carousel';
import Image from 'next/image';
import { exposicionesTemporalesData } from '@/infrastructure/ui/data/museums/exposiciones/exposiciones-temporales-data';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

interface Props {
	handleMoveExpoTemporales: () => void;
	splideRefExpoTemporales: React.RefObject<ExtendedSplideType>;
	splideOptions: ResponsiveOptions;
	isPrevDisabledExpoTemporales: boolean;
	isNextDisabledExpoTemporales: boolean;
	handlePrevExpoTemporales: () => void;
	handleNextExpoTemporales: () => void;
}

const ExposicionesTemporales: React.FC<Props> = ({
	handleMoveExpoTemporales,
	splideRefExpoTemporales,
	splideOptions,
	isPrevDisabledExpoTemporales,
	isNextDisabledExpoTemporales,
	handlePrevExpoTemporales,
	handleNextExpoTemporales,
}) => {
	return (
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
							{exposicionesTemporalesData.map((img, index) => (
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
					<span className="text-sm font-semibold mb-1 inline-block">
						Eventos
					</span>
					<h3 className="text-[32px] leading-[normal] font-semibold">
						Exposiciones temporales
					</h3>
					<p className="font-medium leading-[24px] mt-6">
						El Centro Cultural de San Marcos organiza exposiciones temporales en las salas de sus museos de Arte y de Antropología y Arqueología. Estas muestras, cuya duración varía según su relevancia y la afluencia de público, brindan valiosas experiencias artísticas y patrimoniales, enriqueciendo la vivencia cultural de los visitantes
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
