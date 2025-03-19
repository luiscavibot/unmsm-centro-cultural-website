import React, { FC, ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import ArrowDropdownIcon from '@/ui/components/atoms/icons/arrow-dropdown-icon';

interface FlyoutLinkProps {
	children: ReactNode;
	href?: string;
	FlyoutContent?: FC;
}

const FlyoutLink: FC<FlyoutLinkProps> = ({ children, href, FlyoutContent }) => {
	const [openContent, setOpenContent] = useState(false);

	const showFlyout = FlyoutContent && openContent;

	const [isLargeScreen, setIsLargeScreen] = useState(false);

	// Detectar cambios en el tamaño de la ventana
	useEffect(() => {
		const handleResize = () => {
			setIsLargeScreen(window.innerWidth >= 1024);
		};

		handleResize(); // Verifica al cargar
		window.addEventListener('resize', handleResize); // Escucha cambios

		return () => {
			window.removeEventListener('resize', handleResize); // Limpieza
		};
	}, []);

	const handleMouseEnter = () => {
		if (isLargeScreen) setOpenContent(true);
	};

	const handleMouseLeave = () => {
		if (isLargeScreen) setOpenContent(false);
	};

	const handleClick = () => {
		if (!isLargeScreen) setOpenContent((prev) => !prev);
	};

	const flyoutVariants = isLargeScreen
		? {
				initial: { opacity: 0, y: 15 },
				animate: { opacity: 1, y: 0 },
				exit: { opacity: 0, y: 15 },
		  }
		: {
				initial: { opacity: 0, y: -15 },
				animate: { opacity: 1, y: 0 },
				exit: { opacity: 0, y: -15 },
		  };

	return (
		<div
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={handleClick}
			className="relative w-full lg:w-fit h-fit"
		>
			{href ? (
				<Link
					href={href}
					className="text-sm max-lg:w-full font-semibold relative h-[72px] lg:h-[--header-bottom-height] inline-flex items-center max-lg:justify-between leading-[16.8px] max-lg:py-6 lg:p-4 text-white group"
				>
					{children}
					{FlyoutContent && (
						<div className="ml-[2px]">
							<ArrowDropdownIcon
								direction={showFlyout ? 'up' : 'down'}
								color="white"
							/>
						</div>
					)}
					<span
						style={{
							transform: showFlyout ? 'scaleX(1)' : '',
						}}
						className="absolute -bottom-0 left-0 right-0 h-1 origin-left rounded-full bg-white transition-transform duration-300 ease-out scale-x-0 group-hover:scale-x-100"
					/>
				</Link>
			) : (
				<div className="text-sm max-lg:w-full font-semibold relative h-[72px] lg:h-[--header-bottom-height] inline-flex items-center max-lg:justify-between leading-[16.8px] max-lg:py-6 lg:p-4 text-white cursor-default group">
					{children}
					{FlyoutContent && (
						<div className="ml-[2px]">
							<ArrowDropdownIcon
								direction={showFlyout ? 'up' : 'down'}
								color="white"
							/>
						</div>
					)}
					<span
						style={{
							transform: showFlyout ? 'scaleX(1)' : 'scaleX(0)',
						}}
						className="absolute -bottom-0 left-0 right-0 h-1 origin-left rounded-full bg-white transition-transform duration-300 ease-out scale-x-0 group-hover:scale-x-100"
					/>
				</div>
			)}
			<AnimatePresence>
				{showFlyout && (
					<motion.div
						initial="initial"
						animate="animate"
						exit="exit"
						variants={flyoutVariants}
						style={{ translateX: isLargeScreen ? '-50%' : '0%' }}
						transition={{ duration: 0.3, ease: 'easeOut' }}
						className="lg:absolute lg:left-1/2 lg:top-[--header-bottom-height] bg-transparent"
					>
						<div className="hidden lg:block max-lg:absolute -top-[4px] left-0 right-0 h-[4px] bg-transparent" />
						{/* <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" /> */}
						<FlyoutContent />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default FlyoutLink;
