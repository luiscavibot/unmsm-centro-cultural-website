import React from 'react';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import type { Splide as SplideType, ResponsiveOptions } from '@splidejs/splide';
import ArrowButton from '@/ui/components/atoms/buttons/arrow-button';
import Image from 'next/image';
import { editatonasData } from '@/ui/data/direcciones/editatonas-data';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

interface Props {
	handleMoveEditatonas: () => void;
	splideRefEditatonas: React.RefObject<ExtendedSplideType>;
	splideOptions: ResponsiveOptions;
	isPrevDisabledEditatonas: boolean;
	isNextDisabledEditatonas: boolean;
	handlePrevEditatonas: () => void;
	handleNextEditatonas: () => void;
}

const Editatonas: React.FC<Props> = ({
	handleMoveEditatonas,
	splideRefEditatonas,
	splideOptions,
	isPrevDisabledEditatonas,
	isNextDisabledEditatonas,
	handlePrevEditatonas,
	handleNextEditatonas,
}) => {
	return (
		<div className="px-4 lg:px-[104px] gap-5 bg-dark-red-3 text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-3.svg')] bg-no-repeat bg-[-123px_10px]">
			<div className="container flex flex-col-reverse lg:flex-col gap-y-8 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] items-start justify-between gap-x-8 relative">
				<div className="max-lg:w-full">
					<Splide
						onMoved={handleMoveEditatonas}
						ref={splideRefEditatonas}
						hasTrack={false}
						options={splideOptions}
					>
						<SplideTrack>
							{editatonasData.map((img, index) => (
								<SplideSlide key={index}>
									<figure className="relative w-auto h-full flex-shrink-0 lg:rounded-2xl overflow-hidden">
										<Image
											src={img.url}
											className="max-lg:object-contain w-auto h-full mx-auto"
											alt={'Editatonas'}
											width={700}
											height={700}
											quality={100}
										/>
									</figure>
								</SplideSlide>
							))}
						</SplideTrack>
					</Splide>
					<div className="flex justify-end lg:justify-start gap-x-2 relative mt-4 pointer-events-none">
						<ArrowButton
							className="pointer-events-auto"
							theme="light"
							onClick={handlePrevEditatonas}
							direction="left"
							disabled={isPrevDisabledEditatonas}
						/>
						<ArrowButton
							className="pointer-events-auto"
							theme="light"
							onClick={handleNextEditatonas}
							direction="right"
							disabled={isNextDisabledEditatonas}
						/>
					</div>
				</div>
				<div className="lg:max-w-[394px]">
					<h3 className="text-2xl md:text-[32px] leading-[normal] font-semibold">
						Editatonas
					</h3>
					<div className="max-md:text-sm font-medium leading-[24px] mt-6">
						<p className="mb-5">
							Son encuentros colaborativos que se centran en la
							creación y mejora de entradas en Wikipedia sobre
							cine peruano.
						</p>
						<p>
							Estos eventos buscan documentar películas, cineastas
							y acontecimientos importantes del ámbito
							cinematográfico nacional.
						</p>
						<p>
							A través de estas actividades, intentamos fomentar
							el acceso libre al conocimiento y la preservación de
							la memoria audiovisual en plataformas digitales.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Editatonas;
