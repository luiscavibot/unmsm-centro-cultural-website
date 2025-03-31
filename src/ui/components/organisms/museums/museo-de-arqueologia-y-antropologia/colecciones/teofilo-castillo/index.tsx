import React from 'react';
import Image from 'next/image';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import type { Splide as SplideType, ResponsiveOptions } from '@splidejs/splide';
import ArrowButton from '@/ui/components/atoms/buttons/arrow-button';
// import ExternalLinkIcon from '@/ui/components/atoms/icons/external-link-icon';
import { teofiloCastilloData } from '@/ui/data/museums/teofilo-castillo-data';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

interface Props {
	handleMoveColTeofiloCastillo: () => void;
	splideRefColTeofiloCastillo: React.RefObject<ExtendedSplideType>;
	splideOptions: ResponsiveOptions;
	isPrevDisabledColTeofiloCastillo: boolean;
	isNextDisabledColTeofiloCastillo: boolean;
	handlePrevColTeofiloCastillo: () => void;
	handleNextColTeofiloCastillo: () => void;
}

const TeofiloCastillo: React.FC<Props> = ({
	handleMoveColTeofiloCastillo,
	splideRefColTeofiloCastillo,
	splideOptions,
	isPrevDisabledColTeofiloCastillo,
	isNextDisabledColTeofiloCastillo,
	handlePrevColTeofiloCastillo,
	handleNextColTeofiloCastillo,
}) => {
	return (
		<div className="px-4 lg:px-[104px] gap-5 bg-dark-red-3 text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-3.svg')] bg-no-repeat bg-[-123px_10px]">
			<div className="container flex flex-col gap-y-8 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] items-start justify-between gap-x-8 relative">
				<div className="max-lg:w-full">
					<Splide
						onMoved={handleMoveColTeofiloCastillo}
						ref={splideRefColTeofiloCastillo}
						hasTrack={false}
						options={splideOptions}
					>
						<SplideTrack>
							{teofiloCastilloData.map((img, index) => (
								<SplideSlide key={index}>
									<figure className="relative w-auto h-full flex-shrink-0 rounded-2xl overflow-hidden">
										<Image
											src={img.url}
											className="max-lg:object-contain w-auto h-full mx-auto"
											alt={'Colección Teófilo Castillo'}
											width={700}
											height={700}
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
							onClick={handlePrevColTeofiloCastillo}
							direction="left"
							disabled={isPrevDisabledColTeofiloCastillo}
						/>
						<ArrowButton
							className="pointer-events-auto"
							theme="light"
							onClick={handleNextColTeofiloCastillo}
							direction="right"
							disabled={isNextDisabledColTeofiloCastillo}
						/>
					</div>
				</div>
				<div className="max-w-[394px]">
					<span className="text-sm font-semibold mb-1 inline-block">
						Colección
					</span>
					<h3 className="text-[32px] leading-[normal] font-semibold">
						Teófilo Castillo
					</h3>
					<div className="font-medium leading-[24px] mt-6">
						<p>
							El artista peruano Teófilo Castillo fue
							representante de la comunidad académica de pintores
							peruanos de inicios del siglo XX. Fue pionero al
							representar elementos de la sociedad Nasca, Moche y
							la arquitectura prehispánica asignándoles un valor
							artístico. En 1920, organizó una exposición de su
							colección y, posteriormente, nuestra universidad
							adquirió su colección de objetos prehispánicos.
						</p>
					</div>
					{/* <p className="mt-6">
						<a
							href="https://www.flickr.com/photos/190570086@N08/albums/72157719195578740/"
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

export default TeofiloCastillo;
