"use client";
import Image from "next/image";

import {
	BlocksRenderer,
	type BlocksContent,
	} from "@strapi/blocks-react-renderer";

export default function BlockRendererClient({
	content,
	}: {
		readonly content: BlocksContent;
	}) {
	if (!content) return null;
	return (
		<BlocksRenderer
			content={content}
			blocks={{
				image: ({ image }) => {
				// console.log(image);
				return (
					<Image
						className="mt-10 mb-10 mx-auto w-full max-w-full md:max-w-[90%] md:rounded-3xl"
						src={image.url}
						width={image.width}
						height={image.height}
						alt={image.alternativeText || ""}
						quality={100}
					/>
				);
				},
				list: ({ children, format }) => {
					if (format === 'ordered') {
						return <ol className="list-decimal list-outside text-dark-blue-2 ml-6">{children}</ol>;
					}
					return <ul className="list-disc list-outside text-dark-blue-2 ml-6">{children}</ul>;
				},
				paragraph: ({ children }) => <p className="text-dark-blue-2 mb-5">{children}</p>,
				heading: ({ children, level }) => {
					const Tag = `h${level}` as keyof JSX.IntrinsicElements;
					const sizes = {
						1: 'text-3xl md:text-4xl font-bold text-dark-blue-2 mb-6',
						2: 'text-2xl md:text-3xl font-semibold text-dark-blue-2 mb-6',
						3: 'text-xl md:text-2xl font-semibold text-dark-blue-2 mb-6',
						4: 'text-xl font-medium text-dark-blue-2 mb-6',
						5: 'text-lg text-dark-blue-2 mb-6',
						6: 'text-base text-dark-blue-2 mb-6',
					};
					return <Tag className={sizes[level] || ''}>{children}</Tag>;
				},
				link: ({ children, url }) => {
					return (
						<a
							className="link text-dark-blue-2"
							href={url}
							target="_blank"
							rel="noopener noreferrer"
						>
							{children}
						</a>
					);
				},
			}}
		/>
	);
}