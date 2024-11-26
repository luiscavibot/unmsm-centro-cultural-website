import { useEffect, useRef, useState } from 'react';
import { debounce } from '@/infrastructure/ui/helpers/debounce';

const useResponsivePercentage = () => {
	const wrapperRef = useRef<HTMLDivElement | null>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [percentage, setPercentage] = useState<string>('58');

	useEffect(() => {
		const calculatePercentage = () => {
			if (!wrapperRef.current || !containerRef.current) return;

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

			setPercentage(calculatedPercentage.toFixed(4));
		};

		const debouncedCalculate = debounce(calculatePercentage, 200);
		calculatePercentage();

		window.addEventListener('resize', debouncedCalculate);
		return () => {
			window.removeEventListener('resize', debouncedCalculate);
		};
	}, []);

	return { wrapperRef, containerRef, percentage };
};

export default useResponsivePercentage;
