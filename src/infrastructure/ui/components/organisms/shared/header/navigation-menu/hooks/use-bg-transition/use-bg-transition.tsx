import { useCallback, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { debounce } from "@/infrastructure/ui/helpers/debounce";

const useBgTransition = () => {

	const pathname = usePathname();
	const [scrolled, setScrolled] = useState(false);

	const handleScroll = useCallback(
		debounce(() => {
			if (window.innerWidth >= 1024) {
				setScrolled(window.scrollY > 50);
			}
		}, 50),
		[]
	);

	useEffect(() => {
		if (pathname !== "/" || window.innerWidth < 1024) return;

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [pathname, handleScroll]);

	const bgClass =
		pathname === "/"
			? scrolled
				? "bg-dark-gray"
				: "bg-dark-gray-transparent"
			: "bg-dark-gray";

	return { bgClass }
}

export default useBgTransition