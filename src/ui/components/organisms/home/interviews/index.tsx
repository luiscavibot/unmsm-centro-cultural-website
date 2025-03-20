'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType } from '@splidejs/splide';
import useSplideControls from '@/ui/hooks/useSplideControls';
import videosDireccionDeTurismo from '@/ui/mocks/videos-direccion-de-turismo';
import ArrowButton from '@/ui/components/atoms/buttons/arrow-button';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

const Interviews: React.FC = () => {

	const splideRefVideosGalery = useRef<ExtendedSplideType>(null);

	const splideOptionsVideosGalery = {
		type: 'loop',
		width: '100%',
		fixedWidth: '308px',
		arrows: false,
		pagination: false,
		gap: '40px',
		perMove: 2,
		breakpoints: {
			1024: {
				fixedWidth: '100%',
				perMove: 1,
			},
		},
		interval: 3000,
		pauseOnHover: true,
		loop: true,
	};

	const {
		handleNext: handleNextVideosGalery,
		handleMove: handleMoveVideosGlaery,
		isNextDisabled: isNextDisabledVideosGalery,
	} = useSplideControls(splideRefVideosGalery);

	return (
		<section 
			className="px-6 lg:px-[104px] py-8 lg:py-[124px] bg-blue-2 scroll-mt-28 relative overflow-hidden"
			id="entrevistas"
		>
			<div className="absolute -top-[50%] right-0">
				<Image
					src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-waves-blue.svg"
					alt="bg noticias"
					width={1000}
					height={775}
				/>
			</div>
			<div className="container flex flex-col gap-y-8 lg:grid lg:grid-cols-[auto_minmax(0,1fr)] lg:items-center justify-between gap-x-14 relative">
				<div className="p-2 text-white max-w-[365px]">
					<span>Youtube</span>
					<h2 className="text-[24px] lg:text-[32px] font-semibold leading-[normal]">
						Entrevistas
					</h2>
					<p className="mt-6 leading-6 font-normal">
						A través de nuestro canal de YouTube, la Casona
						de San Marcos te invita a descubrir un espacio
						de diálogo y reflexión con protagonistas del
						arte, la cultura, y el pensamiento.
					</p>
				</div>
				<div className="max-lg:w-full relative" id="slider">
					<Splide
						onMoved={handleMoveVideosGlaery}
						ref={splideRefVideosGalery}
						hasTrack={false}
						options={splideOptionsVideosGalery}
					>
						<SplideTrack>
							{videosDireccionDeTurismo.map(
								(video, index) => (
									<SplideSlide key={index}>
										<Link href={video.link}>
											<div className="relative h-[221x] aspect-video rounded-2xl overflow-hidden mx-auto">
												<Image
													src={video.image}
													className="object-cover h-full"
													alt={`video ${
														index + 1
													}`}
													layout="fill"
													quality={100}
												/>
											</div>
										</Link>
									</SplideSlide>
								)
							)}
						</SplideTrack>
					</Splide>
					<div className="absolute top-1/2 -translate-y-1/2 -inset-x-[20px] pointer-events-none">
						<div className="container flex justify-end gap-x-2 relative">
							<ArrowButton
								className="pointer-events-auto"
								theme="light"
								onClick={handleNextVideosGalery}
								direction="right"
								disabled={isNextDisabledVideosGalery}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Interviews;
