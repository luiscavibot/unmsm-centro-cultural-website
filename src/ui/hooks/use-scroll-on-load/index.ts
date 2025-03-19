import { useEffect } from 'react';

const useScrollOnLoad = (scrollAmount: number = 422) => {
	useEffect(() => {
		const handleScroll = () => {
			window.scrollTo({ top: scrollAmount, behavior: 'smooth' });
		};

		handleScroll();
	}, [scrollAmount]);
};

export default useScrollOnLoad;
