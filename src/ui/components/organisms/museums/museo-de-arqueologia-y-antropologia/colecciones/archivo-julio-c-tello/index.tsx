import React from 'react';
import Image from 'next/image';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import type { Splide as SplideType, ResponsiveOptions } from '@splidejs/splide';
import ArrowButton from '@/ui/components/atoms/buttons/arrow-button';
// import ExternalLinkIcon from '@/ui/components/atoms/icons/external-link-icon';
import { archivoJulioCTelloData } from '@/ui/data/museums/archivo-julio-c-tello-data';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

interface Props {
	handleMoveColArchivoJulio: () => void;
	splideRefColArchivoJulio: React.RefObject<ExtendedSplideType>;
	splideOptions: ResponsiveOptions;
	isPrevDisabledColArchivoJulio: boolean;
	isNextDisabledColArchivoJulio: boolean;
	handlePrevColArchivoJulio: () => void;
	handleNextColArchivoJulio: () => void;
}

const ArchivoJulioCTello: React.FC<Props> = ({
	handleMoveColArchivoJulio,
	splideRefColArchivoJulio,
	splideOptions,
	isPrevDisabledColArchivoJulio,
	isNextDisabledColArchivoJulio,
	handlePrevColArchivoJulio,
	handleNextColArchivoJulio,
}) => {
	return (
		<div className="px-4 lg:px-[104px] gap-5 bg-black text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-1.svg')] bg-no-repeat bg-[-123px_10px]">
			<div className="container flex flex-col gap-y-8 lg:grid lg:grid-cols-[auto_minmax(0,1fr)] items-start justify-between gap-x-8 relative">
				<div className="lg:max-w-[394px]">
					<span className="text-sm font-semibold mb-1 inline-block">
						Colección
					</span>
					<h3 className="text-[32px] leading-[normal] font-semibold">
						Julio C. Tello
					</h3>
					<div className="font-medium leading-[24px] mt-6">
						<p className="mb-6">
							En 1915, Julio C. Tello organizó una exploración al
							sur del Perú con el apoyo de a Aguirre Anchorena y
							Frederick W. Putnam. Exploraron, por ejemplo, los
							rios de Sabandía en Arequipa. En Cusco, Tello
							conoció la colección de Lucas Caparó Muñiz,
							familiarizándose con la cerámica del estilo Inca.
							Más tarde, en la cuenca del río Grande, investigó
							las tumbas de filiación Nasca.
						</p>
						<p>
							En 1921 nuestra universidad adquirió la colección
							arqueológica, conformada por 981 objetos y reunida
							por Julio C. Tello. La colección incluía botellas y
							cántaros Nasca.
						</p>
					</div>
					{/* <p className="mt-6">
						<a
							href="https://www.flickr.com/photos/190570086@N08/albums/72157719252241104/"
							className="link inline-flex items-center gap-x-2"
							target="_blank"
						>
							Explorar
							<ExternalLinkIcon className="h-4 w-4 shrink-0" />
						</a>
					</p> */}
				</div>
				<div className="max-lg:w-full">
					<Splide
						className="splide-museo"
						onMoved={handleMoveColArchivoJulio}
						ref={splideRefColArchivoJulio}
						hasTrack={false}
						options={splideOptions}
					>
						<SplideTrack>
							{archivoJulioCTelloData.map((img, index) => (
								<SplideSlide key={index}>
									<figure className="relative w-auto h-full flex-shrink-0 lg:rounded-2xl overflow-hidden">
										<Image
											src={img.url}
											className="max-lg:object-contain w-auto h-full mx-auto"
											alt={'Archivo Julio C. Tello'}
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
							onClick={handlePrevColArchivoJulio}
							direction="left"
							disabled={isPrevDisabledColArchivoJulio}
						/>
						<ArrowButton
							className="pointer-events-auto"
							theme="light"
							onClick={handleNextColArchivoJulio}
							direction="right"
							disabled={isNextDisabledColArchivoJulio}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ArchivoJulioCTello;
