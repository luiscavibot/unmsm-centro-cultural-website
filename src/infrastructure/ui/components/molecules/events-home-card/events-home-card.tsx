'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react'
import useResponsivePercentage from '@/infrastructure/ui/hooks/useResponsivePercentage';
import DateRangeIcon from '@/infrastructure/ui/components/atoms/icons/date-range-icon';
import ClockIcon from '@/infrastructure/ui/components/atoms/icons/clock-icon';
import OutlinePlaceIcon from '@/infrastructure/ui/components/atoms/icons/outilne-place-icon';

interface EventsHomeCardProps {
	href: string;
	imageUrl: string;
	title: string;
	summary: string;
	date: string;
	dateString: string;
	time: string;
	timeString: string;
	location: string;
}

const EventsHomeCard: FC<EventsHomeCardProps> = ({ href, imageUrl, title, summary, date, dateString, time, timeString, location }) => {

	const { wrapperRef, containerRef, percentage } = useResponsivePercentage();

	return (
		<article
			ref={wrapperRef}
			className="h-[720px] relative bg-white px-[104px]"
		>
			<figure className="absolute top-0 left-0 w-[57%] h-full">
				<Image
					src={imageUrl}
					className="object-cover"
					alt="events"
					fill
				/>
			</figure>
			<div
				ref={containerRef}
				className="grid h-[720px] container"
				style={{ gridTemplateColumns: `${percentage}% auto` }}
			>
				<div className="bg-white text-dark-text-color pl-16 py-14 flex items-end col-start-2">
					<div className="mb-16">
						<header>
							<h3 className="text-[40px] font-bold leading-[normal] mb-4">
								<Link href={href}>
									{title}
								</Link>
							</h3>
						</header>
						<p className="leading-6">
							{summary}
						</p>
						<div className="leading-[normal] text-sm font-semibold mt-5 space-y-1">
							<div className="flex p-1 gap-2 items-center">
								<DateRangeIcon className="shrink-0" ariaLabel="Fecha" color="dark" />
								<time className="block" dateTime={date}>
									{dateString}
								</time>
							</div>
							<div className="flex p-1 gap-2 items-center">
								<ClockIcon className="shrink-0" ariaLabel="Hora" color="dark" />
								<time className="block" dateTime={time}>
									{timeString}
								</time>
							</div>
							<div className="flex p-1 gap-2 items-center">
								<OutlinePlaceIcon className="shrink-0" ariaLabel="Lugar" color="dark" />
								<p>
									{location}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</article>
	)
}

export default EventsHomeCard