import Link from 'next/link'
import React, { FC } from 'react'
import ArrowBreadcrumbIcon from '@/infrastructure/ui/components/atoms/icons/arrow-breadcrumb-icon'

interface BreadcrumbProps {
	items: {
		title: string,
		path: string
	}[]
}

const Breadcrumb: FC<BreadcrumbProps> = ({ items }) => {
	return (
		<nav aria-label="breadcrumb" className="mb-[104px]">
			<ol className="flex items-center gap-2">
				{
					items.map((item, index) => {
						return (
							<li key={index} className="flex items-center gap-2">
								{
									index !== items.length - 1 ?
										<>
											<Link href={item.path} className="text-gray hover:underline font-medium">
												{item.title}
											</Link>
											<ArrowBreadcrumbIcon color="dark" />
										</>
										:
										<span className="text-dark-blue-2 font-semibold">
											{item.title}
										</span>
								}
							</li>
						)
					})
				}
			</ol>
		</nav>
	)
}

export default Breadcrumb