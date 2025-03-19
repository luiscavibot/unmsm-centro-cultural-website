import React from 'react';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import type { Splide as SplideType, ResponsiveOptions } from '@splidejs/splide';
import ArrowButton from '@/ui/components/atoms/buttons/arrow-button';
import Image from 'next/image';
import { conjuntoDeZamponas } from '@/ui/data/direcciones/conjunto-de-zamponas-data';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

interface Props {
	handleMoveConjuntoDeZamponas: () => void;
	splideRefConjuntoDeZamponas: React.RefObject<ExtendedSplideType>;
	splideOptions: ResponsiveOptions;
	isPrevDisabledConjuntoDeZamponas: boolean;
	isNextDisabledConjuntoDeZamponas: boolean;
	handlePrevConjuntoDeZamponas: () => void;
	handleNextConjuntoDeZamponas: () => void;
}

const ConjuntoDeZamponas: React.FC<Props> = ({
	handleMoveConjuntoDeZamponas,
	splideRefConjuntoDeZamponas,
	splideOptions,
	isPrevDisabledConjuntoDeZamponas,
	isNextDisabledConjuntoDeZamponas,
	handlePrevConjuntoDeZamponas,
	handleNextConjuntoDeZamponas,
}) => {
	return (
		<div className="px-4 lg:px-[104px] gap-5 bg-blue-2 text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-1.svg')] bg-no-repeat bg-[-123px_10px]">
			<div className="container flex flex-col gap-y-8 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] items-start justify-between gap-x-8 relative">
				<div className="max-w-[394px] order-2">
					<h3 className="text-[32px] leading-[normal] font-semibold">
						Conjunto de Zampoñas de San Marcos
					</h3>
					<div className="font-medium leading-[24px] mt-6">
						<p className="mb-5">
							El Conjunto de Zampoñas de la UNMSM fue fundado en
							1977 y desde entonces ha difundido de manera
							ininterrumpida el arte del sikuri o ejecución de
							zampoña en sus diferentes versiones. Asimismo, ha
							estado presente en distintos eventos a nivel
							nacional, donde destaca su participación durante dos
							años consecutivos en la festividad de la Virgen de
							la Candelaria en Puno.
						</p>
						<p>
							Tienen dos producciones musicales y han llevado a
							cabo diferentes eventos artísticos culturales de
							gran acogida como son los Encuentros Inter-escolar
							de sikuris, habiendo realizado su décimo quinta
							edición en el 2024.
						</p>
					</div>
				</div>
				<div className="max-lg:w-full">
					<Splide
						onMoved={handleMoveConjuntoDeZamponas}
						ref={splideRefConjuntoDeZamponas}
						hasTrack={false}
						options={splideOptions}
					>
						<SplideTrack>
							{conjuntoDeZamponas.map((img, index) => (
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
							onClick={handlePrevConjuntoDeZamponas}
							direction="left"
							disabled={isPrevDisabledConjuntoDeZamponas}
						/>
						<ArrowButton
							className="pointer-events-auto"
							theme="light"
							onClick={handleNextConjuntoDeZamponas}
							direction="right"
							disabled={isNextDisabledConjuntoDeZamponas}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ConjuntoDeZamponas;
