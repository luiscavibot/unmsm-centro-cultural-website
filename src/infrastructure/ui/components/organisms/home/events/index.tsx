'use client';

import React, { FC, useRef } from 'react';
import EventsHomeCard from '@/infrastructure/ui/components/molecules/events-home-card';
import eventsDataToHome from '@/infrastructure/ui/mocks/events-data-to-home';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType } from '@splidejs/splide';
import useSplideControls from '@/infrastructure/ui/hooks/useSplideControls';
import ArrowButton from '@/infrastructure/ui/components/atoms/buttons/arrow-button';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

const Events: FC = () => {
	const splideRef = useRef<ExtendedSplideType>(null);

	const splideOptions = {
		type: 'loop',
		width: '100%',
		perPage: 1,
		arrows: false,
		pagination: false,
		gap: '0px',
		perMove: 1,
		//configurar autoplay cada 3 segundos y que no se detenga al hacer hover y que rote infinitamente
		interval: 3000,
		autoplay: true,
		// pauseOnHover: true,
		loop: true,
	};

	const {
		handlePrev,
		handleNext,
		handleMove,
		isPrevDisabled,
		isNextDisabled,
	} = useSplideControls(splideRef);

	return (
		<section id="eventos" className="scroll-mt-28 relative">
			<h2 className="hidden sr-only">Eventos</h2>
			<Splide
				onMoved={handleMove}
				ref={splideRef}
				hasTrack={false}
				options={splideOptions}
			>
				<SplideTrack>
					{eventsDataToHome.map((event, index) => (
						<SplideSlide key={index}>
							<EventsHomeCard key={index} {...event} />
						</SplideSlide>
					))}
				</SplideTrack>
			</Splide>
			<div className="absolute bottom-[32px] lg:bottom-[56px] px-6 lg:px-[104px] w-full pointer-events-none">
				<div className="container flex justify-end gap-x-2 relative">
					<ArrowButton
						className="pointer-events-auto"
						onClick={handlePrev}
						direction="left"
						disabled={isPrevDisabled}
					/>
					<ArrowButton
						className="pointer-events-auto"
						onClick={handleNext}
						direction="right"
						disabled={isNextDisabled}
					/>
				</div>
			</div>
		</section>
	);
};

export default Events;
