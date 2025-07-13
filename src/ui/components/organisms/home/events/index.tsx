'use client';

import React, { FC, useRef } from 'react';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideType } from '@splidejs/splide';
import useSplideControls from '@/ui/hooks/useSplideControls';
import EventsHomeCard from '@/ui/components/molecules/events-home-card';
import ArrowButton from '@/ui/components/atoms/buttons/arrow-button';
import { AgendaCultural } from '@/interfaces/services/agenda-cultural.interface';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}
interface Props {
	agendaCultural: AgendaCultural[];
}
const Events: FC<Props> = ({ agendaCultural }) => {
	const splideRef = useRef<ExtendedSplideType>(null);

	const splideOptions = {
		type: 'loop',
		width: '100%',
		perPage: 1,
		arrows: false,
		pagination: false,
		gap: '0px',
		perMove: 1,
		interval: 1500,
		autoplay: true,
		pauseOnHover: true,
		loop: true,
	};

	const {
		handlePrev,
		handleNext,
		// handleMove,
		isPrevDisabled,
		isNextDisabled,
	} = useSplideControls(splideRef);

	return (
		<section id="eventos" className="scroll-mt-28 relative">
			<h2 className="hidden sr-only">Eventos</h2>
			<Splide
				// onMoved={handleMove}
				ref={splideRef}
				hasTrack={false}
				options={splideOptions}
			>
				<SplideTrack>
					{agendaCultural.map((event, index) => (
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
