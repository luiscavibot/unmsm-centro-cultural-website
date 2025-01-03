import Image from "next/image";

interface ExhibitionsCardProps {
	title: string;
	description: string;
	imageUrl: string;
}

const ExhibitionsCard: React.FC<ExhibitionsCardProps> = ({
	title,
	description,
	imageUrl,
}) => (
	<article className="rounded-3xl overflow-hidden">
		<figure className="relative w-full h-[348px] flex-shrink-0">
			<Image src={imageUrl} className="object-cover" alt={title} layout="fill" />
		</figure>
		<header className="bg-white p-6">
			<h3 className="text-xl text-dark-blue font-bold leading-[30px]">{title}</h3>
			<p className="text-sm text-dark-blue-2 font-normal leading-[21px] mt-1">{description}</p>
		</header>
	</article>
);

export default ExhibitionsCard;
