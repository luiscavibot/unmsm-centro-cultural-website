import React from 'react';
import Image from 'next/image';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import type { Splide as SplideType, ResponsiveOptions } from '@splidejs/splide';
import ArrowButton from '@/ui/components/atoms/buttons/arrow-button';
import ExternalLinkIcon from '@/ui/components/atoms/icons/external-link-icon';
import { jimenezBorjaData } from '@/ui/data/museums/jimenez-borja-data';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

interface Props {
	// handleMoveColJimenezBorja: () => void;
	splideRefColJimenezBorja: React.RefObject<ExtendedSplideType>;
	splideOptions: ResponsiveOptions;
	isPrevDisabledColJimenezBorja: boolean;
	isNextDisabledColJimenezBorja: boolean;
	handlePrevColJimenezBorja: () => void;
	handleNextColJimenezBorja: () => void;
}

const JimenezBorja: React.FC<Props> = ({
	// handleMoveColJimenezBorja,
	splideRefColJimenezBorja,
	splideOptions,
	isPrevDisabledColJimenezBorja,
	isNextDisabledColJimenezBorja,
	handlePrevColJimenezBorja,
	handleNextColJimenezBorja,
}) => {
	return (
		<div className="px-4 lg:px-[104px] gap-5 bg-green text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-4.svg')] bg-no-repeat bg-[-123px_10px]">
			<div className="container flex flex-col gap-y-8 lg:grid lg:grid-cols-[auto_minmax(0,1fr)] items-start justify-between gap-x-8 relative">
				<div className="lg:max-w-[394px]">
					<span className="text-sm font-semibold mb-1 inline-block">
						Colección
					</span>
					<h3 className="text-2xl md:text-[32px] leading-[normal] font-semibold">
						Jiménez Borja
					</h3>
					<div className="max-md:text-sm font-medium leading-[24px] mt-6">
						<p>
							Arturo Jiménez Borja investigó los instrumentos
							musicales prehispánicos. Los clasificó de acuerdo a
							la producción del sonido y por el tipo de materia
							prima: a) &ldquo;instrumentos ordinarios&rdquo;,
							elaborados en caña y huesos (aerófonos), semillas
							(idiófonos) y cuero (membranófonos); y b)
							&ldquo;instrumentos elaborados&rdquo;,
							confeccionados sobre metal y arcilla para
							representar diversos objetos sonoros. En 1972 donó
							su colección compuesta por 181 objetos a nuestro
							museo, conformada por instrumentos prehispánicos y
							representaciones de músicos.
						</p>
					</div>
					<p className="mt-6">
						<a
							href="https://flic.kr/s/aHsmTUuJcN"
							className="link inline-flex items-center gap-x-2"
							target="_blank"
						>
							Explorar
							<ExternalLinkIcon className="h-4 w-4 shrink-0" />
						</a>
					</p>
				</div>
				<div className="max-lg:w-full">
					<Splide
						// onMoved={handleMoveColJimenezBorja}
						ref={splideRefColJimenezBorja}
						hasTrack={false}
						options={splideOptions}
					>
						<SplideTrack>
							{jimenezBorjaData.map((img, index) => (
								<SplideSlide key={index}>
									<figure className="relative w-auto h-full flex-shrink-0 lg:rounded-2xl overflow-hidden">
										<Image
											src={img.url}
											className="max-lg:object-contain w-auto h-full mx-auto"
											alt={'Colección Jiménez Borja'}
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
							onClick={handlePrevColJimenezBorja}
							direction="left"
							disabled={isPrevDisabledColJimenezBorja}
						/>
						<ArrowButton
							className="pointer-events-auto"
							theme="light"
							onClick={handleNextColJimenezBorja}
							direction="right"
							disabled={isNextDisabledColJimenezBorja}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JimenezBorja;
