import Image from "next/image";
import Link from "next/link";

interface NewsCardProps {
	imageUrl: string;
	date: string;
	dateString: string;
	title: string;
	description: string;
	href: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ imageUrl, date, dateString, title, description, href }) => (
	<Link href={href}>
		<article className="rounded-2xl overflow-hidden flex flex-row w-[620px] h-[240px]">
			<figure className="relative w-[240px] h-[240px] flex-shrink-0">
				<Image src={imageUrl} className="object-cover" alt={title} layout="fill" />
			</figure>
			<div className="bg-white p-6 w-[380px] flex-shrink-0">
				<header>
					<time dateTime={date} className="text-dark-blue-2 text-sm leading-[21px] mb-1">{dateString}</time>
					<h3 className="line-clamp-3 text-xl text-dark-blue font-semibold leading-[30px]">{title}</h3>
				</header>
				<p className="line-clamp-3 text-dark-blue-2 text-sm leading-[21px] mt-1">{description}</p>
			</div>
		</article>
	</Link>
);

export default NewsCard