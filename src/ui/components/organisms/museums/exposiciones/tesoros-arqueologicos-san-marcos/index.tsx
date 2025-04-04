import ImageIcon from '@/ui/components/atoms/icons/imagen-icon';
import OutlinePlaceIcon from '@/ui/components/atoms/icons/outilne-place-icon';
// import Link from 'next/link';
import React from 'react';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType, ResponsiveOptions } from '@splidejs/splide';
import ArrowButton from '@/ui/components/atoms/buttons/arrow-button';
// import carouselExhibition from '@/ui/mocks/exhibition-arte-moderno-y-contemporaneo-carousel';
import Image from 'next/image';
import { tesorosArqueologicosDeSanMarcosData } from '@/ui/data/museums/tesoros-arqueologicos-de-san-marcos-data';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

interface Props {
	// handleMoveExpoTesoros: () => void;
	splideRefExpoTesoros: React.RefObject<ExtendedSplideType>;
	splideOptions: ResponsiveOptions;
	isPrevDisabledExpoTesoros: boolean;
	isNextDisabledExpoTesoros: boolean;
	handlePrevExpoTesoros: () => void;
	handleNextExpoTesoros: () => void;
}

const TesorosArqueologicosSanMarcos: React.FC<Props> = ({
	// handleMoveExpoTesoros,
	splideRefExpoTesoros,
	splideOptions,
	isPrevDisabledExpoTesoros,
	isNextDisabledExpoTesoros,
	handlePrevExpoTesoros,
	handleNextExpoTesoros,
}) => {
	return (
		<div className="px-4 lg:px-[104px] gap-5 bg-blue-2 text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-blue.svg')] bg-no-repeat bg-[-123px_10px]">
			<div className="container flex flex-col-reverse lg:flex-col gap-y-8 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] items-start justify-between gap-x-8 relative">
				<div className="max-lg:w-full">
					<Splide
						// onMoved={handleMoveExpoTesoros}
						ref={splideRefExpoTesoros}
						hasTrack={false}
						options={splideOptions}
					>
						<SplideTrack>
							{tesorosArqueologicosDeSanMarcosData.map(
								(img, index) => (
									<SplideSlide key={index}>
										<figure className="relative w-auto h-full flex-shrink-0 lg:rounded-2xl overflow-hidden">
											<Image
												src={img.url}
												className="max-lg:object-contain w-auto h-full mx-auto"
												alt={'Exposición de tesoros arqueológicos de San Marcos'}
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
							onClick={handlePrevExpoTesoros}
							direction="left"
							disabled={isPrevDisabledExpoTesoros}
						/>
						<ArrowButton
							className="pointer-events-auto"
							theme="light"
							onClick={handleNextExpoTesoros}
							direction="right"
							disabled={isNextDisabledExpoTesoros}
						/>
					</div>
				</div>
				<div className="lg:max-w-[394px]">
					<span className="text-sm font-semibold mb-1 inline-block">
						Exposición permanente
					</span>
					<h3 className="text-2xl md:text-[32px] leading-[normal] font-semibold">
						Tesoros Arqueológicos de San Marcos
					</h3>
					<p className="max-md:text-sm font-medium leading-[24px] mt-6">
						Explora la historia milenaria del Perú a través de
						una exposición en la que exploramos el pasado mediante
						las colecciones: conjunto razonado de objetos vinculados
						con actividades, tiempo, lugares y personas; además, de
						ser portadores de memoria. Esta exposición única nos
						revela piezas de cerámica, textiles, esculturas de
						piedra y objetos ceremoniales.
					</p>
					<div className="flex flex-col gap-y-2 mt-2 max-md:text-sm">
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
									Primer nivel del Patio de Letras
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
									65 piezas en exhibición
								</p>
							</div>
						</div>
					</div>
					{/* <Link
						href="/museo-de-arqueologia-y-antropologia/tesoros-arqueologicos-de-san-marcos"
						className="link mt-8 inline-block"
					>
						Leer más
					</Link> */}
				</div>
			</div>
		</div>
	);
};

export default TesorosArqueologicosSanMarcos;
