'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useRef } from 'react';
import Badge from '@/ui/components/atoms/badge';

interface CoursesAndWorkshopsHomeCardProps {
	url: string;
	slug: string;
	tipo: string;
	titulo: string;
	resumen: string | null;
	dependencia: string | null;
}

const CoursesAndWorkshopsHomeCard: FC<CoursesAndWorkshopsHomeCardProps> = ({
	url,
	slug,
	tipo,
	titulo,
	resumen,
	dependencia,
}) => {
	const coverRef = useRef<HTMLDivElement>(null);

	const handleMouseEnter = () => {
		if (coverRef.current) {
			coverRef.current.style.opacity = '0.8';
		}
	};

	const handleMouseLeave = () => {
		if (coverRef.current) {
			coverRef.current.style.opacity = '1';
		}
	};

	return (
		<article className="relative px-6 lg:px-[104px] pt-[64px] lg:pt-[96px] pb-[56px] h-[420px] lg:h-[720px]">
			<figure className="absolute top-0 left-0 w-full h-full -z-10">
				<Image
					src={url}
					className="object-cover"
					alt="events"
					fill
				/>
			</figure>
			<div
				ref={coverRef}
				aria-hidden="true"
				className="absolute top-0 left-0 w-full h-full -z-10 bg-gradiente-courses-and-workshops-home opacity-[100%] transition-opacity duration-200 ease-in-out"
			></div>
			<div className="container">
				<Link
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					className="inline-block"
					href={`cursos-y-talleres/${slug}`}
				>
					<div className="max-w-[459px]">
						<header>
							{
								tipo &&
								<Badge label={tipo} size="large" />
							}
							<h3 className="text-[24px] lg:text-[40px] font-bold leading-[normal] text-white">
								{titulo}
							</h3>
							{
								dependencia &&
								<p className="mt-2 text-xl font-semibold leading-[20px] text-white">
									{dependencia}
								</p>
							}
						</header>
						{
							resumen &&
							<p className="max-lg:hidden mt-6 font-medium leading-[24px] text-white line-clamp-[10]">
								{resumen}
							</p>
						}
					</div>
				</Link>
			</div>
		</article>
	);
};

export default CoursesAndWorkshopsHomeCard;
