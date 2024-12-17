'use client'

import React, { useRef } from 'react'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType } from '@splidejs/splide';
import ArrowButton from '@/infrastructure/ui/components/atoms/buttons/arrow-button';
import NewsHomeCard from '@/infrastructure/ui/components/molecules/news-home-card';
import useSplideControls from '@/infrastructure/ui/hooks/useSplideControls'
import newsDataToHome from '@/infrastructure/ui/mocks/news-data-to-home';
import ExternalLinkIcon from '../../../atoms/icons/external-link-icon';
import Link from 'next/link';
import Image from 'next/image';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

const News = () => {

	const splideRef = useRef<ExtendedSplideType>(null);

	const splideOptions = {
		type: 'slide',
		width: '100%',
		fixedWidth: '620px',
		arrows: false,
		pagination: false,
		gap: '40px',
		perMove: 2,
	};

	const { handlePrev, handleNext, handleMove, isPrevDisabled, isNextDisabled } = useSplideControls(splideRef);

	return (
		<section className="px-[104px] py-[56px] bg-red-custom scroll-mt-28 relative overflow-hidden" id="noticias">
			<div className="absolute -top-[100%] -left-20">
				<Image
					src="https://unmsm-static-files-v2.s3.us-east-2.amazonaws.com/centro-cultural-de-san-marcos/bg-noticias.svg"
					alt="bg noticias"
					width={1000}
					height={775}
				/>
			</div>
			<div className="container grid grid-cols-[auto_minmax(0,1fr)] items-center justify-between gap-x-14 relative">
				<div className="flex flex-row items-center justify-center p-2 gap-2">
					<h2 className="font-messiri text-[40px] text-white">Noticias</h2>
					<Link href="/noticias">
						<ExternalLinkIcon color="white" />
					</Link>
				</div>
				<div id="slider">
					<Splide
						onMoved={handleMove}
						ref={splideRef}
						hasTrack={false}
						options={splideOptions}
					>
						<SplideTrack>
							{newsDataToHome.map((news, index) => (
								<SplideSlide key={index}>
									<NewsHomeCard {...news} />
								</SplideSlide>
							))}
						</SplideTrack>
					</Splide>
					<div className="flex justify-end gap-x-2 relative mt-4">
						<ArrowButton
							theme="light"
							onClick={handlePrev}
							direction="left"
							disabled={isPrevDisabled}
						/>
						<ArrowButton
							theme="light"
							onClick={handleNext}
							direction="right"
							disabled={isNextDisabled}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default News