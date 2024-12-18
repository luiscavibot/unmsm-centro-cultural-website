import Image from "next/image";
import Link from "next/link";
import CalendarIcon from "../../atoms/icons/calendar-icon";
import Badge from "../../atoms/badge";
import DateRangeIcon from "../../atoms/icons/date-range-icon";
import ClockIcon from "../../atoms/icons/clock-icon";
import OutlinePlaceIcon from "../../atoms/icons/outilne-place-icon";

interface UpcomingEventsCardProps {
	slug: string;
	title: string;
	date: string;
	dateString: string;
	time: string;
	timeString: string;
	location: string;
	type: string;
	dependency: string;
}

const UpcomingEventsCard: React.FC<UpcomingEventsCardProps> = ({ slug, title, date, dateString, time, timeString, location, type, dependency }) => (
	<Link className="inline-block w-full group" href={`/agenda-cultural/${slug}`}>
		{/* <article className="rounded-2xl overflow-hidden flex flex-row w-[620px] h-[240px]"> */}
		<article className="rounded-2xl overflow-hidden flex flex-row shadow-[0px_2px_13.4px_0px_rgba(0,0,0,0.04)] group-focus:ring-2 group-active:ring-2 group-hover:ring-1 ring-dark-red transition-all duration-300">
			<div className="bg-white p-6 w-full flex-shrink-0">
				<header>
					<Badge label={type} size="small" />
					{/* <div className="flex flex-row items-center justify-start gap-2 mb-1">
						<CalendarIcon className="shrink-0" ariaLabel="Fecha" color="dark" />
						<time dateTime={date} className="text-dark-blue-2 text-sm leading-[21px]">{dateString}</time>
					</div> */}
					<h3 className="line-clamp-3 text-xl text-dark-blue font-semibold leading-[30px] group-hover:text-dark-red transition-colors duration-200">{title}</h3>
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
			</div>
		</article>
	</Link>
);

export default UpcomingEventsCard