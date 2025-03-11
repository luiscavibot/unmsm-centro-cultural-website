// import ImageIcon from '@/infrastructure/ui/components/atoms/icons/imagen-icon'
// import OutlinePlaceIcon from '@/infrastructure/ui/components/atoms/icons/outilne-place-icon'
// import Link from 'next/link'
import React from 'react';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType, ResponsiveOptions } from '@splidejs/splide';
import ArrowButton from '@/infrastructure/ui/components/atoms/buttons/arrow-button';
import Image from 'next/image';
import { elencoJuvenilData } from '@/infrastructure/ui/data/direcciones/elenco-juvenil-data';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

interface Props {
	handleMoveElencoJuvenil: () => void;
	splideRefElencoJuvenil: React.RefObject<ExtendedSplideType>;
	splideOptions: ResponsiveOptions;
	isPrevDisabledElencoJuvenil: boolean;
	isNextDisabledElencoJuvenil: boolean;
	handlePrevElencoJuvenil: () => void;
	handleNextElencoJuvenil: () => void;
}

const ElencoJuvenil: React.FC<Props> = ({
	handleMoveElencoJuvenil,
	splideRefElencoJuvenil,
	splideOptions,
	isPrevDisabledElencoJuvenil,
	isNextDisabledElencoJuvenil,
	handlePrevElencoJuvenil,
	handleNextElencoJuvenil,
}) => {
	return (
		<div className="px-4 lg:px-[104px] gap-5 bg-blue-2 text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-blue.svg')] bg-no-repeat bg-[-123px_10px]">
			<div className="container flex flex-col gap-y-8 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] items-start justify-between gap-x-8 relative">
				<div className="max-lg:w-full">
					<Splide
						onMoved={handleMoveElencoJuvenil}
						ref={splideRefElencoJuvenil}
						hasTrack={false}
						options={splideOptions}
					>
						<SplideTrack>
							{elencoJuvenilData.map((img, index) => (
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
							onClick={handlePrevElencoJuvenil}
							direction="left"
							disabled={isPrevDisabledElencoJuvenil}
						/>
						<ArrowButton
							className="pointer-events-auto"
							theme="light"
							onClick={handleNextElencoJuvenil}
							direction="right"
							disabled={isNextDisabledElencoJuvenil}
						/>
					</div>
				</div>
				<div className="max-w-[394px] mt-0 lg:mt-10">
					<h3 className="text-[32px] leading-[normal] font-semibold">
						Elenco Juvenil de Danzas de la Universidad Nacional Mayor de San Marcos
					</h3>
					<div className="font-medium leading-[24px] mt-6">
						<p className="mb-5">
							El Elenco Juvenil, fundado en 1997, está conformado por jóvenes estudiantes y egresados que buscan fortalecer su formación artística a través de la práctica y difusión de las danzas tradicionales del Perú. Mediante ensayos rigurosos y presentaciones en distintos eventos, el elenco promueve la identidad cultural y el desarrollo escénico de sus integrantes.
						</p>
						<p>
							A lo largo de su trayectoria, ha representado a la universidad en diversos festivales y actividades culturales, consolidándose como un espacio de aprendizaje y 	proyección artística. Con cada presentación, el Elenco Juvenil reafirma su compromiso con la preservación del folklore y su difusión tanto en la comunidad sanmarquina como en el ámbito nacional.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ElencoJuvenil;
