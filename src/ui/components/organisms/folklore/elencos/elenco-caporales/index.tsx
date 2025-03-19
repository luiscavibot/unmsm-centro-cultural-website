// import ImageIcon from '@/ui/components/atoms/icons/imagen-icon'
// import OutlinePlaceIcon from '@/ui/components/atoms/icons/outilne-place-icon'
// import Link from 'next/link'
import React from 'react';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType, ResponsiveOptions } from '@splidejs/splide';
import ArrowButton from '@/ui/components/atoms/buttons/arrow-button';
import Image from 'next/image';
import { elencoCaporalesData } from '@/ui/data/direcciones/elenco-caporales-data';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

interface Props {
	handleMoveElencoCaporales: () => void;
	splideRefElencoCaporales: React.RefObject<ExtendedSplideType>;
	splideOptions: ResponsiveOptions;
	isPrevDisabledElencoCaporales: boolean;
	isNextDisabledElencoCaporales: boolean;
	handlePrevElencoCaporales: () => void;
	handleNextElencoCaporales: () => void;
}

const ElencoCaporales: React.FC<Props> = ({
	handleMoveElencoCaporales,
	splideRefElencoCaporales,
	splideOptions,
	isPrevDisabledElencoCaporales,
	isNextDisabledElencoCaporales,
	handlePrevElencoCaporales,
	handleNextElencoCaporales,
}) => {
	return (
		<div className="px-4 lg:px-[104px] gap-5 bg-blue-2 text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-blue.svg')] bg-no-repeat bg-[-123px_10px]">
			<div className="container flex flex-col gap-y-8 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] items-start justify-between gap-x-8 relative">
				<div className="max-lg:w-full">
					<Splide
						onMoved={handleMoveElencoCaporales}
						ref={splideRefElencoCaporales}
						hasTrack={false}
						options={splideOptions}
					>
						<SplideTrack>
							{elencoCaporalesData.map((img, index) => (
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
					<div className="flex justify-start gap-x-2 relative mt-4 pointer-events-none">
						<ArrowButton
							className="pointer-events-auto"
							theme="light"
							onClick={handlePrevElencoCaporales}
							direction="left"
							disabled={isPrevDisabledElencoCaporales}
						/>
						<ArrowButton
							className="pointer-events-auto"
							theme="light"
							onClick={handleNextElencoCaporales}
							direction="right"
							disabled={isNextDisabledElencoCaporales}
						/>
					</div>
				</div>
				<div className="max-w-[394px]">
					<h3 className="text-[32px] leading-[normal] font-semibold">
						Comparsa de Caporales de la Universidad Nacional Mayor
						de San Marcos
					</h3>
					<div className="font-medium leading-[24px] mt-6">
						<p>
							La Comparsa de Caporales de la UNMSM nace en el 2007
							con el objetivo de promover la difusión de las
							danzas altiplánicas en espacios culturales de
							nuestro medio. Desarrolla también danzas denominadas
							“de luces”, como la diablada y morenada. Su
							desempeño ha generado gran impacto en diversas
							actividades, tales como pasacalles, corsos,
							desfiles, entre otros, realizados por diversas
							entidades públicas y privadas.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ElencoCaporales;
