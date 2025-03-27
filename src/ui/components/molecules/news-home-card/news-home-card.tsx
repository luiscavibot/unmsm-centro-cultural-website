import Image from "next/image";
import Link from "next/link";
import CalendarIcon from "../../atoms/icons/calendar-icon";

interface NewsHomeCardProps {
	url: string;
	date: string;
	dateString: string;
	title: string;
	summary: string;
	slug: string;
}

const NewsHomeCard: React.FC<NewsHomeCardProps> = ({ url, date, dateString, title, summary, slug }) => (
	<Link className="group w-full lg:w-[620px] h-[240px]" href={`noticias/${slug}`}>
		<article className="rounded-2xl overflow-hidden flex flex-row">
			<figure className="max-lg:hidden relative w-[240px] h-[240px] flex-shrink-0">
				<Image src={url} className="object-cover" alt={title} fill />
			</figure>
			<div className="bg-white p-6 w-auto lg:w-[380px] lg:flex-shrink-0">
				<header>
					<div className="flex flex-row items-center justify-start gap-2 mb-1">
						<CalendarIcon className="shrink-0" ariaLabel="Fecha" color="dark" />
						<time dateTime={date} className="text-dark-blue-2 font-medium text-sm leading-[21px]">{dateString}</time>
					</div>
					<h3 className="line-clamp-3 text-xl text-dark-blue font-semibold leading-[30px] group-hover:text-dark-red transition-colors duration-200">{title}</h3>
				</header>
				<p className="line-clamp-3 text-dark-blue-2 text-sm leading-[21px] mt-1">{summary}</p>
			</div>
		</article>
	</Link>
);

export default NewsHomeCard