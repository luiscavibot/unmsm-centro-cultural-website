'use client';

import React, { FC, useRef } from 'react';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType } from '@splidejs/splide';
import Link from 'next/link';
import Image from 'next/image';
import useSplideControls from '@/ui/hooks/useSplideControls';
// import newsDataToHome from '@/ui/mocks/news-data-to-home';
import ExternalLinkIcon from '@/ui/components/atoms/icons/external-link-icon';
import NewsHomeCard from '@/ui/components/molecules/news-home-card';
import ArrowButton from '@/ui/components/atoms/buttons/arrow-button';
import { Noticias } from '@/interfaces/services/noticias.interface';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

interface Props {
	noticias: Noticias[];
}

const News: FC<Props> = ({ noticias }) => {
	const splideRef = useRef<ExtendedSplideType>(null);

	const splideOptions = {
		// type: 'loop',
		width: '100%',
		fixedWidth: '620px',
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
		// autoplay: true,
		pauseOnHover: true,
		// loop: true,
	};

	const {
		handlePrev,
		handleNext,
		// handleMove,
		isPrevDisabled,
		isNextDisabled,
	} = useSplideControls(splideRef);

	return (
		<section
			className="px-6 lg:px-[104px] py-[32px] lg:py-[56px] bg-red-custom scroll-mt-28 relative overflow-hidden"
			id="noticias"
		>
			<div className="absolute -top-[100%] -left-20">
				<Image
					src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-noticias.svg"
					alt="bg noticias"
					width={1000}
					height={775}
				/>
			</div>
			<div className="container flex flex-col gap-y-8 lg:grid lg:grid-cols-[auto_minmax(0,1fr)] items-center justify-between gap-x-14 relative">
				<div className="flex flex-row items-center justify-center p-2 gap-2 text-white">
					<Link className="contents" href="/noticias">
						<h2 className="font-messiri text-[24px] lg:text-[40px]">
							Noticias
						</h2>
						<ExternalLinkIcon className="max-lg:w-5" />
					</Link>
				</div>
				<div className="max-lg:w-full" id="slider">
					<Splide
						// onMoved={handleMove}
						ref={splideRef}
						hasTrack={false}
						options={splideOptions}
					>
						<SplideTrack>
							{noticias.map((noticia, index) => (
								<SplideSlide key={index}>
									<NewsHomeCard
										url={
											noticia.imagen?.formats?.small
												?.url ||
											noticia.imagen?.formats?.medium
												?.url ||
											noticia.imagen?.formats?.large
												?.url ||
											noticia.imagen?.url ||
											''
										}
										fechaPublicacion={
											noticia.fechaPublicacion
										}
										titulo={noticia.titulo}
										resumen={noticia.resumen}
										slug={noticia.slug}
									/>
								</SplideSlide>
							))}
						</SplideTrack>
					</Splide>
					<div className="flex justify-end gap-x-2 relative mt-4 pointer-events-none">
						<ArrowButton
							className="pointer-events-auto"
							theme="light"
							onClick={handlePrev}
							direction="left"
							disabled={isPrevDisabled}
						/>
						<ArrowButton
							className="pointer-events-auto"
							theme="light"
							onClick={handleNext}
							direction="right"
							disabled={isNextDisabled}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default News;
