import React from 'react';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType, ResponsiveOptions } from '@splidejs/splide';
import ArrowButton from '@/infrastructure/ui/components/atoms/buttons/arrow-button';
import Image from 'next/image';
import { elencoInfantilData } from '@/infrastructure/ui/data/direcciones/elenco-infantil-data';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

interface Props {
	handleMoveElencoInfantil: () => void;
	splideRefElencoInfantil: React.RefObject<ExtendedSplideType>;
	splideOptions: ResponsiveOptions;
	isPrevDisabledElencoInfantil: boolean;
	isNextDisabledElencoInfantil: boolean;
	handlePrevElencoInfantil: () => void;
	handleNextElencoInfantil: () => void;
}

const ElencoInfantil: React.FC<Props> = ({
	handleMoveElencoInfantil,
	splideRefElencoInfantil,
	splideOptions,
	isPrevDisabledElencoInfantil,
	isNextDisabledElencoInfantil,
	handlePrevElencoInfantil,
	handleNextElencoInfantil,
}) => {
	return (
		// <div className="px-4 lg:px-[104px] gap-5 bg-black text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-1.svg')] bg-no-repeat bg-[-123px_10px]">
		<div className="px-4 lg:px-[104px] gap-5 bg-dark-red-3 text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-3.svg')] bg-no-repeat bg-[-123px_10px]">
			<div className="container flex flex-col gap-y-8 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] items-start justify-between gap-x-8 relative">
				<div className="max-w-[394px] mt-0 lg:mt-10 order-2">
					<h3 className="text-[32px] leading-[normal] font-semibold">
						Elenco Infantil de Danzas de la Universidad Nacional Mayor de San Marcos
					</h3>
					<div className="font-medium leading-[24px] mt-6">
						<p className="mb-5">
							El Elenco Infantil de la UNMSM fue creado en 1999 y está formado por niños y niñas entre los 7 y 12 años de edad, integrantes con muchas ganas de aprender, conocer y difundir nuestra cultura y tradición.
						</p>
						<p className="mb-5">
							En el Elenco Infantil, los niños sociabilizan, comparten, disfrutan y crecen artísticamente, además, con ayuda de la danza, desarrollan su inteligencia corporal y habilidades como coordinación, balance, destreza, fuerza, flexibilidad, velocidad y la capacidad de unir el cuerpo y la mente para una ejecución física óptima.
						</p>
						<p>
							Su formación artística va de la mano con su desarrollo integral, por lo tanto, tenemos como resultado un elenco competitivo, cohesionado y con valores que les sirven para asumir nuevos y grandes retos.
						</p>
					</div>
				</div>
				<div className="max-lg:w-full">
					<Splide
						onMoved={handleMoveElencoInfantil}
						ref={splideRefElencoInfantil}
						hasTrack={false}
						options={splideOptions}
					>
						<SplideTrack>
							{elencoInfantilData.map((img, index) => (
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
							onClick={handlePrevElencoInfantil}
							direction="left"
							disabled={isPrevDisabledElencoInfantil}
						/>
						<ArrowButton
							className="pointer-events-auto"
							theme="light"
							onClick={handleNextElencoInfantil}
							direction="right"
							disabled={isNextDisabledElencoInfantil}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ElencoInfantil;
