import Image from 'next/image';
import Link from 'next/link';
import Badge from '../../atoms/badge';
import DateRangeIcon from '../../atoms/icons/date-range-icon';
import ClockIcon from '../../atoms/icons/clock-icon';
import OutlinePlaceIcon from '../../atoms/icons/outilne-place-icon';
import { AgendaCultural } from '@/interfaces/services/agenda-cultural.interface';

const EventsCard: React.FC<AgendaCultural> = ({
	slug,
	image,
	title,
	summary,
	place,
	mode,
	organizer,
	dateString,
	hourString,
}) => {
	return (
		<Link
			className="inline-flex group w-full"
			href={`agenda-cultural/${slug}`}
		>
			<article className="rounded-2xl overflow-hidden flex flex-row w-auto group-focus:ring-2 group-active:ring-2 group-hover:ring-1 ring-dark-red transition-all duration-300 grow h-[19.3125rem] md:h-[21.625rem]">
				<figure className="relative w-[500px] h-full flex-shrink-0 max-xl:hidden">
					<Image
						src={image.url}
						className="object-cover h-full"
						alt={title}
						fill
						sizes="(max-width: 768px) 100vw, 900px"
						quality={80}
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
							{dateString && (
								<div className="flex p-1 gap-2 items-center">
									<DateRangeIcon
										className="shrink-0"
										ariaLabel="Fecha"
										color="dark"
									/>
									<time
										className="block"
										dateTime={dateString}
									>
										{dateString}
									</time>
								</div>
							)}
							{hourString && (
								<div className="flex p-1 gap-2 items-center">
									<ClockIcon
										className="shrink-0"
										ariaLabel="Hora"
										color="dark"
									/>
									<time className="block">{hourString}</time>
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
	);
};

export default EventsCard;
