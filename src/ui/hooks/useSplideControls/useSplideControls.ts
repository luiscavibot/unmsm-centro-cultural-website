import { RefObject, useState } from "react";
import type { Splide as SplideType } from '@splidejs/splide';

interface ExtendedSplideType extends SplideType {
	splide: SplideType;
}

const useSplideControls = (splideRef: RefObject<ExtendedSplideType>) => {
	const [isPrevDisabled, setIsPrevDisabled] = useState(true);
	const [isNextDisabled, setIsNextDisabled] = useState(false);

	const handlePrev = () => splideRef.current?.splide?.go('<');
	const handleNext = () => splideRef.current?.splide?.go('>');
	const handleMove = () => {
		const splide = splideRef.current?.splide;
		if (splide) {
			setIsPrevDisabled(splide.index === 0);
			setIsNextDisabled(splide.index === splide.length - 1);
		}
	};

	return { handlePrev, handleNext, handleMove, isPrevDisabled, isNextDisabled };
};

export default useSplideControls;