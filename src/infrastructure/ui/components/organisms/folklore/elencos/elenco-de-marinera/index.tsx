// import ImageIcon from '@/infrastructure/ui/components/atoms/icons/imagen-icon'
// import OutlinePlaceIcon from '@/infrastructure/ui/components/atoms/icons/outilne-place-icon'
// import Link from 'next/link'
import React from 'react';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType, ResponsiveOptions } from '@splidejs/splide';
import ArrowButton from '@/infrastructure/ui/components/atoms/buttons/arrow-button';
import Image from 'next/image';
import { elencoMarineraData } from '@/infrastructure/ui/data/direcciones/elenco-marinera-data';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

interface Props {
	handleMoveElencoDeMarinera: () => void;
	splideRefElencoDeMarinera: React.RefObject<ExtendedSplideType>;
	splideOptions: ResponsiveOptions;
	isPrevDisabledElencoDeMarinera: boolean;
	isNextDisabledElencoDeMarinera: boolean;
	handlePrevElencoDeMarinera: () => void;
	handleNextElencoDeMarinera: () => void;
}

const ElencoDeMarinera: React.FC<Props> = ({
	handleMoveElencoDeMarinera,
	splideRefElencoDeMarinera,
	splideOptions,
	isPrevDisabledElencoDeMarinera,
	isNextDisabledElencoDeMarinera,
	handlePrevElencoDeMarinera,
	handleNextElencoDeMarinera,
}) => {
	return (
		<div className="px-4 lg:px-[104px] gap-5 bg-green text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-4.svg')] bg-no-repeat bg-[-123px_10px]">
			<div className="container flex flex-col gap-y-8 lg:grid lg:grid-cols-[auto_minmax(0,1fr)] items-start justify-between gap-x-8 relative">
				<div className="max-w-[394px] mt-0 lg:mt-10">
					<h3 className="text-[32px] leading-[normal] font-semibold">
						Elenco de marinera
					</h3>
					<p className="font-medium leading-[24px] mt-6">
						Basado en el clásico de Cervantes, este ballet sigue las
						aventuras de Basilio y Quiteria (Kitri), una pareja de
						amantes que desafía a sus familias para estar juntos. Es
						una obra vibrante, llena de energía, color y virtuosismo
						técnico.
					</p>
				</div>
				<div className="max-lg:w-full">
					<Splide
						onMoved={handleMoveElencoDeMarinera}
						ref={splideRefElencoDeMarinera}
						hasTrack={false}
						options={splideOptions}
					>
						<SplideTrack>
							{elencoMarineraData.map((img, index) => (
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
					<div className="flex justify-end gap-x-2 relative mt-4 pointer-events-none">
						<ArrowButton
							className="pointer-events-auto"
							theme="light"
							onClick={handlePrevElencoDeMarinera}
							direction="left"
							disabled={isPrevDisabledElencoDeMarinera}
						/>
						<ArrowButton
							className="pointer-events-auto"
							theme="light"
							onClick={handleNextElencoDeMarinera}
							direction="right"
							disabled={isNextDisabledElencoDeMarinera}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ElencoDeMarinera;
