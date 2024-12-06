import Image from "next/image";
import Link from "next/link";
import CalendarIcon from "../../atoms/icons/calendar-icon";
import Badge from "../../atoms/badge";
import DateRangeIcon from "../../atoms/icons/date-range-icon";
import ClockIcon from "../../atoms/icons/clock-icon";
import OutlinePlaceIcon from "../../atoms/icons/outilne-place-icon";

interface EventsCardProps {
	href: string;
	imageUrl: string;
	title: string;
	summary: string;
	date: string;
	dateString: string;
	time: string;
	timeString: string;
	location: string;
	type: string;
	dependency: string;
}

const EventsCard: React.FC<EventsCardProps> = ({ href, imageUrl, title, summary, date, dateString, time, timeString, location, type, dependency }) => (
	<Link className="inline-flex" href={href}>
		{/* <article className="rounded-2xl overflow-hidden flex flex-row w-[620px] h-[240px]"> */}
		<article className="rounded-2xl overflow-hidden flex flex-row w-[813pxpx]">
			{/* <figure className="relative w-[240px] h-[240px] flex-shrink-0"> */}
			<figure className="relative w-[260px] h-full flex-shrink-0">
				<Image src={imageUrl} className="object-cover h-full" alt={title} layout="fill" />
			</figure>
			<div className="bg-white p-6 w-[553px] flex-shrink-0">
				<header>
					<Badge label={type} size="small" />
					{/* <div className="flex flex-row items-center justify-start gap-2 mb-1">
						<CalendarIcon className="shrink-0" ariaLabel="Fecha" color="dark" />
						<time dateTime={date} className="text-dark-blue-2 text-sm leading-[21px]">{dateString}</time>
					</div> */}
					<h3 className="line-clamp-3 text-xl text-dark-blue font-semibold leading-[30px]">{title}</h3>
					<span className="text-xs text-dark-blue-2">Dependencia: {dependency}</span>
					<div className="leading-[normal] text-sm font-semibold mt-4 space-y-1">
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
				</header>
				<p className="line-clamp-3 text-dark-blue-2 text-sm leading-[21px] mt-4">{summary}</p>
			</div>
		</article>
	</Link>
);

export default EventsCard