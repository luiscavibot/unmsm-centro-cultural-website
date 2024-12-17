import Image from "next/image";
import Link from "next/link";
import CalendarIcon from "../../atoms/icons/calendar-icon";
import Badge from "../../atoms/badge";
import DateRangeIcon from "../../atoms/icons/date-range-icon";
import ClockIcon from "../../atoms/icons/clock-icon";
import OutlinePlaceIcon from "../../atoms/icons/outilne-place-icon";

interface NewsCardProps {
	slug: string;
	imageUrl: string;
	title: string;
	summary: string;
	date: string;
	dateString: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ slug, imageUrl, title, summary, date, dateString }) => (
	<Link className="inline-flex group" href={`agenda-cultural/${slug}`}>
		<article className="rounded-2xl overflow-hidden flex flex-row w-auto group-focus:ring-2 group-active:ring-2 group-hover:ring-1 ring-dark-red transition-all duration-300">
			<figure className="relative w-[260px] h-full flex-shrink-0">
				<Image src={imageUrl} className="object-cover h-full" alt={title} layout="fill" />
			</figure>
			<div className="bg-white p-6 w-auto">
				<header>
					<div className="flex flex-row items-center justify-start gap-2 mb-1">
						<CalendarIcon className="shrink-0" ariaLabel="Fecha" color="dark" />
						<time dateTime={date} className="text-dark-blue-2 text-sm leading-[21px]">{dateString}</time>
					</div>
					<h3 className="line-clamp-3 text-xl text-dark-blue font-semibold leading-[30px] group-hover:text-dark-red transition-colors duration-200">{title}</h3>
				</header>
				<p className="line-clamp-3 text-dark-blue-2 text-sm leading-[21px] mt-1">{summary}</p>
			</div>
		</article>
	</Link>
);

export default NewsCard