'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useRef } from 'react';
import Badge from '@/infrastructure/ui/components/atoms/badge';

interface CoursesAndWorkshopsHomeCardProps {
	href: string;
	imageUrl: string;
	type: 'curso' | 'taller';
	title: string;
	subtitle: string;
	description: string;
}

const CoursesAndWorkshopsHomeCard: FC<CoursesAndWorkshopsHomeCardProps> = ({
	href,
	imageUrl,
	type,
	title,
	subtitle,
	description,
}) => {

	const coverRef = useRef<HTMLDivElement>(null);

	const handleMouseEnter = () => {
		if (coverRef.current) {
			coverRef.current.style.opacity = '0.8';
		}
	};

	const handleMouseLeave = () => {
		if (coverRef.current) {
			coverRef.current.style.opacity = '0.64';
		}
	};

	return (
		<article className="relative px-[104px] pt-[96px] pb-[56px] h-[720px]">
			<figure className="absolute top-0 left-0 w-full h-full -z-10">
				<Image
					src={imageUrl}
					className="object-cover"
					alt="events"
					fill
				/>
			</figure>
			<div
				ref={coverRef}
				aria-hidden="true"
				className="absolute top-0 left-0 w-full h-full -z-10 bg-courses-and-workshops opacity-[64%] transition-opacity duration-200 ease-in-out"
			></div>
			<div className="container">
				<Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="inline-block" href={href}>
					<div className="max-w-[459px]">
						<header>
							<Badge label={type} size="large" />
							<h3 className="text-[40px] font-bold leading-[normal] text-white">
								{title}
							</h3>
							<p className="mt-2 text-xl font-semibold leading-[20px] text-white">
								{subtitle}
							</p>
						</header>
						<p className="mt-6 font-medium leading-[24px] text-white">
							{description}
						</p>
					</div>
				</Link>
			</div>
		</article>
	);
};

export default CoursesAndWorkshopsHomeCard;
