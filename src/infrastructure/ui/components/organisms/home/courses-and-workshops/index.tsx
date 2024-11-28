'use client'

import React, { useRef } from 'react'
import CoursesAndWorkshopsHomeCard from '@/infrastructure/ui/components/molecules/courses-and-workshops-home-card'
import coursesAndWorkshopsDataToHome from '@/infrastructure/ui/mocks/courses-and-workshops-data-to-home'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType } from '@splidejs/splide';
import useSplideControls from '@/infrastructure/ui/hooks/useSplideControls'
import ArrowButton from '@/infrastructure/ui/components/atoms/buttons/arrow-button';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

const CoursesAndWorkshops = () => {

	const splideRef = useRef<ExtendedSplideType>(null);

	const splideOptions = {
		type: 'fade',
		width: '100%',
		perPage: 1,
		arrows: false,
		pagination: false,
		gap: '0px',
		perMove: 1,
	};

	const { handlePrev, handleNext, handleMove, isPrevDisabled, isNextDisabled } = useSplideControls(splideRef);

	return (
		<section id="cursos-y-talleres" className="scroll-mt-28 relative">
			<h2 className="hidden sr-only">Cursos y Talleres</h2>
			<Splide
				onMoved={handleMove}
				ref={splideRef}
				hasTrack={false}
				options={splideOptions}
			>
				<SplideTrack>
					{coursesAndWorkshopsDataToHome.map((course, index) => (
						<SplideSlide key={index}>
							<CoursesAndWorkshopsHomeCard key={index} {...course} />
						</SplideSlide>
					))}
				</SplideTrack>
			</Splide>
			<div className="absolute bottom-[56px] px-[104px] w-full">
				<div className="container flex justify-end gap-x-2 relative">
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
		</section>
	)
}

export default CoursesAndWorkshops