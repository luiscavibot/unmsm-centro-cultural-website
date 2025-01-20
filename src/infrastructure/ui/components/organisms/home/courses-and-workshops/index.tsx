'use client';

import React, { useRef } from 'react';
import CoursesAndWorkshopsHomeCard from '@/infrastructure/ui/components/molecules/courses-and-workshops-home-card';
import coursesAndWorkshopsDataToHome from '@/infrastructure/ui/mocks/courses-and-workshops-data-to-home';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType } from '@splidejs/splide';
import useSplideControls from '@/infrastructure/ui/hooks/useSplideControls';
import ArrowButton from '@/infrastructure/ui/components/atoms/buttons/arrow-button';
import { Intersection } from '@splidejs/splide-extension-intersection';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

const CoursesAndWorkshops = () => {
	const splideRef = useRef<ExtendedSplideType>(null);

	const splideOptions = {
		type: 'loop',
		width: '100%',
		perPage: 1,
		arrows: false,
		pagination: false,
		gap: '0px',
		perMove: 1,
		interval: 3000,
		autoplay: true,
		pauseOnHover: false,
		loop: true,
		extensions: { Intersection }, // Incluye la extensión aquí
		intersection: {
			threshold: 0.5, // Porcentaje de visibilidad requerido para activar el autoplay
			inView: {
				autoplay: true,
			},
		},
	};

	const {
		handlePrev,
		handleNext,
		handleMove,
		isPrevDisabled,
		isNextDisabled,
	} = useSplideControls(splideRef);

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
							<CoursesAndWorkshopsHomeCard
								key={index}
								{...course}
							/>
						</SplideSlide>
					))}
				</SplideTrack>
			</Splide>
			<div className="absolute bottom-[32px] lg:bottom-[56px] px-6 lg:px-[104px] w-full pointer-events-none">
				<div className="container flex justify-end gap-x-2 relative">
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
		</section>
	);
};

export default CoursesAndWorkshops;
