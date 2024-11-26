'use client'

import React, { FC, useRef } from 'react';
import EventsHomeCard from '@/infrastructure/ui/components/molecules/events-home-card';
import eventsDataToHome from '@/infrastructure/ui/mocks/events-data-to-home';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType } from '@splidejs/splide';
import useSplideControls from '@/infrastructure/ui/hooks/useSplideControls'
import ArrowButton from '@/infrastructure/ui/components/atoms/buttons/arrow-button';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

const Events: FC = () => {
	const splideRef = useRef<ExtendedSplideType>(null);

	const splideOptions = {
		type: 'slide',
		width: '100%',
		perPage: 1,
		arrows: false,
		pagination: false,
		gap: '0px',
		perMove: 1,
	};

	const { handlePrev, handleNext, handleMove, isPrevDisabled, isNextDisabled } = useSplideControls(splideRef);

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
			<div className="absolute bottom-[56px] px-[104px] w-full">
				<div className="container flex justify-end gap-x-2 relative">
					<ArrowButton
						onClick={handlePrev}
						direction="left"
						disabled={isPrevDisabled}
					/>
					<ArrowButton
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
