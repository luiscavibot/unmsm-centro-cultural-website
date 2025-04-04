// import ImageIcon from '@/ui/components/atoms/icons/imagen-icon'
// import OutlinePlaceIcon from '@/ui/components/atoms/icons/outilne-place-icon'
// import Link from 'next/link'
import React from 'react';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType, ResponsiveOptions } from '@splidejs/splide';
import ArrowButton from '@/ui/components/atoms/buttons/arrow-button';
import Image from 'next/image';
import { conversatoriosData } from '@/ui/data/direcciones/conversatorios-data';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

interface Props {
	// handleMoveConversatorios: () => void;
	splideRefConversatorios: React.RefObject<ExtendedSplideType>;
	splideOptions: ResponsiveOptions;
	isPrevDisabledConversatorios: boolean;
	isNextDisabledConversatorios: boolean;
	handlePrevConversatorios: () => void;
	handleNextConversatorios: () => void;
}

const Conversatorios: React.FC<Props> = ({
	// handleMoveConversatorios,
	splideRefConversatorios,
	splideOptions,
	isPrevDisabledConversatorios,
	isNextDisabledConversatorios,
	handlePrevConversatorios,
	handleNextConversatorios,
}) => {
	return (
		<div className="px-4 lg:px-[104px] gap-5 bg-green text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-4.svg')] bg-no-repeat bg-[-123px_10px]">
			<div className="container flex flex-col gap-y-8 lg:grid lg:grid-cols-[auto_minmax(0,1fr)] items-start justify-between gap-x-8 relative">
				<div className="lg:max-w-[394px]">
					<h3 className="text-2xl md:text-[32px] leading-[normal] font-semibold">
						Conversatorios
					</h3>
					<div className="max-md:text-sm font-medium leading-[24px] mt-6">
						<p className="mb-5">
							Son espacios de reflexión y debate que reúnen a
							cineastas, críticos, investigadores y público
							interesado en discutir temas actuales y relevantes
							del cine.
						</p>
						<p>
							Estos encuentros permiten analizar en profundidad
							cuestiones estéticas, sociales y políticas
							vinculadas al cine, promoviendo la formación de
							audiencias críticas y el intercambio de ideas.
							Además, son una oportunidad para dialogar sobre el
							impacto cultural del cine y su rol como herramienta
							de transformación social.
						</p>
					</div>
				</div>
				<div className="max-lg:w-full">
					<Splide
						// onMoved={handleMoveConversatorios}
						ref={splideRefConversatorios}
						hasTrack={false}
						options={splideOptions}
					>
						<SplideTrack>
							{conversatoriosData.map((img, index) => (
								<SplideSlide key={index}>
									<figure className="relative w-auto h-full flex-shrink-0 lg:rounded-2xl overflow-hidden">
										<Image
											src={img.url}
											className="max-lg:object-contain w-auto h-full mx-auto"
											alt={'Conservatorios'}
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
							onClick={handlePrevConversatorios}
							direction="left"
							disabled={isPrevDisabledConversatorios}
						/>
						<ArrowButton
							className="pointer-events-auto"
							theme="light"
							onClick={handleNextConversatorios}
							direction="right"
							disabled={isNextDisabledConversatorios}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Conversatorios;
