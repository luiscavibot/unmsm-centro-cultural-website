// import ImageIcon from '@/ui/components/atoms/icons/imagen-icon'
// import OutlinePlaceIcon from '@/ui/components/atoms/icons/outilne-place-icon'
// import Link from 'next/link'
import React from 'react';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType, ResponsiveOptions } from '@splidejs/splide';
import ArrowButton from '@/ui/components/atoms/buttons/arrow-button';
import Image from 'next/image';
import { elencoMarineraData } from '@/ui/data/direcciones/elenco-marinera-data';

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
				<div className="max-w-[394px]">
					<h3 className="text-[32px] leading-[normal] font-semibold">
						Elenco de Marinera de la Universidad Nacional Mayor de
						San Marcos
					</h3>
					<p className="font-medium leading-[24px] mt-6">
						Esta agrupación se formó en el año 2009, proyectándose
						desde ahí a la búsqueda de objetivos artísticos para el
						Centro Universitario de Folklore. Uno de los principales
						fue la realización de los Concursos Nacionales de
						Marinera Norteña “San Marcos”. Desde su primera edición,
						llevada a cabo en el 2010, este certamen es considerado
						por muchos críticos y conocedores como uno de los
						mejores a nivel nacional. Así se inició un nuevo camino
						pensado en el posicionamiento de este nuevo elenco del
						CUF, que obtiene un significativo crecimiento gracias a
						diversas presentaciones a nivel local y numerosas
						presentaciones en diversas ciudades, tales como Mala
						(Lima), Yungay (Áncash), entre otros escenarios. Su
						relevancia nacional se encumbra en el año 2014 con su
						participación en el Concurso Nacional de Marinera en la
						ciudad de Trujillo, donde obtuvo el segundo lugar con
						una puesta en escena de homenaje a los profesionales de
						la medicina peruana.
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
									<figure className="relative w-auto h-full flex-shrink-0 rounded-2xl overflow-hidden">
										<Image
											src={img.url}
											className="max-lg:object-contain w-auto h-full mx-auto"
											alt={'Eleno de Marinera'}
											width={700}
											height={700}
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
