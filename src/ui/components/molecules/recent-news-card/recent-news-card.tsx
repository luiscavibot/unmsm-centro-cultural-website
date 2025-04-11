import Link from "next/link";
import CalendarIcon from "../../atoms/icons/calendar-icon";
import { Noticias } from "@/interfaces/services/noticias.interface";
import { formatFullDate } from "@/ui/helpers/format-full-date";

type RecentNewsCardProps = Pick<
	Noticias,
	'slug' | 'titulo' | 'fechaPublicacion'
>;

const RecentNewsCard: React.FC<RecentNewsCardProps> = ({ slug, titulo, fechaPublicacion }) => (
	<Link className="inline-block w-full group" href={`/noticias/${slug}`}>
		<article className="rounded-2xl h-full overflow-hidden flex flex-row shadow-[0px_2px_13.4px_0px_rgba(0,0,0,0.04)] group-focus:ring-2 group-active:ring-2 group-hover:ring-1 ring-dark-red transition-all duration-300">
			<div className="bg-white p-6 w-full flex-shrink-0">
				<header>
					<div className="flex flex-row items-center justify-start gap-2 mb-1">
						<CalendarIcon className="shrink-0" ariaLabel="Fecha" color="dark" />
						<time dateTime={fechaPublicacion} className="text-dark-blue-2 font-medium text-sm leading-[21px]">{formatFullDate(fechaPublicacion)}</time>
					</div>
					<h3 className="line-clamp-3 text-xl text-dark-blue font-semibold leading-[30px] group-hover:text-dark-red transition-colors duration-200">{titulo}</h3>
				</header>
			</div>
		</article>
	</Link>
);

export default RecentNewsCard