import Image from 'next/image';
import Link from 'next/link';
import Badge from '../../atoms/badge';
import DateRangeIcon from '../../atoms/icons/date-range-icon';
import ClockIcon from '../../atoms/icons/clock-icon';
import OutlinePlaceIcon from '../../atoms/icons/outilne-place-icon';

interface EventsCardProps {
	slug: string;
	url: string;
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

const EventsCard: React.FC<EventsCardProps> = ({
	slug,
	url,
	title,
	summary,
	date,
	dateString,
	time,
	timeString,
	location,
	type,
	dependency,
}) => (
	<Link className="inline-flex group" href={`agenda-cultural/${slug}`}>
		<article className="rounded-2xl overflow-hidden flex flex-row w-auto group-focus:ring-2 group-active:ring-2 group-hover:ring-1 ring-dark-red transition-all duration-300">
			<figure className="relative w-[260px] h-full flex-shrink-0">
				<Image
					src={url}
					className="object-cover h-full"
					alt={title}
					layout="fill"
				/>
			</figure>
			{/* <div className="bg-white p-6 w-[553px] flex-shrink-0"> */}
			<div className="bg-white p-6 w-auto">
				<header>
					<Badge label={type} size="small" />
					<h3 className="line-clamp-3 text-xl text-dark-blue font-semibold leading-[30px] group-hover:text-dark-red transition-colors duration-200">
						{title}
					</h3>
					<span className="text-xs text-dark-blue-2">
						Dependencia: {dependency}
					</span>
					<div className="leading-[normal] text-sm font-semibold mt-4 space-y-1">
						<div className="flex p-1 gap-2 items-center">
							<DateRangeIcon
								className="shrink-0"
								ariaLabel="Fecha"
								color="dark"
							/>
							<time className="block" dateTime={date}>
								{dateString}
							</time>
						</div>
						<div className="flex p-1 gap-2 items-center">
							<ClockIcon
								className="shrink-0"
								ariaLabel="Hora"
								color="dark"
							/>
							<time className="block" dateTime={time}>
								{timeString}
							</time>
						</div>
						<div className="flex p-1 gap-2 items-center">
							<OutlinePlaceIcon
								className="shrink-0"
								ariaLabel="Lugar"
								color="dark"
							/>
							<p>{location}</p>
						</div>
					</div>
				</header>
				<p className="line-clamp-3 text-dark-blue-2 text-sm leading-[21px] mt-4">
					{summary}
				</p>
			</div>
		</article>
	</Link>
);

export default EventsCard;
