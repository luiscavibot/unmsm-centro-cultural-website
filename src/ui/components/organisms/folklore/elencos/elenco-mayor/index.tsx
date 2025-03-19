import React from 'react';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType, ResponsiveOptions } from '@splidejs/splide';
import ArrowButton from '@/ui/components/atoms/buttons/arrow-button';
import Image from 'next/image';
import { elencoMayorData } from '@/ui/data/direcciones/elenco-mayor-data';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

interface Props {
	handleMoveElencoMayor: () => void;
	splideRefElencoMayor: React.RefObject<ExtendedSplideType>;
	splideOptions: ResponsiveOptions;
	isPrevDisabledElencoMayor: boolean;
	isNextDisabledElencoMayor: boolean;
	handlePrevElencoMayor: () => void;
	handleNextElencoMayor: () => void;
}

const ElencoMayor: React.FC<Props> = ({
	handleMoveElencoMayor,
	splideRefElencoMayor,
	splideOptions,
	isPrevDisabledElencoMayor,
	isNextDisabledElencoMayor,
	handlePrevElencoMayor,
	handleNextElencoMayor,
}) => {
	return (
		<div className="px-4 lg:px-[104px] gap-5 bg-black text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-1.svg')] bg-no-repeat bg-[-123px_10px]">
			<div className="container flex flex-col gap-y-8 lg:grid lg:grid-cols-[auto_minmax(0,1fr)] items-start justify-between gap-x-8 relative">
				<div className="max-w-[394px]">
					<h3 className="text-[32px] leading-[normal] font-semibold">
						Elenco de Danzas de la Universidad Nacional Mayor de San
						Marcos
					</h3>
					<p className="font-medium leading-[24px] mt-6">
						El Elenco Mayor de Danzas es la unidad artística
						representativa de la universidad en materia de danza.
						Sus inicios data de 1970, desde la conformación misma
						del CUF y sus integrantes son escogidos en su totalidad
						de las diferentes facultades de la UNMSM. Este elenco
						representa oficialmente a la Decana de América en
						diversos eventos a los que se le invita, siempre con
						gran calidad interpretativa y gran reconocimiento del
						público. Se torna además en un colectivo de gran
						integración profesional y cultural, donde se busca
						también complementar la formación profesional e integral
						de sus miembros con las virtudes y valores de la danza
						folklórica peruana.
					</p>
				</div>
				<div className="max-lg:w-full">
					<Splide
						onMoved={handleMoveElencoMayor}
						ref={splideRefElencoMayor}
						hasTrack={false}
						options={splideOptions}
					>
						<SplideTrack>
							{elencoMayorData.map((img, index) => (
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
					<div className="flex justify-end gap-x-2 relative mt-4 pointer-events-none">
						<ArrowButton
							className="pointer-events-auto"
							theme="light"
							onClick={handlePrevElencoMayor}
							direction="left"
							disabled={isPrevDisabledElencoMayor}
						/>
						<ArrowButton
							className="pointer-events-auto"
							theme="light"
							onClick={handleNextElencoMayor}
							direction="right"
							disabled={isNextDisabledElencoMayor}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ElencoMayor;
