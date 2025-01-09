import Image from "next/image";

interface ExhibitionVargasLlosaCardProps {
	title: string;
	imageUrl: string;
	description: string;
}

const ExhibitionVargasLlosaCard: React.FC<ExhibitionVargasLlosaCardProps> = ({ imageUrl, title, description }) => (

	<article className="group flex flex-col w-full h-auto">
		<figure className="relative w-full h-[346px] rounded-3xl overflow-hidden flex-shrink-0">
			<Image src={imageUrl} className="object-cover" alt={title} layout="fill" />
		</figure>
		<div className="bg-transparent p-6 w-full flex-shrink-0 flex gap-6 items-baseline">
			<header className="w-[183px] shrink-0">
				<h3 className="text-base text-white font-extrabold leading-[24px] transition-colors duration-200">{title}</h3>
			</header>
			<div className="text-white text-sm leading-[21px]">{description}</div>
		</div>
	</article>
);

export default ExhibitionVargasLlosaCard