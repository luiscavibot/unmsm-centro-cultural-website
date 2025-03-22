import Image from "next/image";
import Link from "next/link";
import CalendarIcon from "../../atoms/icons/calendar-icon";

interface FeaturedNewsCardProps {
	url: string;
	date: string;
	dateString: string;
	title: string;
	summary: string;
	slug: string;
}

const FeaturedNewsCard: React.FC<FeaturedNewsCardProps> = ({ url, date, dateString, title, summary, slug }) => (
	<Link className="group" href={`noticias/${slug}`}>
		<article className="flex flex-col w-full h-[410px]">
			<figure className="relative w-full h-[240px] rounded-3xl overflow-hidden flex-shrink-0">
				<Image src={url} className="object-cover" alt={title} layout="fill" />
			</figure>
			<div className="bg-white p-6 w-full flex-shrink-0 text-center">
				<header>
					<div className="flex flex-row items-center justify-center gap-2 mb-1">
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

export default FeaturedNewsCard