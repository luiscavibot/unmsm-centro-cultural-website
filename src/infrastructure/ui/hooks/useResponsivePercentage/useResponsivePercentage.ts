import { useEffect, useRef, useState } from 'react';
import { debounce } from '@/infrastructure/ui/helpers/debounce';

const useResponsivePercentage = () => {
	const wrapperRef = useRef<HTMLDivElement | null>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [percentage, setPercentage] = useState<string>('58');
	const [isLargeScreen, setIsLargeScreen] = useState<boolean>(window.innerWidth >= 1024);

	useEffect(() => {
		const handleResize = () => {
			setIsLargeScreen(window.innerWidth >= 1024);
		};
		const calculatePercentage = () => {
			if (window.innerWidth < 1024 || !wrapperRef.current || !containerRef.current) return;

			const wrapperWidth = wrapperRef.current.offsetWidth;
			const containerWidth = containerRef.current.offsetWidth;

			const wrapperCS = window.getComputedStyle(wrapperRef.current);
			const containerCS = window.getComputedStyle(containerRef.current);

			const paddingAndMarginSum =
				parseFloat(wrapperCS.paddingLeft) +
				parseFloat(containerCS.marginLeft);

			const x = 57 * wrapperWidth - 100 * paddingAndMarginSum;
			const y = 43 * wrapperWidth - 100 * paddingAndMarginSum;

			const k = containerWidth / (x + y);
			const calculatedPercentage = ((x * k) / containerWidth) * 100;

			handleResize();
			setPercentage(calculatedPercentage.toFixed(4));
		};

		const debouncedResize = debounce(handleResize, 200);
		const debouncedCalculate = debounce(calculatePercentage, 200);
		calculatePercentage();

		window.addEventListener('resize', debouncedResize);
		window.addEventListener('resize', debouncedCalculate);
		return () => {
			window.removeEventListener('resize', debouncedResize);
			window.removeEventListener('resize', debouncedCalculate);
		};
	}, [isLargeScreen]);

	return { wrapperRef, containerRef, percentage, isLargeScreen };
};

export default useResponsivePercentage;
