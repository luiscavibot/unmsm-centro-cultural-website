'use client';

import React, { FC, useRef } from 'react';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType } from '@splidejs/splide';
import useSplideControls from '@/ui/hooks/useSplideControls';
// import coursesAndWorkshopsDataToHome from '@/ui/mocks/courses-and-workshops-data-to-home';
import CoursesAndWorkshopsHomeCard from '@/ui/components/molecules/courses-and-workshops-home-card';
import ArrowButton from '@/ui/components/atoms/buttons/arrow-button';
import { CursosYTalleres } from '@/interfaces/services/cursos-y-talleres.interface';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

interface Props {
	cursosYTalleres: CursosYTalleres[];
}

const CoursesAndWorkshops: FC<Props> = ({ cursosYTalleres }) => {
	const splideRef = useRef<ExtendedSplideType>(null);

	const splideOptions = {
		// type: 'loop',
		width: '100%',
		perPage: 1,
		arrows: false,
		pagination: false,
		gap: '0px',
		perMove: 1,
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
		<section id="cursos-y-talleres" className="scroll-mt-28 relative">
			<h2 className="hidden sr-only">Cursos y Talleres</h2>
			<Splide
				// onMoved={handleMove}
				ref={splideRef}
				hasTrack={false}
				options={splideOptions}
			>
				<SplideTrack>
					{cursosYTalleres.map((course, index) => (
						<SplideSlide key={index}>
							<CoursesAndWorkshopsHomeCard
								url={course.imagen.url}
								titulo={course.titulo}
								slug={course.slug}
								resumen={course.resumen}
								tipo={course.tipo}
								dependencia={course.dependencia}
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
