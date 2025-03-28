import Link from 'next/link';
import React, { FC } from 'react';
import ArrowBreadcrumbIcon from '@/ui/components/atoms/icons/arrow-breadcrumb-icon';

interface BreadcrumbProps {
	items: {
		title: string;
		path: string;
	}[];
	theme?: 'dark' | 'light';
}

const Breadcrumb: FC<BreadcrumbProps> = ({ items, theme = 'light' }) => {
	return (
		<nav aria-label="breadcrumb" className="mb-20 md:mb-[104px]">
			<ol className="flex items-baseline flex-wrap gap-x-2 gap-y-1">
				{items.map((item, index) => {
					return (
						<li key={index} className="flex items-center gap-2">
							{index !== items.length - 1 ? (
								item.path === '' ? (
									<>
										<span
											className={
												'font-medium' +
												(theme === 'dark'
													? ' text-white'
													: 'text-gray')
											}
										>
											{item.title}
										</span>
										<ArrowBreadcrumbIcon className="shrink-0" color={theme} />
									</>
								) : (
									<>
										<Link
											href={item.path}
											className={
												'hover:underline font-medium' +
												(theme === 'dark'
													? ' text-white'
													: 'text-gray')
											}
										>
											{item.title}
										</Link>
										<ArrowBreadcrumbIcon className="shrink-0" color={theme} />
									</>
								)
							) : (
								<span
									className={
										'font-semibold' +
										(theme === 'dark'
											? ' text-white'
											: 'text-dark-blue-2')
									}
								>
									{item.title}
								</span>
							)}
						</li>
					);
				})}
			</ol>
		</nav>
	);
};

export default Breadcrumb;
