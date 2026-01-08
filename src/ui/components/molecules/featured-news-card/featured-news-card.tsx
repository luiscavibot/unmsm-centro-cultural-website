import Image from "next/image";
import Link from "next/link";
import CalendarIcon from "../../atoms/icons/calendar-icon";
import { formatFullDateWithDay } from "@/ui/helpers/format-full-date-with-day";

interface FeaturedNewsCardProps {
	url: string;
	fechaPublicacion: string;
	// dateString: string;
	titulo: string;
	resumen: string | null;
	slug: string;
}

const FeaturedNewsCard: React.FC<FeaturedNewsCardProps> = ({ url, fechaPublicacion, titulo, resumen, slug }) => (
	<Link className="group" href={`noticias/${slug}`}>
		<article className="flex flex-col w-full h-[419px] justify-center">
      {url ? (
			<figure className="relative w-full h-[240px] rounded-3xl overflow-hidden flex-shrink-0">
				<Image
					src={url}
					className="object-cover h-full"
					alt={titulo}
					fill
					sizes="(max-width: 768px) 100vw, 900px"
					quality={80}
				/>
			</figure>
      ) : null}
			<div className="bg-white p-6 w-full flex-shrink-0 text-center">
				<header>
					<div className="flex flex-row items-center justify-center gap-2 mb-1">
						<CalendarIcon className="shrink-0" ariaLabel="Fecha" color="dark" />
						<time dateTime={fechaPublicacion} className="text-dark-blue-2 text-sm leading-[21px]">{formatFullDateWithDay(fechaPublicacion)}</time>
					</div>
					<h3 className="line-clamp-2 text-xl text-dark-blue font-semibold leading-[30px] group-hover:text-dark-red transition-colors duration-200">{titulo}</h3>
				</header>
				{
					resumen &&
					<p className="line-clamp-2 text-dark-blue-2 text-sm leading-[21px] mt-1">{resumen}</p>
				}
			</div>
		</article>
	</Link>
);

export default FeaturedNewsCard