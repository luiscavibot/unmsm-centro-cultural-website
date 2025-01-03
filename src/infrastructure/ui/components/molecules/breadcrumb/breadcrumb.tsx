import Link from 'next/link'
import React, { FC } from 'react'
import ArrowBreadcrumbIcon from '@/infrastructure/ui/components/atoms/icons/arrow-breadcrumb-icon'

interface BreadcrumbProps {
	items: {
		title: string,
		path: string
	}[]
	theme?: 'dark' | 'light'
}

const Breadcrumb: FC<BreadcrumbProps> = ({ items, theme = 'light' }) => {

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
											<Link href={item.path} className={"hover:underline font-medium" + (theme === 'dark' ? ' text-white' : 'text-gray')}>
												{item.title}
											</Link>
											<ArrowBreadcrumbIcon color={theme} />
										</>
										:
										<span className={"font-semibold" + (theme === 'dark' ? ' text-white' : 'text-dark-blue-2')}>
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