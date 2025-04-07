import Image from 'next/image';
import Link from 'next/link';
import Badge from '../../atoms/badge';
import DateRangeIcon from '../../atoms/icons/date-range-icon';
import ClockIcon from '../../atoms/icons/clock-icon';
import OutlinePlaceIcon from '../../atoms/icons/outilne-place-icon';
import { AgendaCultural } from '@/interfaces/services/agenda-cultural.interface';
import { getCustomDates } from '@/ui/helpers/get-custom-date';

// interface EventsCardProps {
// 	slug: string;
// 	url: string;
// 	title: string;
// 	summary: string;
// 	date: string;
// 	dateString: string;
// 	time: string;
// 	timeString: string;
// 	place: string;
// 	type: string;
// 	dependency: string;
// 	image: string;
// }

const EventsCard: React.FC<AgendaCultural> = ({
	slug,
	image,
	title,
	summary,
	place,
	exact_dates,
	date_ranges,
	mode,
	organizer,
}) => {


	const { daysSummary, singleDate } = getCustomDates(
		exact_dates,
		date_ranges
	);

	return (

	<Link className="inline-flex group w-full" href={`agenda-cultural/${slug}`}>
		<article className="rounded-2xl overflow-hidden flex flex-row w-auto group-focus:ring-2 group-active:ring-2 group-hover:ring-1 ring-dark-red transition-all duration-300 grow md:min-h-[346px]">
			<figure className="relative w-[500px] h-full flex-shrink-0 max-xl:hidden">
				<Image
					src={image.url}
					className="object-cover h-full"
					alt={title}
					fill
				/>
			</figure>
			{/* <div className="bg-white p-6 w-[553px] flex-shrink-0"> */}
			<div className="bg-white p-6 w-auto grow">
				<header>
					<Badge label={mode} size="small" />
					<h3 className="line-clamp-2 text-xl text-dark-blue font-semibold leading-[30px] group-hover:text-dark-red transition-colors duration-200">
						{title}
					</h3>
					<span className="text-xs text-dark-blue-2">
						Dependencia: {organizer}
					</span>
					<div className="leading-[normal] text-sm font-semibold mt-4 space-y-1">
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
								{daysSummary || singleDate?.day}
							</time>
						</div>
						{singleDate?.time && (
							<div className="flex p-1 gap-2 items-center">
								<ClockIcon
									className="shrink-0"
									ariaLabel="Hora"
									color="dark"
								/>
								<time className="block">
									{singleDate?.time}
								</time>
							</div>
						)}
						<div className="flex p-1 gap-2 items-center">
							<OutlinePlaceIcon
								className="shrink-0"
								ariaLabel="Lugar"
								color="dark"
							/>
							<p>{place}</p>
						</div>
					</div>
				</header>
				<p className="line-clamp-3 text-dark-blue-2 text-sm leading-[21px] mt-4 max-md:hidden">
					{summary}
				</p>
			</div>
		</article>
	</Link>
	
)};

export default EventsCard;
