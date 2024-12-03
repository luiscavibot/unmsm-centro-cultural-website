'use client'

import React, { FC, ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const NavigationMenu = () => {
	return (
		<div className="flex justify-center">
			<FlyoutLink href="/noticias">
				Noticias
			</FlyoutLink>
			<FlyoutLink href="/cursos-y-talleres">
				Cursos y talleres
			</FlyoutLink>
			<FlyoutLink FlyoutContent={ArtisticDirectionsContent}>
				Direcciones artísticas
			</FlyoutLink>
			<FlyoutLink FlyoutContent={MuseumsContent}>
				Museos
			</FlyoutLink>
			<FlyoutLink FlyoutContent={VisitUsContent}>
				Visítanos
			</FlyoutLink>
			<FlyoutLink href="/biblioteca">
				Biblioteca
			</FlyoutLink>
			<FlyoutLink FlyoutContent={AboutUsContent}>
				Nosotros
			</FlyoutLink>
		</div>
	);
};

interface FlyoutLinkProps {
	children: ReactNode;
	href?: string;
	external?: boolean;
	FlyoutContent?: FC;
}

const FlyoutLink: FC<FlyoutLinkProps> = ({ children, href, external, FlyoutContent }) => {
	const [open, setOpen] = useState(false);

	const showFlyout = FlyoutContent && open;

	return (
		<div
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
			className="relative w-fit h-fit"
		>
			{
				href ? (
					<>
						{
							external ? (
								<a href={href} rel="noopener noreferrer" target="_blank" className="text-sm font-semibold relative h-[49px] inline-flex items-center leading-[16.8px] p-4 text-white">
									{children}
									<span
										style={{
											transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
										}}
										className="absolute -bottom-0 left-0 right-0 h-1 origin-left scale-x-0 rounded-full bg-white transition-transform duration-300 ease-out"
									/>
								</a>
							)
								:
								(
									<Link href={href} className="text-sm font-semibold relative h-[49px] inline-flex items-center leading-[16.8px] p-4 text-white">
										{children}
										<span
											style={{
												transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
											}}
											className="absolute -bottom-0 left-0 right-0 h-1 origin-left scale-x-0 rounded-full bg-white transition-transform duration-300 ease-out"
										/>
									</Link>
								)
						}
					</>
				)
					:
					(
						<div className="text-sm font-semibold relative h-[49px] inline-flex items-center leading-[16.8px] p-4 text-white cursor-default">
							{children}
							<span
								style={{
									transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
								}}
								className="absolute -bottom-0 left-0 right-0 h-1 origin-left scale-x-0 rounded-full bg-white transition-transform duration-300 ease-out"
							/>
						</div>
					)
			}
			<AnimatePresence>
				{showFlyout && (
					<motion.div
						initial={{ opacity: 0, y: 15 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 15 }}
						style={{ translateX: "-50%" }}
						transition={{ duration: 0.3, ease: "easeOut" }}
						className="absolute left-1/2 top-[51px] bg-transparent"
					>
						<div className="absolute -top-[2px] left-0 right-0 h-[2px] bg-transparent" />
						{/* <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" /> */}
						<FlyoutContent />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

const ArtisticDirectionsContent: FC = () => {
	return (
		<div className="w-[204px] text-white py-2 shadow-xl font-medium rounded-lg overflow-hidden bg-dark-gray">
			<Link href="#" className="flex items-center p-4 h-[48px] leading-[16.8px] text-sm hover:bg-gray transition-colors duration-300">
				Ballet
			</Link>
			<Link href="#" className="flex items-center p-4 h-[48px] leading-[16.8px] text-sm hover:bg-gray transition-colors duration-300">
				Folklore
			</Link>
			<Link href="#" className="flex items-center p-4 h-[48px] leading-[16.8px] text-sm hover:bg-gray transition-colors duration-300">
				Cine
			</Link>
			<Link href="#" className="flex items-center p-4 h-[48px] leading-[16.8px] text-sm hover:bg-gray transition-colors duration-300">
				Música
			</Link>
			<Link href="#" className="flex items-center p-4 h-[48px] leading-[16.8px] text-sm hover:bg-gray transition-colors duration-300">
				Teatro
			</Link>
			<Link href="#" className="flex items-center p-4 h-[48px] leading-[16.8px] text-sm hover:bg-gray transition-colors duration-300">
				Banda universitaria
			</Link>
		</div>
	);
};

const MuseumsContent: FC = () => {
	return (
		<div className="w-[204px] text-white py-2 shadow-xl font-medium rounded-lg overflow-hidden bg-dark-gray">
			<Link href="#" className="flex items-center px-4 h-[48px] leading-[16.8px] text-sm hover:bg-gray transition-colors duration-300">
				Museo de Arte de San Marcos
			</Link>
			<Link href="#" className="flex items-center px-4 h-[48px] leading-[16.8px] text-sm hover:bg-gray transition-colors duration-300">
				Museo de Arqueología y Antropología
			</Link>
			<Link href="#" className="flex items-center p-4 h-[48px] leading-[16.8px] text-sm hover:bg-gray transition-colors duration-300">
				Exposiciones
			</Link>
		</div>
	);
};

const VisitUsContent: FC = () => {
	return (
		<div className="w-[204px] text-white py-2 shadow-xl font-medium rounded-lg overflow-hidden bg-dark-gray">
			<Link href="#" className="flex items-center p-4 h-[48px] leading-[16.8px] text-sm hover:bg-gray transition-colors duration-300">
				Visitas guiadas
			</Link>
			<Link href="#" className="flex items-center p-4 h-[48px] leading-[16.8px] text-sm hover:bg-gray transition-colors duration-300">
				Dirección de turismo
			</Link>
			<Link href="#" className="flex items-center p-4 h-[48px] leading-[16.8px] text-sm hover:bg-gray transition-colors duration-300">
				Casona de San Marcos
			</Link>
		</div>
	);
};

const AboutUsContent: FC = () => {
	return (
		<div className="w-[204px] text-white py-2 shadow-xl font-medium rounded-lg overflow-hidden bg-dark-gray">
			<Link href="#" className="flex items-center p-4 h-[48px] leading-[16.8px] text-sm hover:bg-gray transition-colors duration-300">
				Transparencia
			</Link>
			<Link href="#" className="flex items-center p-4 h-[48px] leading-[16.8px] text-sm hover:bg-gray transition-colors duration-300">
				Directorio
			</Link>
		</div>
	);
};

export default NavigationMenu;