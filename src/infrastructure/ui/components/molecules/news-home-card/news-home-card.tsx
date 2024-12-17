import Image from "next/image";
import Link from "next/link";
import CalendarIcon from "../../atoms/icons/calendar-icon";

interface NewsHomeCardProps {
	imageUrl: string;
	date: string;
	dateString: string;
	title: string;
	summary: string;
	slug: string;
}

const NewsHomeCard: React.FC<NewsHomeCardProps> = ({ imageUrl, date, dateString, title, summary, slug }) => (
	<Link href={`noticias/${slug}`}>
		<article className="rounded-2xl overflow-hidden flex flex-row w-[620px] h-[240px]">
			<figure className="relative w-[240px] h-[240px] flex-shrink-0">
				<Image src={imageUrl} className="object-cover" alt={title} layout="fill" />
			</figure>
			<div className="bg-white p-6 w-[380px] flex-shrink-0">
				<header>
					<div className="flex flex-row items-center justify-start gap-2 mb-1">
						<CalendarIcon className="shrink-0" ariaLabel="Fecha" color="dark" />
						<time dateTime={date} className="text-dark-blue-2 text-sm leading-[21px]">{dateString}</time>
					</div>
					<h3 className="line-clamp-3 text-xl text-dark-blue font-semibold leading-[30px]">{title}</h3>
				</header>
				<p className="line-clamp-3 text-dark-blue-2 text-sm leading-[21px] mt-1">{summary}</p>
			</div>
		</article>
	</Link>
);

export default NewsHomeCard