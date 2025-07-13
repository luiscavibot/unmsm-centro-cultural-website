'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { FC, memo } from 'react';
import useResponsivePercentage from '@/ui/hooks/useResponsivePercentage';
import DateRangeIcon from '@/ui/components/atoms/icons/date-range-icon';
import ClockIcon from '@/ui/components/atoms/icons/clock-icon';
import OutlinePlaceIcon from '@/ui/components/atoms/icons/outilne-place-icon';
import { AgendaCultural } from '@/interfaces/services/agenda-cultural.interface';
// import { useCustomDates } from '@/ui/hooks/use-custom-date';
import { getCustomDates } from '@/ui/helpers/get-custom-date';

const EventsHomeCard: FC<AgendaCultural> = ({
	slug,
	image,
	title,
	summary,
	place,
	exact_dates,
	date_ranges,
	hourString,
	dateString,
}) => {
	const { wrapperRef, containerRef, percentage, isLargeScreen } =
		useResponsivePercentage();
	const { daysSummary, singleDate } = getCustomDates(
		exact_dates,
		date_ranges
	);

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
								<time
									className="block"
									dateTime={daysSummary || singleDate?.day}
								>
									{/* {daysSuhourStringmmary || singleDate?.day} */}
									{dateString || '_'}
								</time>
							</div>
							<div className="flex p-1 gap-2 items-center">
								<ClockIcon
									className="shrink-0"
									ariaLabel="Hora"
									color="dark"
								/>
								<time className="block">
									{/* {singleDate?.time} */}
									{hourString || '_'}
								</time>
							</div>
							{/* {singleDate?.time && (
							)} */}
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

export default memo(EventsHomeCard);
