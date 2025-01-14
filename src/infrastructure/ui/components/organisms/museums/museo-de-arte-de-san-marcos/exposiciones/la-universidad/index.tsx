import ImageIcon from '@/infrastructure/ui/components/atoms/icons/imagen-icon';
import OutlinePlaceIcon from '@/infrastructure/ui/components/atoms/icons/outilne-place-icon';
import Link from 'next/link';
import React from 'react';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType, ResponsiveOptions } from '@splidejs/splide';
import ArrowButton from '@/infrastructure/ui/components/atoms/buttons/arrow-button';
import Image from 'next/image';
import { laUniversidadComocasaDelSaberReligiososYLaicosData } from '@/infrastructure/ui/data/museums/exposiciones/la-universidad-comocasa-del-sabe-religiosos-y-laicos';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

interface Props {
	handleMoveExpoUniversidad: () => void;
	splideRefExpoUniversidad: React.RefObject<ExtendedSplideType>;
	splideOptions: ResponsiveOptions;
	isPrevDisabledExpoUniversidad: boolean;
	isNextDisabledExpoUniversidad: boolean;
	handlePrevExpoUniversidad: () => void;
	handleNextExpoUniversidad: () => void;
}

const LaUniversidad: React.FC<Props> = ({
	handleMoveExpoUniversidad,
	splideRefExpoUniversidad,
	splideOptions,
	isPrevDisabledExpoUniversidad,
	isNextDisabledExpoUniversidad,
	handlePrevExpoUniversidad,
	handleNextExpoUniversidad,
}) => {
	return (
		<div className="px-4 lg:px-[104px] gap-5 bg-dark-red-3 text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-3.svg')] bg-no-repeat bg-[-123px_10px]">
			<div className="container flex flex-col gap-y-8 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] items-start justify-between gap-x-8 relative">
				<div className="max-lg:w-full">
					<Splide
						onMoved={handleMoveExpoUniversidad}
						ref={splideRefExpoUniversidad}
						hasTrack={false}
						options={splideOptions}
					>
						<SplideTrack>
							{laUniversidadComocasaDelSaberReligiososYLaicosData.map(
								(img, index) => (
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
								)
							)}
						</SplideTrack>
					</Splide>
					<div className="flex justify-start gap-x-2 relative mt-4 pointer-events-none">
						<ArrowButton
							className="pointer-events-auto"
							theme="light"
							onClick={handlePrevExpoUniversidad}
							direction="left"
							disabled={isPrevDisabledExpoUniversidad}
						/>
						<ArrowButton
							className="pointer-events-auto"
							theme="light"
							onClick={handleNextExpoUniversidad}
							direction="right"
							disabled={isNextDisabledExpoUniversidad}
						/>
					</div>
				</div>
				<div className="max-w-[394px] mt-0 lg:mt-10">
					<span className="text-sm font-semibold mb-1 inline-block">
						Exposición permenente
					</span>
					<h3 className="text-[32px] leading-[normal] font-semibold">
						La universidad como «casa del saber»: Religiosos y
						laicos
					</h3>
					<p className="font-medium leading-[24px] mt-6">
						Esta exposición pone al alcance de los interesados en el
						género del retrato una brevísima selección de obras de
						artistas importantes como Cristóbal de Aguilar (activo
						1752-1771), Cota Carvallo (1909-1980), José Sabogal
						(1888-1956) y Etna Velarde (1943-2014), entre otros.
					</p>
					<div className="flex flex-col gap-y-2 mt-2">
						<div className="flex gap-2 items-start">
							<div className="flex items-center gap-1 shrink-0">
								<OutlinePlaceIcon
									className="shrink-0 -mt-[1px]"
									ariaLabel="Lugar"
									color="light"
								/>
								<span className="font-bold">Lugar:</span>
							</div>
							<div>
								<p className="font-normal">
									Segundo nivel del Patio de Letras
								</p>
							</div>
						</div>
						<div className="flex gap-2 items-start">
							<div className="flex items-center gap-1 shrink-0">
								<ImageIcon
									className="shrink-0 -mt-[1px]"
									ariaLabel="Lugar"
									color="light"
								/>
								<span className="font-bold">Obras:</span>
							</div>
							<div>
								<p className="font-normal">
									22 piezas en exhibición
								</p>
							</div>
						</div>
					</div>
					{/* <Link
						href="/museo-de-arte-de-san-marcos/arte-moderno-y-contemporaneo"
						className="link mt-8 inline-block"
					>
						Leer más
					</Link> */}
				</div>
			</div>
		</div>
	);
};

export default LaUniversidad;
