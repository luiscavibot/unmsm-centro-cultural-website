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
				console.log(image);
				return (
					<Image
						className="mb-6 w-full max-w-full"
						src={image.url}
						width={image.width}
						height={image.height}
						alt={image.alternativeText || ""}
					/>
				);
				},
				list: ({ children, format }) => {
					if (format === 'ordered') {
						return <ol className="list-decimal list-outside ml-6">{children}</ol>;
					}
					return <ul className="list-disc list-outside ml-6">{children}</ul>;
				},
				paragraph: ({ children }) => <p className="text-dark-blue-2 mb-5">{children}</p>,
				heading: ({ children, level }) => {
					const Tag = `h${level}` as keyof JSX.IntrinsicElements;
					const sizes = {
						1: 'text-3xl md:text-4xl font-bold mb-6',
						2: 'text-2xl md:text-3xl font-semibold mb-6',
						3: 'text-xl md:text-2xl font-semibold mb-6',
						4: 'text-xl font-medium mb-6',
						5: 'text-lg mb-6',
						6: 'text-base mb-6',
					};
					return <Tag className={sizes[level] || ''}>{children}</Tag>;
				},
				link: ({ children, url }) => {
					return (
						<a
							className="link"
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