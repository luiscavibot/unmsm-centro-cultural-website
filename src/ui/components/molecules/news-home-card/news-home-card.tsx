import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import CalendarIcon from "../../atoms/icons/calendar-icon";
import { formatFullDateWithDay } from "@/ui/helpers/format-full-date-with-day";

interface NewsHomeCardProps {
	url: string;
	fechaPublicacion: string;
	titulo: string;
	resumen: string | null;
	slug: string;
}

const NewsHomeCard: FC<NewsHomeCardProps> = ({ url, fechaPublicacion, titulo, resumen, slug }) => (
	<Link className="block group w-full lg:w-[620px] h-[240px]" href={`noticias/${slug}`}>
		<article className="rounded-2xl overflow-hidden flex flex-row h-full">
      {url ? (
        <figure className="max-lg:hidden relative w-[240px] h-[240px] flex-shrink-0">
          <Image
            src={url}
            className="object-cover"
            alt={titulo}
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            quality={80}
          />
        </figure>
      ) : null}
			<div className={`bg-white p-6 w-auto ${url ? 'lg:w-[380px]' : 'lg:w-[620px]'} lg:flex-shrink-0`}>
				<header>
					<div className="flex flex-row items-center justify-start gap-2 mb-1">
						<CalendarIcon className="shrink-0" ariaLabel="Fecha" color="dark" />
						<time dateTime={fechaPublicacion} className="text-dark-blue-2 font-medium text-sm leading-[21px]">{formatFullDateWithDay(fechaPublicacion)}</time>
					</div>
					<h3 className="line-clamp-3 text-xl text-dark-blue font-semibold leading-[30px] group-hover:text-dark-red transition-colors duration-200">{titulo}</h3>
				</header>
				{
					resumen &&
					<p className="line-clamp-3 text-dark-blue-2 text-sm leading-[21px] mt-1">{resumen}</p>
				}
			</div>
		</article>
	</Link>
);

export default NewsHomeCard