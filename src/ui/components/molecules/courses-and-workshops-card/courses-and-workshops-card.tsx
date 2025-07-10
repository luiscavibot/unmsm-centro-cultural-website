import Image from 'next/image';
import Link from 'next/link';
import Badge from '../../atoms/badge';

interface CoursesAndWorkshopsCardProps {
	slug: string;
	url: string;
	tipo: string;
	titulo: string;
	dependencia: string | null;
	resumen: string | null;
}

const CoursesAndWorkshopsCard: React.FC<CoursesAndWorkshopsCardProps> = ({
	slug,
	url,
	titulo,
	tipo,
	dependencia,
	resumen,
}) => (
	<Link
		className="inline-flex group w-full"
		href={`cursos-y-talleres/${slug}`}
	>
		<article className="rounded-2xl overflow-hidden flex flex-row w-auto group-focus:ring-2 group-active:ring-2 group-hover:ring-1 ring-dark-red transition-all duration-300 grow md:min-h-[224px]">
			<figure className="relative w-[180px] lg:w-[450px] h-full flex-shrink-0 max-xl:hidden">
				<Image
					src={url}
					className="object-cover h-full"
					alt={titulo}
					fill
					sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
				/>
			</figure>
			{/* <div className="bg-white p-6 w-[553px] flex-shrink-0"> */}
			<div className="bg-white p-6 pb-10 w-auto relative grow">
				<header>
					<Badge label={tipo} size="small" />
					<h3 className="line-clamp-2 text-xl text-dark-blue font-bold leading-[24px] group-hover:text-dark-red transition-colors duration-200">
						{titulo}
					</h3>
				</header>
				{resumen && (
					<p className="line-clamp-3 text-dark-blue-2 text-sm leading-[21px] mt-2 mb-2">
						{resumen}
					</p>
				)}
				{dependencia && (
					<span className="absolute bottom-5 text-sm font-semibold leading-[14px] line-clamp-1">
						{dependencia}
					</span>
				)}
			</div>
		</article>
	</Link>
);

export default CoursesAndWorkshopsCard;
