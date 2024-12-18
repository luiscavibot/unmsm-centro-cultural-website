import Image from "next/image";
import Link from "next/link";
import CalendarIcon from "../../atoms/icons/calendar-icon";
import Badge from "../../atoms/badge";
import DateRangeIcon from "../../atoms/icons/date-range-icon";
import ClockIcon from "../../atoms/icons/clock-icon";
import OutlinePlaceIcon from "../../atoms/icons/outilne-place-icon";

interface CoursesAndWorkshopsCardProps {
	slug: string;
	imageUrl: string;
	type: "Curso" | "Taller";
	title: string;
	subtitle: string;
	description: string;
}

const CoursesAndWorkshopsCard: React.FC<CoursesAndWorkshopsCardProps> = ({ slug, imageUrl, title, type, subtitle, description }) => (
	<Link className="inline-flex group" href={`cursos-y-talleres/${slug}`}>
		<article className="rounded-2xl overflow-hidden flex flex-row w-auto group-focus:ring-2 group-active:ring-2 group-hover:ring-1 ring-dark-red transition-all duration-300">
			<figure className="relative w-[260px] h-full flex-shrink-0">
				<Image src={imageUrl} className="object-cover h-full" alt={title} layout="fill" />
			</figure>
			{/* <div className="bg-white p-6 w-[553px] flex-shrink-0"> */}
			<div className="bg-white p-6 pb-10 w-auto relative">
				<header>
					<Badge label={type} size="small" />
					<h3 className="line-clamp-3 text-xl text-dark-blue font-bold leading-[24px] group-hover:text-dark-red transition-colors duration-200">{title}</h3>
				</header>
				<p className="line-clamp-3 text-dark-blue-2 text-sm leading-[21px] mt-2 mb-2">{description}</p>
				<span className="absolute bottom-5 text-sm font-semibold leading-[14px]">{subtitle}</span>
			</div>
		</article>
	</Link>
);

export default CoursesAndWorkshopsCard