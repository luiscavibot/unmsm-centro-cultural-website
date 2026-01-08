import Image from 'next/image';
import Link from 'next/link';
import CalendarIcon from '../../atoms/icons/calendar-icon';
import { formatFullDateWithDay } from '@/ui/helpers/format-full-date-with-day';

interface NewsCardProps {
	url: string;
	fechaPublicacion: string;
	// dateString: string;
	titulo: string;
	resumen: string | null;
	slug: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ url, fechaPublicacion, titulo, resumen, slug }) => (
	<Link className="inline-flex group grow" href={`noticias/${slug}`}>
		<article className="rounded-2xl overflow-hidden flex flex-row w-auto group-focus:ring-2 group-active:ring-2 group-hover:ring-1 ring-dark-red transition-all duration-300 grow md:min-h-[230px]">
			<figure className="relative w-[180px] lg:w-[400px] xl:w-[450px] h-full flex-shrink-0 max-lg:hidden">
				<Image
					src={url}
					className="object-cover h-full"
					alt={titulo}
					fill
          sizes="(max-width: 768px) 100vw, 900px"
					quality={80}
				/>
			</figure>
			<div className="bg-white p-6 w-auto grow">
				<header>
					<div className="flex flex-row items-center justify-start gap-2 mb-1">
						<CalendarIcon
							className="shrink-0"
							ariaLabel="Fecha"
							color="dark"
						/>
						<time
							dateTime={fechaPublicacion}
							className="text-dark-blue-2 text-sm leading-[21px]"
						>
							{formatFullDateWithDay(fechaPublicacion)}
						</time>
					</div>
					<h3 className="line-clamp-3 text-xl text-dark-blue font-semibold leading-[30px] group-hover:text-dark-red transition-colors duration-200">
						{titulo}
					</h3>
				</header>
				{
					resumen &&
					<p className="line-clamp-3 text-dark-blue-2 text-sm leading-[21px] mt-1">
						{resumen}
					</p>
				}
			</div>
		</article>
	</Link>
);

export default NewsCard;
