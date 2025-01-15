import ImageIcon from '@/infrastructure/ui/components/atoms/icons/imagen-icon';
import OutlinePlaceIcon from '@/infrastructure/ui/components/atoms/icons/outilne-place-icon';
// import Link from 'next/link';
import React from 'react';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType, ResponsiveOptions } from '@splidejs/splide';
import ArrowButton from '@/infrastructure/ui/components/atoms/buttons/arrow-button';
// import carouselExhibition from '@/infrastructure/ui/mocks/exhibition-arte-moderno-y-contemporaneo-carousel';
import Image from 'next/image';
import { salaMarioVargasLlosaData } from '@/infrastructure/ui/data/expositions/sala-mario-vargas-llosa-data';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

interface Props {
	handleMoveSalaMarioVargasLlosa: () => void;
	splideRefSalaMarioVargasLlosa: React.RefObject<ExtendedSplideType>;
	splideOptions: ResponsiveOptions;
	isPrevDisabledSalaMarioVargasLlosa: boolean;
	isNextDisabledSalaMarioVargasLlosa: boolean;
	handlePrevSalaMarioVargasLlosa: () => void;
	handleNextSalaMarioVargasLlosa: () => void;
}

const ArteModerno: React.FC<Props> = ({
	handleMoveSalaMarioVargasLlosa,
	splideRefSalaMarioVargasLlosa,
	splideOptions,
	isPrevDisabledSalaMarioVargasLlosa,
	isNextDisabledSalaMarioVargasLlosa,
	handlePrevSalaMarioVargasLlosa,
	handleNextSalaMarioVargasLlosa,
}) => {
	return (
		<div className="px-4 lg:px-[104px] gap-5 bg-red-2 text-white py-8 lg:py-[96px] bg-[url('https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-red-2.svg')] bg-no-repeat bg-[-123px_10px]">
			<div className="container flex flex-col gap-y-8 lg:grid lg:grid-cols-[auto_minmax(0,1fr)] items-start justify-between gap-x-8 relative">
				<div className="max-w-[394px] mt-0 lg:mt-10">
					<span className="text-sm font-semibold mb-1 inline-block">
						Sala permanente
					</span>
					<h3 className="text-[32px] leading-[normal] font-semibold">
						Sala Mario Vargas Llosa
					</h3>
					<p className="font-medium leading-[24px] mt-6">
						Un recorrido, documental y fotográfico, en la vida
						sanmarquina de Mario Vargas Llosa entre 1953 y 1958.
					</p>
					<div className="flex flex-col gap-y-2 mt-2">
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
						href="/exposiciones/sala-mario-vargas-llosa"
						className="link mt-8 inline-block"
					>
						Leer más
					</Link> */}
				</div>
				<div className="max-lg:w-full">
					<Splide
						onMoved={handleMoveSalaMarioVargasLlosa}
						ref={splideRefSalaMarioVargasLlosa}
						hasTrack={false}
						options={splideOptions}
					>
						<SplideTrack>
							{salaMarioVargasLlosaData.map((img, index) => (
								<SplideSlide key={index}>
									<figure className="max-lg:hidden relative w-[390px] h-[512px] flex-shrink-0 rounded-2xl overflow-hidden">
										<Image
											src={img.imageUrl}
											className="object-cover"
											alt={'Exposición'}
											layout="fill"
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
							onClick={handlePrevSalaMarioVargasLlosa}
							direction="left"
							disabled={isPrevDisabledSalaMarioVargasLlosa}
						/>
						<ArrowButton
							className="pointer-events-auto"
							theme="light"
							onClick={handleNextSalaMarioVargasLlosa}
							direction="right"
							disabled={isNextDisabledSalaMarioVargasLlosa}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ArteModerno;
