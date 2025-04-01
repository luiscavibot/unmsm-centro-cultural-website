import ImageIcon from '@/ui/components/atoms/icons/imagen-icon';
import OutlinePlaceIcon from '@/ui/components/atoms/icons/outilne-place-icon';
// import Link from 'next/link';
import React from 'react';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType, ResponsiveOptions } from '@splidejs/splide';
import ArrowButton from '@/ui/components/atoms/buttons/arrow-button';
import Image from 'next/image';
import { arteModernoContemporaneoData } from '@/ui/data/museums/exposiciones/arte-moderno-contemporaneo-data';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

interface Props {
	handleMoveExpoArte: () => void;
	splideRefExpoArte: React.RefObject<ExtendedSplideType>;
	splideOptions: ResponsiveOptions;
	isPrevDisabledExpoArte: boolean;
	isNextDisabledExpoArte: boolean;
	handlePrevExpoArte: () => void;
	handleNextExpoArte: () => void;
}

const ArteModerno: React.FC<Props> = ({
	handleMoveExpoArte,
	splideRefExpoArte,
	splideOptions,
	isPrevDisabledExpoArte,
	isNextDisabledExpoArte,
	handlePrevExpoArte,
	handleNextExpoArte,
}) => {
	return (
		<div className="px-4 lg:px-[104px] gap-5 bg-black text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-1.svg')] bg-no-repeat bg-[-123px_10px]">
			<div className="container flex flex-col gap-y-8 lg:grid lg:grid-cols-[auto_minmax(0,1fr)] items-start justify-between gap-x-8 relative">
				<div className="lg:max-w-[394px]">
					<span className="text-sm font-semibold mb-1 inline-block">
						Exposición permanente
					</span>
					<h3 className="text-2xl md:text-[32px] leading-[normal] font-semibold">
						Arte Moderno y Contemporáneo
					</h3>
					<p className="max-md:text-sm font-medium leading-[24px] mt-6">
						La exposición dedicada a la colección de arte moderno y
						contemporáneo fue inaugurada en el año 2010, cuando era
						director del MASM el poeta y gestor cultural Germán
						Carnero.
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
									115 piezas en exhibición
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
				<div className="max-lg:w-full">
					<Splide
						onMoved={handleMoveExpoArte}
						ref={splideRefExpoArte}
						hasTrack={false}
						options={splideOptions}
					>
						<SplideTrack>
							{arteModernoContemporaneoData.map((img, index) => (
								<SplideSlide key={index}>
									<figure className="relative w-auto h-full flex-shrink-0 lg:rounded-2xl overflow-hidden">
										<Image
											src={img.url}
											className="max-lg:object-contain w-auto h-full mx-auto"
											alt={'Exposición Arte Moderno y Contemporáneo'}
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
							onClick={handlePrevExpoArte}
							direction="left"
							disabled={isPrevDisabledExpoArte}
						/>
						<ArrowButton
							className="pointer-events-auto"
							theme="light"
							onClick={handleNextExpoArte}
							direction="right"
							disabled={isNextDisabledExpoArte}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ArteModerno;
