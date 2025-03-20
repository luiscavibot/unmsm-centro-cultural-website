'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import useResponsivePercentage from '@/ui/hooks/useResponsivePercentage';
import DateRangeIcon from '@/ui/components/atoms/icons/date-range-icon';
import ClockIcon from '@/ui/components/atoms/icons/clock-icon';
import OutlinePlaceIcon from '@/ui/components/atoms/icons/outilne-place-icon';
import { AngendaCultural } from '@/interfaces/services/agenda-cultural.interface';

// interface EventsHomeCardProps {
// 	slug: string;
// 	imageUrl: string;
// 	title: string;
// 	summary: string;
// 	date: string;
// 	dateString: string;
// 	time: string;
// 	timeString: string;
// 	location: string;
// }

const EventsHomeCard: FC<AngendaCultural> = ({
	slug,
	image,
	title,
	summary,
	// date,
	// dateString,
	// time,
	// timeString,
	place,
}) => {
	const { wrapperRef, containerRef, percentage, isLargeScreen } =
		useResponsivePercentage();

	return (
		<article
			ref={wrapperRef}
			className="lg:h-[720px] relative bg-white px-6 lg:px-[104px]"
		>
			<Link
				href={`agenda-cultural/${slug}`}
				className="lg:absolute lg:top-0 lg:left-0 lg:w-[57%] max-lg:!h-[320px] lg:h-full block peer"
			>
				<figure>
					<Image
						src={image.url}
						className="object-cover max-lg:!h-[320px]"
						alt="events"
						fill
					/>
				</figure>
			</Link>
			<div
				ref={containerRef}
				className="grid lg:h-[720px] container text-dark-text-color peer-hover:text-dark-red"
				style={
					isLargeScreen
						? { gridTemplateColumns: `${percentage}% auto` }
						: undefined
				}
			>
				<div className="bg-white lg:pl-16 py-8 lg:py-14 flex items-end col-start-2">
					<Link
						href={`agenda-cultural/${slug}`}
						className="mb-16 hover:text-dark-red transition-colors duration-200"
					>
						<header>
							<h3 className="block text-2xl lg:text-[40px] font-bold leading-[normal] mb-4 text-inherit">
								{title}
							</h3>
						</header>
						<p className="leading-6 text-sm lg:text-base">
							{summary}
						</p>
						<div className="leading-[normal] text-sm font-semibold mt-4 lg:mt-5 space-y-1">
							<div className="flex p-1 gap-2 items-center">
								<DateRangeIcon
									className="shrink-0"
									ariaLabel="Fecha"
									color="dark"
								/>
								{/* <time className="block" dateTime={date}>
									{dateString}
								</time> */}
							</div>
							<div className="flex p-1 gap-2 items-center">
								<ClockIcon
									className="shrink-0"
									ariaLabel="Hora"
									color="dark"
								/>
								{/* <time className="block" dateTime={time}>
									{timeString}
								</time> */}
							</div>
							<div className="flex p-1 gap-2 items-center">
								<OutlinePlaceIcon
									className="shrink-0"
									ariaLabel="Lugar"
									color="dark"
								/>
								<p>{place}</p>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</article>
	);
};

export default EventsHomeCard;
