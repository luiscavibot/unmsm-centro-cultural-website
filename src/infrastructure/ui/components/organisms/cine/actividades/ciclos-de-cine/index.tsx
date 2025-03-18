import React from 'react';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType, ResponsiveOptions } from '@splidejs/splide';
import ArrowButton from '@/infrastructure/ui/components/atoms/buttons/arrow-button';
import Image from 'next/image';
import { ciclosDeCineData } from '@/infrastructure/ui/data/direcciones/ciclos-de-cine-data';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

interface Props {
	handleMoveCiclosDeCine: () => void;
	splideRefCiclosDeCine: React.RefObject<ExtendedSplideType>;
	splideOptions: ResponsiveOptions;
	isPrevDisabledCiclosDeCine: boolean;
	isNextDisabledCiclosDeCine: boolean;
	handlePrevCiclosDeCine: () => void;
	handleNextCiclosDeCine: () => void;
}

const CiclosDeCine: React.FC<Props> = ({
	handleMoveCiclosDeCine,
	splideRefCiclosDeCine,
	splideOptions,
	isPrevDisabledCiclosDeCine,
	isNextDisabledCiclosDeCine,
	handlePrevCiclosDeCine,
	handleNextCiclosDeCine,
}) => {
	return (
		<div className="px-4 lg:px-[104px] gap-5 bg-black text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-1.svg')] bg-no-repeat bg-[-123px_10px]">
			<div className="container flex flex-col gap-y-8 lg:grid lg:grid-cols-[auto_minmax(0,1fr)] items-start justify-between gap-x-8 relative">
				<div className="max-w-[394px]">
					<h3 className="text-[32px] leading-[normal] font-semibold">
						Ciclos de cines
					</h3>
					<div className="font-medium leading-[24px] mt-6">
						<p className="mb-5">
							La dirección organiza ciclos de cine que ofrecen una programación variada y temática. Estos ciclos incluyen también proyecciones al aire libre.
						</p>
						<p className="mb-5">
							Se proyectan tanto clásicos como películas contemporáneas, buscando difundir la riqueza y diversidad del cine local e internacional.
						</p>
						<p>
							Los ciclos incluyen cineforos y discusiones para profundizar en los temas abordados por las películas, fomentando el diálogo entre creadores y público.
						</p>
					</div>
				</div>
				<div className="max-lg:w-full">
					<Splide
						onMoved={handleMoveCiclosDeCine}
						ref={splideRefCiclosDeCine}
						hasTrack={false}
						options={splideOptions}
					>
						<SplideTrack>
							{ciclosDeCineData.map((img, index) => (
								<SplideSlide key={index}>
									<figure className="max-lg:hidden relative w-[390px] h-[512px] flex-shrink-0 rounded-2xl overflow-hidden">
										<Image
											src={img.imageUrl}
											className="object-cover"
											alt={'Exposición'}
											layout="fill"
											quality={100}
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
							onClick={handlePrevCiclosDeCine}
							direction="left"
							disabled={isPrevDisabledCiclosDeCine}
						/>
						<ArrowButton
							className="pointer-events-auto"
							theme="light"
							onClick={handleNextCiclosDeCine}
							direction="right"
							disabled={isNextDisabledCiclosDeCine}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CiclosDeCine;
