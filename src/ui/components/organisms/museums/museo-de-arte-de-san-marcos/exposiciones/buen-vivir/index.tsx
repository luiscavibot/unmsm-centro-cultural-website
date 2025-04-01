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
import { buenVivirSumaqKawsaySumaQamanaJakonaxJatikaxbiJatiData } from '@/ui/data/museums/exposiciones/buen-vivir-sumaq-kawsay-suma-qamana-jakonax-jatikaxbi-jati';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

interface Props {
	handleMoveExpoBuenVivir: () => void;
	splideRefExpoBuenVivir: React.RefObject<ExtendedSplideType>;
	splideOptions: ResponsiveOptions;
	isPrevDisabledExpoBuenVivir: boolean;
	isNextDisabledExpoBuenVivir: boolean;
	handlePrevExpoBuenVivir: () => void;
	handleNextExpoBuenVivir: () => void;
}

const BuenVivir: React.FC<Props> = ({
	handleMoveExpoBuenVivir,
	splideRefExpoBuenVivir,
	splideOptions,
	isPrevDisabledExpoBuenVivir,
	isNextDisabledExpoBuenVivir,
	handlePrevExpoBuenVivir,
	handleNextExpoBuenVivir,
}) => {
	return (
		<div className="px-4 lg:px-[104px] gap-5 bg-green text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-4.svg')] bg-no-repeat bg-[-123px_10px]">
			<div className="container flex flex-col gap-y-8 lg:grid lg:grid-cols-[auto_minmax(0,1fr)] items-start justify-between gap-x-8 relative">
				<div className="lg:max-w-[394px]">
					<span className="text-sm font-semibold mb-1 inline-block">
						Exposición permanente
					</span>
					<h3 className="text-2xl md:text-[32px] leading-[normal] font-semibold">
						Buen Vivir / Sumaq Kawsay / Suma Qamaña / Jakonax Jatikaxbi Jati
					</h3>
					<p className="max-md:text-sm font-medium leading-[24px] mt-6">
						Una selección de obras de la Colección de Arte Popular y
						del Archivo de Dibujo y Pintura Campesina que revelan un
						conjunto de saberes y lógicas de relacionarse con el
						entorno natural.
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
									Sala de las artes andinas y amazónicas -
									Segundo nivel del Patio de letras
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
									83 piezas en exhibición
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
						onMoved={handleMoveExpoBuenVivir}
						ref={splideRefExpoBuenVivir}
						hasTrack={false}
						options={splideOptions}
					>
						<SplideTrack>
							{buenVivirSumaqKawsaySumaQamanaJakonaxJatikaxbiJatiData.map(
								(img, index) => (
									<SplideSlide key={index}>
										<figure className="relative w-auto h-full flex-shrink-0 lg:rounded-2xl overflow-hidden">
											<Image
												src={img.url}
												className="max-lg:object-contain w-auto h-full mx-auto"
												alt={'Exposición Buen Vivir'}
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
					<div className="flex justify-end gap-x-2 relative mt-4 pointer-events-none">
						<ArrowButton
							className="pointer-events-auto"
							theme="light"
							onClick={handlePrevExpoBuenVivir}
							direction="left"
							disabled={isPrevDisabledExpoBuenVivir}
						/>
						<ArrowButton
							className="pointer-events-auto"
							theme="light"
							onClick={handleNextExpoBuenVivir}
							direction="right"
							disabled={isNextDisabledExpoBuenVivir}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BuenVivir;
