import React from 'react';
import Image from 'next/image';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import type { Splide as SplideType, ResponsiveOptions } from '@splidejs/splide';
import ArrowButton from '@/ui/components/atoms/buttons/arrow-button';
// import ExternalLinkIcon from '@/ui/components/atoms/icons/external-link-icon';
import { expedicionSierraCentralData } from '@/ui/data/museums/expedicion-sierra-central-data';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

interface Props {
	// handleMoveColExpedicionSierraCentral: () => void;
	splideRefColExpedicionSierraCentral: React.RefObject<ExtendedSplideType>;
	splideOptions: ResponsiveOptions;
	isPrevDisabledColExpedicionSierraCentral: boolean;
	isNextDisabledColExpedicionSierraCentral: boolean;
	handlePrevColExpedicionSierraCentral: () => void;
	handleNextColExpedicionSierraCentral: () => void;
}

const ExpedicionSierraCentral: React.FC<Props> = ({
	// handleMoveColExpedicionSierraCentral,
	splideRefColExpedicionSierraCentral,
	splideOptions,
	isPrevDisabledColExpedicionSierraCentral,
	isNextDisabledColExpedicionSierraCentral,
	handlePrevColExpedicionSierraCentral,
	handleNextColExpedicionSierraCentral,
}) => {
	return (
		<div className="px-4 lg:px-[104px] gap-5 bg-blue-2 text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-blue.svg')] bg-no-repeat bg-[-123px_10px]">
			<div className="container flex flex-col-reverse lg:flex-col gap-y-8 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] items-start justify-between gap-x-8 relative">
				<div className="max-lg:w-full">
					<Splide
						// onMoved={handleMoveColExpedicionSierraCentral}
						ref={splideRefColExpedicionSierraCentral}
						hasTrack={false}
						options={splideOptions}
					>
						<SplideTrack>
							{expedicionSierraCentralData.map((img, index) => (
								<SplideSlide key={index}>
									<figure className="relative w-auto h-full flex-shrink-0 lg:rounded-2xl overflow-hidden">
										<Image
											src={img.url}
											className="max-lg:object-contain w-auto h-full mx-auto"
											alt={'Colección Expedición a la Sierra Central'}
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
							onClick={handlePrevColExpedicionSierraCentral}
							direction="left"
							disabled={isPrevDisabledColExpedicionSierraCentral}
						/>
						<ArrowButton
							className="pointer-events-auto"
							theme="light"
							onClick={handleNextColExpedicionSierraCentral}
							direction="right"
							disabled={isNextDisabledColExpedicionSierraCentral}
						/>
					</div>
				</div>
				<div className="lg:max-w-[394px]">
					<span className="text-sm font-semibold mb-1 inline-block">
						Colección
					</span>
					<h3 className="text-2xl md:text-[32px] leading-[normal] font-semibold">
						Expedición a la Sierra Central
					</h3>
					<div className="max-md:text-sm font-medium leading-[24px] mt-6">
						<p>
							En 1957 el Instituto de Etnología y Arqueología de
							la UNMSM, en cooperación con el Dr. Carlos Carrasco
							Ramírez, organizaron la Expedición a la Sierra
							Central. Excavaron el sitio arqueológico de
							Wari-Willka en Junín. Además, se adquirieron
							vasijas que fueron encontradas debajo
							de amontonamientos de piedras a manera de ofrendas.
						</p>
					</div>
					{/* <p className="mt-6">
						<a
							href="https://www.flickr.com/photos/190570086@N08/albums/72157717943965197/"
							className="link inline-flex items-center gap-x-2"
							target="_blank"
						>
							Explorar
							<ExternalLinkIcon className="h-4 w-4 shrink-0" />
						</a>
					</p> */}
				</div>
			</div>
		</div>
	);
};

export default ExpedicionSierraCentral;
