import React from 'react';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import type { Splide as SplideType, ResponsiveOptions } from '@splidejs/splide';
import ArrowButton from '@/ui/components/atoms/buttons/arrow-button';
import Image from 'next/image';
import { elencoDeMusicaData } from '@/ui/data/direcciones/elenco-de-musica-data';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

interface Props {
	// handleMoveElencoDeMusica: () => void;
	splideRefElencoDeMusica: React.RefObject<ExtendedSplideType>;
	splideOptions: ResponsiveOptions;
	isPrevDisabledElencoDeMusica: boolean;
	isNextDisabledElencoDeMusica: boolean;
	handlePrevElencoDeMusica: () => void;
	handleNextElencoDeMusica: () => void;
}

const ElencoDeMusica: React.FC<Props> = ({
	// handleMoveElencoDeMusica,
	splideRefElencoDeMusica,
	splideOptions,
	isPrevDisabledElencoDeMusica,
	isNextDisabledElencoDeMusica,
	handlePrevElencoDeMusica,
	handleNextElencoDeMusica,
}) => {
	return (
		// <div className="px-4 lg:px-[104px] gap-5 bg-dark-red-3 text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-3.svg')] bg-no-repeat bg-[-123px_10px]">
		<div className="px-4 lg:px-[104px] gap-5 bg-green text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-4.svg')] bg-no-repeat bg-[-123px_10px]">
			<div className="container flex flex-col gap-y-8 lg:grid lg:grid-cols-[auto_minmax(0,1fr)] items-start justify-between gap-x-8 relative">
				<div className="max-lg:w-full order-2">
					<Splide
						// onMoved={handleMoveElencoDeMusica}
						ref={splideRefElencoDeMusica}
						hasTrack={false}
						options={splideOptions}
					>
						<SplideTrack>
							{elencoDeMusicaData.map((img, index) => (
								<SplideSlide key={index}>
									<figure className="relative w-auto h-full flex-shrink-0 lg:rounded-2xl overflow-hidden">
										<Image
											src={img.url}
											className="max-lg:object-contain w-auto h-full mx-auto"
											alt={'Elenco de Música'}
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
							onClick={handlePrevElencoDeMusica}
							direction="left"
							disabled={isPrevDisabledElencoDeMusica}
						/>
						<ArrowButton
							className="pointer-events-auto"
							theme="light"
							onClick={handleNextElencoDeMusica}
							direction="right"
							disabled={isNextDisabledElencoDeMusica}
						/>
					</div>
				</div>
				<div className="lg:max-w-[394px]">
					<h3 className="text-2xl md:text-[32px] leading-[normal] font-semibold">
						Elenco de Música de la Universidad Nacional Mayor de San
						Marcos
					</h3>
					<div className="max-md:text-sm font-medium leading-[24px] mt-6">
						<p>
							El Elenco de Música tiene el exclusivo encargo
							artístico de realizar el acompañamiento de las
							danzas que ejecutan los diferentes elencos del CUF.
							Para ello, hacen necesario uso de los diferentes
							instrumentos musicales autóctonos, tales como
							tarkas, pinkillos, sikus, y quenas; igualmente,
							populares y modernos como bajo electrónico, batería
							y sintetizador. El Elenco de Música también
							interpreta piezas tradicionales y populares en todas
							las variantes de las regiones del Perú, así como
							música latinoamericana. Tiene como integrantes a
							estudiantes de distintas facultades de nuestra
							universidad.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ElencoDeMusica;
