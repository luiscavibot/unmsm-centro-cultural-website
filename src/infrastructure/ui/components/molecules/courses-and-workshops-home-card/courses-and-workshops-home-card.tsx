import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react'

interface CoursesAndWorkshopsHomeCardProps {
	href: string;
	imageUrl: string;
	type: "curso" | "taller";
	title: string;
	subtitle: string;
	description: string;
}

const CoursesAndWorkshopsHomeCard: FC<CoursesAndWorkshopsHomeCardProps> = ({ href, imageUrl, type, title, subtitle, description }) => {
	return (
		<article className="relative px-[104px] pt-[96px] pb-[56px] h-[720px]">
			<figure className="absolute top-0 left-0 w-full h-full -z-10">
				<Image src={imageUrl} className="object-cover" alt="events" fill />
			</figure>
			<div aria-hidden="true" className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(23,26,29,0.64)]"></div>
			<div className="container">
				<Link className="inline-block" href={href}>
					<div className="max-w-[459px]">
						<header>
							<span className="inline-block px-2 py-[6px] bg-light-info-color text-dark-info-color rounded-md font-medium mb-2 capitalize">{type}</span>
							<h3 className="text-[40px] font-bold leading-[normal]">{title}</h3>
							<p className="mt-2 text-xl font-semibold leading-[20px]">{subtitle}</p>
						</header>
						<p className="mt-6 font-medium leading-[24px]">{description}</p>
					</div>
				</Link>
			</div>
		</article>
	)
}

export default CoursesAndWorkshopsHomeCard