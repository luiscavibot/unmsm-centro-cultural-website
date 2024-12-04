import { useCallback, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { debounce } from "@/infrastructure/ui/helpers/debounce";

const useBgTransition = () => {

	const pathname = usePathname();
	const [scrolled, setScrolled] = useState(false);

	const handleScroll = useCallback(
		debounce(() => {
			setScrolled(window.scrollY > 50);
		}, 150),
		[]
	);

	useEffect(() => {
		if (pathname !== "/") return;

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [pathname, handleScroll]);

	const bgClass =
		pathname === "/"
			? scrolled
				? "bg-dark-gray"
				: "bg-transparent"
			: "bg-dark-gray";

	return { bgClass }
}

export default useBgTransition